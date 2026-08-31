# Docleas Documentatie — VitePress (proof of concept)

Een VitePress-variant van de Docleas-documentatie, met een homepage in de stijl van
https://commitlint.js.org/ en de content geherstructureerd volgens het
[Diátaxis](https://diataxis.fr/)-model.

## Draaien

VitePress vereist Node 18+ (getest met Node 20). Een oudere `nvm`-default (6.x) werkt niet.

```bash
cd docs/ViteDocs
nvm use 20            # of een andere Node >= 18
npm install
npm run docs:dev      # http://localhost:5173
npm run docs:build    # statische output in .vitepress/dist
npm run docs:preview  # gebouwde site lokaal serveren
```

## Contentstructuur

| Sectie | Diátaxis | Inhoud |
|--------|----------|--------|
| **Introductie** (`introductie/`) | oriëntatie | Wat is Docleas, rollen & rechten, kernbegrippen. |
| **Opleidingen** (`opleidingen/`) | tutorials | Twee opleidingen met genummerde hoofdstukken: `gebruiker/` (Opleiding gebruikers — Agenda + Onthaal, 7 hoofdstukken) en `dienstbeheerder/` (Opleiding dienstbeheerder — Basis 6 + Gevorderd 3). Elk hoofdstuk behandelt één onderwerp en linkt door naar de handleiding. |
| **Handleiding** (`handleiding/`) | how-to + reference | De volledige naslag per module en scherm — de bestaande docsify-content, hierheen verplaatst. |
| **Concepten** (`concepten/`) | explanation | Hoe beschikbaarheid berekend wordt, multi-tenant, rollen in detail, woordenlijst. |
| **Support** (`support/`) | — | Contact, bekende problemen, iets melden, release notes. Staat bewust als laatste, zoals bij commitlint. |

> De technische/architectuurdocumentatie (`technische-documentatie.md` uit docsify) is
> voorlopig weggelaten. De brontekst staat nog in de git-historie als die terug moet.

### Het "opleiding = ruggengraat"-principe

Docleas is te uitgebreid om volledig in een opleiding te stoppen. Elk hoofdstuk is daarom
kort en behandelt één onderwerp, met **Zie ook**-links naar de handleiding voor het detail.
De handleiding blijft de volledige naslag; de opleiding dupliceert die inhoud niet.

## How-to video's

Er is een `<Video>`-component (`.vitepress/theme/components/Video.vue`), bruikbaar in elke
`.md`:

```md
<Video
  src="https://<space>.<regio>.cdn.digitaloceanspaces.com/afspraak-inplannen.mp4"
  poster="/videos/afspraak-inplannen.jpg"
  title="Een afspraak inplannen voor een burger"
  captions="/videos/afspraak-inplannen.nl.vtt"
/>
```

- **MP4** → DigitalOcean Spaces + CDN (niet in git). Encodeer met `-movflags +faststart`.
- **VTT** (WebVTT) → gewoon in `public/videos/` in de repo. Klein bestand, zelfde origin,
  dus geen CORS nodig. De browser gebruikt `.vtt` voor de `<track>`; **`.srt` werkt niet**
  in de browser — laat die weg of bied hem als download aan.
- **Poster** (JPG) → `public/videos/`, of ook op Spaces.
- Staat het `.vtt` toch op een ander domein, geef dan `crossorigin="anonymous"` mee en
  configureer CORS op de Space.

De component doet: responsive weergave, `controls`, geen autoplay, `preload="metadata"`,
captions-track, en een download-fallback. De `title` wordt als echte tekst getoond
(dus indexeerbaar en zichtbaar in `llms-full.txt`).

## Wat er veranderd is t.o.v. docsify

| Onderdeel | docsify | VitePress |
|-----------|---------|-----------|
| Navigatie | `docs/_sidebar.md` (handmatig, ook in HTML gekopieerd) | één `.vitepress/config.ts`, per sectie een eigen sidebar, TypeScript-gecontroleerd |
| Homepage | `_coverpage.md` | `index.md` met `layout: home` (hero + feature-cards) |
| Prev/next-navigatie | handmatige `## Navigatie`-blokken per pagina | automatisch uit de sidebar (de handmatige blokken zijn verwijderd) |
| Zoeken / paginering / copy-code / zoom | 4 losse plugins | ingebouwd in het standaardthema |
| Dode links | niet gecontroleerd | build faalt op dode interne links |
| Build | geen (statische bestanden) | `vitepress build` → `.vitepress/dist` |

### Inhoudelijke fixes tijdens de migratie

- Alle bestaande handleiding-content verplaatst van `dienstbeheerders/`, `burgerflow/`,
  `mijn-burger-profiel/` naar `handleiding/…`; interne links aangepast.
- Handmatige `## Navigatie`-blokken en docsify-beeldrichtlijnen
  (`':size=400 :class=center-image'`) verwijderd.
- Links die in docsify al stuk waren gecorrigeerd (`global-header.md` →
  `./global-header/`; foute paden in `global-header/index.md`).
- Screenshots verplaatst naar `public/screenshots/`; links `../../screenshots/` →
  `/screenshots/`.
- Links buiten deze map (`../Releases/`, `../Tickets/`, `../project-info.md`) worden
  genegeerd via `ignoreDeadLinks`.

## Indexering (waarom we overstappen)

docsify is een client-side SPA: crawlers en AI-agents die geen JavaScript draaien zagen
lege pagina's. VitePress rendert elke route als volledige HTML. Bovendien:

- `sitemap.xml` — gegenereerd uit `sitemap.hostname` in de config
- `robots.txt` — in `public/`, verwijst naar de sitemap
- canonical-link + Open Graph-tags per pagina — via `transformPageData` in de config
- `llms.txt` + `llms-full.txt` — machineleesbare versie voor zoekmachines en de
  Gemini-agent (`vitepress-plugin-llms`). Wijs de agent naar `/llms-full.txt`.

## Deployment

Zie **[DEPLOYMENT.md](DEPLOY.md)**. Kort: DigitalOcean App Platform, build
`npm ci && npm run docs:build`, output `.vitepress/dist`, `cleanUrls: false` zodat er geen
rewrite-regels nodig zijn. `HOSTNAME` staat bovenaan `.vitepress/config.ts`.

## Nog te doen

- Inhoud aanvullen: veel handleiding-pagina's zijn nog `DRAFT` of leeg (overgenomen uit docsify).
- De Google `chat-messenger` chatbot opnieuw inbouwen (bijv. als component in `.vitepress/theme/`).
- `ViteDocs/` naar de repo-root van `doclr-be/docleas-documentatie` verplaatsen en de
  docsify-bestanden verwijderen.
- DigitalOcean-component ombouwen van "serveer `docs/`" naar de build (zie DEPLOYMENT.md).
