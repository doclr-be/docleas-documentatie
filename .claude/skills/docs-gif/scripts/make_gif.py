#!/usr/bin/env python3
"""Bouwt een stappen-gif voor de docleas-handleiding uit schone screenshots.

Gebruik:  python3 make_gif.py config.json

Elke stap beweegt een zelfgetekende cursor vloeiend naar een klikpositie, schakelt dan naar
het volgende screenshot (de toestand NA de klik) en toont een genummerd bijschrift onderaan.
De screenshots moeten zonder cursor van de Claude-extensie genomen zijn.

config.json:
{
  "out": "/abs/pad/naar/uitvoer.gif",
  "start": [900, 150],                 # beginpositie van de cursor
  "states": ["s0.jpg", "s1.jpg", ...], # states[0] = beginscherm (zonder bijschrift)
  "steps": [
    {"to": [1164, 218], "state": 1, "caption": "Klik op + om ..."},
    {"to": [824, 134],  "state": 2, "caption": "Vul het e-mailadres in"},
    {"to": [583, 310],  "state": 5, "caption": "Kies een rol"},
    {"to": [500, 412],  "state": 6, "caption": "Kies een rol"},          # zelfde tekst = zelfde stap
    {"to": [840, 589],  "state": 9, "caption": "Klik op Toevoegen ...", "last": true}
  ]
}
Optioneel per stap: "hold" (seconden na de klik, overschrijft de berekening).
Optioneel in de config: "size" [1400, 860] (standaard; wordt gecontroleerd tegen de screenshots),
"fps" (30), "gif_fps" (25), "tmp" (werkmap).
"""
import json, math, os, shutil, subprocess, sys, tempfile
from PIL import Image, ImageDraw, ImageFont

FONT = '/System/Library/Fonts/Helvetica.ttc'
DEFAULT_SIZE = (1400, 860)

# leestijd: seconden per teken + vaste basis, met een ondergrens
SEC_PER_CHAR, BASE_SEC, MIN_HOLD = 0.055, 0.6, 1.3
SAME_STEP_HOLD = 1.0      # tweede klik binnen dezelfde stap (zelfde bijschrift)
LAST_HOLD = 2.6           # laatste stap blijft even staan voor de lus


def sprite(scale=1.0):
    """Pijl-cursor, tip op (2,2) * 1.25 in de sprite."""
    S = 8
    pts = [(0, 0), (0, 17), (4.2, 13.2), (7, 19.5), (9.6, 18.4), (6.9, 12.3), (12.5, 12.3)]
    w, h = 16, 22
    big = Image.new('RGBA', (w * S, h * S), (0, 0, 0, 0))
    d = ImageDraw.Draw(big)
    p = [(x * S + 2 * S, y * S + 2 * S) for x, y in pts]
    d.polygon(p, fill=(255, 255, 255, 255), outline=(255, 255, 255, 255), width=int(2.2 * S))
    cx = sum(x for x, _ in pts) / len(pts)
    cy = sum(y for _, y in pts) / len(pts)
    inner = [(cx * S + 2 * S + (x - cx) * S * 0.80, cy * S + 2 * S + (y - cy) * S * 0.80) for x, y in pts]
    d.polygon(inner, fill=(20, 20, 20, 255))
    return big.resize((int(w * scale * 1.25), int(h * scale * 1.25)), Image.LANCZOS)


SP, SPP = sprite(1.0), sprite(0.85)
HOT = (2 * 1.25, 2 * 1.25)


def ease(t):
    return 4 * t ** 3 if t < 0.5 else 1 - pow(-2 * t + 2, 3) / 2


def pos(a, b, t):
    """Licht gebogen baan met ease-in-out."""
    e = ease(t)
    dx, dy = b[0] - a[0], b[1] - a[1]
    dist = math.hypot(dx, dy)
    nx, ny = (-dy / dist, dx / dist) if dist else (0, 0)
    bow = 0.07 * dist * math.sin(math.pi * e)
    return (a[0] + dx * e + nx * bow, a[1] + dy * e + ny * bow)


def main(cfg_path):
    cfg = json.load(open(cfg_path))
    size = tuple(cfg.get('size', DEFAULT_SIZE))
    fps, gif_fps = cfg.get('fps', 30), cfg.get('gif_fps', 25)
    imgs = [Image.open(p).convert('RGB') for p in cfg['states']]
    for p, im in zip(cfg['states'], imgs):
        if im.size != size:
            sys.exit(f'FOUT: {p} is {im.size[0]}x{im.size[1]}, verwacht {size[0]}x{size[1]}. '
                     f'Zet de viewport opnieuw (zie SKILL.md) en neem de screenshots opnieuw.')
    fT = ImageFont.truetype(FONT, 36, index=0)
    fN = ImageFont.truetype(FONT, 32, index=1)

    # stapnummers: een nieuwe (andere) bijschrifttekst = volgende stap
    numbers, n, prev = [], 0, None
    for st in cfg['steps']:
        cap = st.get('caption', '')
        if cap and cap != prev:
            n += 1
        numbers.append(n if cap else 0)
        prev = cap or prev

    def caption(im, text, num, alpha):
        d0 = ImageDraw.Draw(im)
        tw = d0.textlength(text, font=fT)
        padx, h = 34, 80
        badge = h - 20
        w = int(badge + 14 + tw + padx * 2 - 8)
        x0, y0 = (im.width - w) // 2, im.height - h - 30
        ov = Image.new('RGBA', im.size, (0, 0, 0, 0))
        d = ImageDraw.Draw(ov)
        d.rounded_rectangle((x0, y0, x0 + w, y0 + h), radius=h // 2, fill=(24, 28, 32, int(235 * alpha)))
        bx, by = x0 + 10, y0 + 10
        d.ellipse((bx, by, bx + badge, by + badge), fill=(0x4c, 0xaf, 0x7d, int(255 * alpha)))
        nt = str(num)
        nw = d.textlength(nt, font=fN)
        d.text((bx + (badge - nw) / 2, by + badge / 2 - 1), nt, font=fN, fill=(255, 255, 255, int(255 * alpha)), anchor='lm')
        d.text((bx + badge + 14, y0 + h / 2 - 1), text, font=fT, fill=(255, 255, 255, int(255 * alpha)), anchor='lm')
        im.alpha_composite(ov)

    frames = []  # (state, xy, pressed, step_index or None)

    def hold(state, xy, sec, pressed=False, si=None):
        frames.extend([(state, xy, pressed, si)] * int(round(sec * fps)))

    cur, state, prev_cap = tuple(cfg['start']), 0, None
    hold(0, cur, 0.7)
    for i, st in enumerate(cfg['steps']):
        xy = tuple(st['to'])
        cap = st.get('caption', '')
        dist = math.hypot(xy[0] - cur[0], xy[1] - cur[1])
        dur = max(0.35, min(0.85, 0.25 + dist / 1400))
        for k in range(1, int(round(dur * fps)) + 1):
            frames.append((state, pos(cur, xy, k / int(round(dur * fps))), False, i))
        hold(state, xy, 0.10, True, i)               # indrukken
        state = st['state']
        hold(state, xy, 0.10, True, i)               # loslaten: nieuwe toestand zichtbaar
        if 'hold' in st:
            h = st['hold']
        elif st.get('last'):
            h = LAST_HOLD
        elif cap and cap != prev_cap:
            h = max(MIN_HOLD, SEC_PER_CHAR * len(cap) + BASE_SEC - dur)
        else:
            h = SAME_STEP_HOLD
        hold(state, xy, h, False, i)
        prev_cap = cap or prev_cap
        cur = xy

    first = {}
    for idx, (_, _, _, si) in enumerate(frames):
        if si is not None:
            first.setdefault(numbers[si] if numbers[si] else ('x', si), idx)

    tmp = cfg.get('tmp') or tempfile.mkdtemp(prefix='docs-gif-')
    os.makedirs(tmp, exist_ok=True)
    for idx, (s, xy, pr, si) in enumerate(frames):
        im = imgs[s].copy().convert('RGBA')
        if si is not None and st_caption(cfg, si):
            alpha = min(1.0, (idx - first[numbers[si]] + 1) / 6)   # korte fade-in
            caption(im, cfg['steps'][si]['caption'], numbers[si], alpha)
        sp = SPP if pr else SP
        im.alpha_composite(sp, (int(round(xy[0] - HOT[0])), int(round(xy[1] - HOT[1]))))
        im.convert('RGB').save(f'{tmp}/f{idx:05d}.png')

    out = cfg['out']
    os.makedirs(os.path.dirname(out) or '.', exist_ok=True)
    # Palet: 256 kleuren over ALLE frames (stats_mode=full). Met minder kleuren of stats_mode=diff
    # wordt de donkergroene topbalk onder de dialoog-sluier grijs.
    vf = (f'fps={gif_fps},split[a][b];[a]palettegen=max_colors=256:stats_mode=full[p];'
          f'[b][p]paletteuse=dither=sierra2_4a:diff_mode=rectangle')
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-framerate', str(fps), '-i', f'{tmp}/f%05d.png',
                    '-vf', vf, out], check=True)
    if not cfg.get('tmp'):
        shutil.rmtree(tmp, ignore_errors=True)
    print(f'{out}: {os.path.getsize(out) / 1024:.0f} KB, {len(frames)} frames, {len(frames) / fps:.1f} s, {size[0]}x{size[1]}')


def st_caption(cfg, si):
    return cfg['steps'][si].get('caption', '')


if __name__ == '__main__':
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
