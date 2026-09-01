# Deployment

De site is een statische VitePress-build. Hosting draait op **DigitalOcean App Platform**,
op dezelfde URL als de oude docsify-site
(`https://docleas-documentation-zzn92.ondigitalocean.app`).

## 1. Code in de repo zetten

Deze map (`ViteDocs/`) hoort in de repo **`doclr-be/docleas-documentatie`** te staan
(dezelfde repo als de docsify-site). De docsify-opstelling (`docs/`, `index.html`,
`404.html`, `_sidebar.md`, `_coverpage.md`, `sitemap.xml`) wordt vervangen.

Aanbevolen indeling: zet de inhoud van `ViteDocs/` in de **repo-root** (dus `package.json`,
`.vitepress/`, `introductie/`, … op het hoogste niveau). Dan is de "Source Directory" in
DigitalOcean gewoon `/`.

Meegeleverd en klaar:

- `.node-version` (`22`) en `package.json` → `engines.node 22.x` — Node-versie voor de build
  (exact pinnen i.p.v. `>=20`: anders waarschuwt de buildpack over de brede range en kan
  de Node-versie tussen builds verschuiven)
- `.gitignore` — sluit `node_modules/`, `.vitepress/cache/`, `.vitepress/dist/` uit
- `public/robots.txt`, `public/google3ea88998a5d1a313.html` (Search Console-verificatie)
- `package-lock.json` — nodig voor `npm ci`

## 2. DigitalOcean App Platform instellen

In het bestaande App → de static-site component → **Settings**:

| Instelling | Waarde |
|------------|--------|
| Source Directory | `/` (of de submap met `package.json`) |
| Build Command | `npm run docs:build` (de node-js-buildpack installeert de deps al) |
| Output Directory | `.vitepress/dist` |
| Error Document | `404.html` |
| Branch | de branch die je wil publiceren (auto-deploy bij elke push) |

> Zet **geen** "Catchall Document" — dat serveert `404.html` met status 200 (SPA-gedrag)
> en is slecht voor indexering. Alle interne links zijn expliciete `.html`-bestanden, dus
> een catchall is niet nodig.

De Node-versie wordt automatisch uit `.node-version` / `package.json` gehaald.

> **Clean URLs:** de site gebruikt bewust `cleanUrls: false` — elke pagina is een
> expliciet `.html`-bestand en alle interne links, canonicals en de sitemap gebruiken
> `.html`. Er zijn dus geen rewrite-regels nodig. (Dezelfde aanpak als commitlint.js.org.)

### Optioneel: app-spec (infrastructure as code)

Zie [`.do/app.yaml`](.do/app.yaml) voor een spec die je met
`doctl apps update <app-id> --spec .do/app.yaml` kunt toepassen. Pas `repo` en `branch` aan.

## 3. Na de eerste deploy — controleren

```bash
BASE=https://docleas-documentation-zzn92.ondigitalocean.app

curl -sI  $BASE/handleiding/gebruikers.html   | head -1   # 200
curl -sI  $BASE/handleiding/                  | head -1   # 200 (sectie-index)
curl -s   $BASE/robots.txt
curl -s   $BASE/sitemap.xml       | head -c 300
curl -s   $BASE/llms.txt          | head -c 300
curl -s   $BASE/handleiding/gebruikers.html | grep -o '<link rel="canonical"[^>]*>'
```

Een echte pagina moet **volledige tekst in de HTML** bevatten (geen lege `<div id="app">`).
Dat was het probleem met docsify en is nu opgelost: elke route is voorgerenderde HTML.

## 4. Indexering activeren

1. **Google Search Console** — property bestaat al (verificatiebestand is meegenomen).
   Dien `sitemap.xml` opnieuw in; vraag herindexering aan voor een paar sleutelpagina's.
2. **Gemini-agent / grounding** — laat die niet de site scrapen, maar wijs hem naar:
   - `https://…/llms-full.txt` — de volledige documentatie als één schone markdown-file
   - `https://…/llms.txt` — een index met links naar de losse `.md`-versies van elke pagina

   Deze bestanden worden bij elke build automatisch gegenereerd
   (`vitepress-plugin-llms`).

## 5. Bij een eigen domein later (bv. docs.docleas.be)

- Wijzig `HOSTNAME` bovenaan `.vitepress/config.ts`
- Wijzig de `Sitemap:`-regel in `public/robots.txt`
- Voeg het domein toe in DigitalOcean en zet de DNS-records
