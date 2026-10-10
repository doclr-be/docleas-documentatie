---
name: docs-gif
description: >
  Maak een stap-voor-stap-gif van een scherm in de docleas-app voor de handleiding: bewegende muis,
  genummerde bijschriften onderaan ("1 Klik op +", "2 Vul het e-mailadres in"), 1400x860. Gebruik
  wanneer de gebruiker vraagt om een gif, animatie of stappenfilmpje van een flow (bv. gebruiker of
  rol toevoegen) voor `handleiding/`. Enkel gif, geen mp4.
user-invocable: true
---

# Stappen-gif voor de handleiding

Resultaat: één `.gif` van **1400 × 860** met een vloeiend bewegende muiscursor en genummerde bijschriften,
opgebouwd uit **schone screenshots** (zonder cursor van de Claude-extensie). We gebruiken bewust **niet** de
`gif_creator` van de extensie: die legt maar één frame per actie vast, dus de muis springt, loopt achter en de
bijschriften kunnen er niet in.

Vereist: Claude in Chrome (laad eerst de `chrome-browser`-skill), `ffmpeg`, `python3` met Pillow.

## 0. Wat de gebruiker eerst doet (manueel)

- **Ingelogd zijn** op `http://localhost:18081/<gemeente>/...` met de juiste rol. Gebruikersbeheer: Applicatiebeheerder
  (een superuser ziet extra schakelaars in de dialoog die de handleiding niet beschrijft).
- **Andere Chrome-extensies uitzetten** voor `localhost:18081`, vooral een wachtwoordmanager/autofill (het rode icoontje
  in het e-mailveld). Die zorgt voor `Cannot access a chrome-extension:// URL of different extension` zodra een
  dialoog met een e-mailveld opent. Dit kan Claude **niet** zelf oplossen. Krijg je de fout: probeer max. 2–3 keer,
  stop dan en vraag de gebruiker de extensie uit te zetten en de tab te herladen.

## 1. Viewport precies 1400 × 860

De screenshots moeten exact **1400 × 860** zijn (standaard; de gebruiker kan een andere maat vragen, zet dan `size` in de config).
Schalen of bijsnijden doen we niet: afgesneden randen en blurry tekst.

- `resize_window` zet het **venster**, niet de viewport. De melding van de extensie bovenaan neemt 50–100 px in beslag en
  verschijnt/verdwijnt, waardoor de hoogte schommelt (we zagen 859, 814, 860).
- Werkwijze: `resize_window` op 1400 × ~1040, maak een screenshot **terwijl de melding zichtbaar is**, lees de afmetingen in
  het resultaat en corrigeer de hoogte tot het precies 860 is. Controleer opnieuw **na het openen van een dialoog** en
  na elke navigatie. Een afwijkende hoogte = alle posities en het hele script opnieuw.

## 2. Cursor en gloeiende rand van de extensie verbergen

De extensie tekent een eigen cursor (`#claude-phantom-cursor`) in de pagina; die volgt hovers niet per frame. Verberg hem,
zodat de screenshots schoon zijn (wij tekenen zelf de cursor):

```js
if(!document.getElementById('hide-phantom')){const s=document.createElement('style');s.id='hide-phantom';
s.textContent='#claude-phantom-cursor,#claude-agent-glow-border,#claude-agent-glow-border-inner{display:none!important;visibility:hidden!important;opacity:0!important}';
document.head.appendChild(s);} 'ok'
```

Via `javascript_tool`. **Opnieuw uitvoeren na elke herlaad/navigatie.** Controleer met een screenshot dat er geen cursor in staat.

## 3. Screenshots opnemen (één per toestand)

1. Meet eerst de klikposities: open de dialoog/het menu, maak een screenshot, lees de coördinaten af. Posities verschuiven
   tijdens de flow (bv. de voettekst van de dialoog schuift omhoog als een module-rij opengaat), dus meet ook de
   tussenliggende toestanden (open dropdown, na keuze).
2. Beginscherm: beweeg de muis weg (`hover` op een neutrale plek, bv. 900,150) zodat er geen hover-markering op staat.
3. Per stap: `left_click` (en eventueel `type`) → `wait` 1 s → `screenshot` met **`save_to_disk: true`** op volle schaal.
   Noteer het pad uit het resultaat. Eén screenshot per *toestand na de klik*, ook voor een open dropdown én de keuze
   daaruit.
4. Testgegevens zijn duidelijk nep: `voorbeeld@docleas.eu`, `Voorbeeld`, `Gebruiker`.
5. **Nooit definitief bevestigen**: geen Toevoegen/Opslaan/Bevestigen/Verwijderen. Sluit af met **Annuleren** of Escape.
   Wil je in de gif toch "Klik op Toevoegen" tonen: laat de cursor naar de knop gaan met `"last": true` en klik niet echt.
6. Beperk het aantal stappen; vermijd typen van lange teksten (tekst verschijnt in één keer).

## 4. Config schrijven en script draaien

Voorbeeld en uitleg staan bovenaan `scripts/make_gif.py`. Kort:

```json
{
  "out": "/abs/pad/public/screenshots/dienstbeheerders/42_gebruikers_gebruiker_toevoegen.gif",
  "start": [900, 150],
  "states": ["s0.jpg", "s1.jpg", "..."],
  "steps": [
    {"to": [1164, 218], "state": 1, "caption": "Klik op + om een nieuwe gebruiker toe te voegen"},
    {"to": [583, 310],  "state": 5, "caption": "Kies een rol"},
    {"to": [500, 412],  "state": 6, "caption": "Kies een rol"},
    {"to": [840, 589],  "state": 9, "caption": "Klik op Toevoegen om de gebruiker aan te maken", "last": true}
  ]
}
```

```bash
python3 .claude/skills/docs-gif/scripts/make_gif.py config.json
```

`states[0]` is het beginscherm; `state` bij een stap is de toestand **na** die klik. Het script weigert screenshots met een
andere maat dan `size`.

### Bijschriften

- Nederlands, gebiedende wijs, kort (liefst ≤ 55 tekens): *"Vul het e-mailadres in"*, *"Kies een afdeling"*.
- Nummering is automatisch: een **andere** tekst = volgende stap; opeenvolgende stappen met **dezelfde** tekst delen één
  nummer (bv. "Kies een rol" voor het openen van de lijst én de keuze).
- Het bijschrift verschijnt (korte fade-in) zodra de cursor naar het element begint te bewegen, zodat de kijker het leest vóór de
  actie. Lettergrootte 36 px, donkere pil met groene cirkel, onderaan gecentreerd.

### Timing (op basis van het aantal tekens)

| Onderdeel | Duur |
|---|---|
| Zichtbaar na klik, nieuwe stap | `0,055 s × tekens + 0,6 s − beweging`, minimaal 1,3 s |
| Tweede klik binnen dezelfde stap | 1,0 s |
| Laatste stap (`last`) | 2,6 s |
| Beweging cursor | 0,35–0,85 s, afhankelijk van de afstand, lichte boog, ease-in-out |
| Begin op het beginscherm | 0,7 s |

Voorbeeld: 47 tekens → ~3,2 s, 22 tekens → ~1,8 s. De gebruiker vond ~18 s voor 8 stappen te snel en ~24 s goed.
Overschrijf per stap met `"hold": <seconden>` als iets te snel/traag voelt.

## 5. Kwaliteit controleren

- **Palet:** het script gebruikt 256 kleuren over alle frames (`stats_mode=full`, `sierra2_4a`). Met 128 kleuren of
  `stats_mode=diff` werd de donkergroene topbalk grijs. Niet "optimaliseren" naar minder kleuren.
- De topbalk wordt donkerder zodra een dialoog open staat: dat is de normale modale sluier van de app, geen fout.
- Maak een contactsheet of bekijk een paar frames (begin, midden, einde) en meet de topbalkkleur bij een dialoog
  (verwacht ≈ 78,136,98 onder de sluier, 112,201,147 zonder).
- Verwachte grootte: ~1 MB voor ~24 s. Veel groter? Minder stappen of kortere holds.

## 6. Afronden

- Bestand in `public/screenshots/<rolmap>/` met cijferprefix (`22_…rol_toevoegen.gif`, `42_…gebruiker_toevoegen.gif`), naast het
  bijhorende stilstaande screenshot.
- In de pagina: `![Stap voor stap een gebruiker toevoegen](/screenshots/dienstbeheerders/42_….gif)`.
- Bij een vervangen bestand met dezelfde naam toont de browser vaak de cache: harde herlaadbeurt (Cmd+Shift+R).
- Werk "Laatst bijgewerkt" in de pagina bij; commit alleen als de gebruiker daarom vraagt.
- Sluit de tab(s) die je zelf opende; laat het venster niet op een verrassende maat staan.

## Valkuilen (uit de praktijk)

| Probleem | Oorzaak / oplossing |
|---|---|
| Cursor springt of loopt achter | `gif_creator` gebruikt; werk met schone screenshots en dit script |
| Topbalk grijs in de gif | Te klein of op diff berekend palet; gebruik het script |
| Screenshot niet 1400 × 860 | Melding van de extensie neemt viewport in; hoogte aanpassen en opnieuw meten |
| `Cannot access a chrome-extension://…` | Andere extensie (wachtwoordmanager) grijpt de focus; gebruiker moet die uitzetten |
| Cursor van de extensie staat toch in de frames | Verberg-script na herladen vergeten |
| Hover-markering op de beginknop | Muis niet weggehaald vóór de eerste screenshot |
| Randen afgesneden | Geschaald/bijgesneden i.p.v. de viewport op maat te zetten |
| Gif voelt te snel | Tekens-formule gebruiken; `hold` per stap verhogen |
