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
| **Opleidingen** (`opleidingen/`) | tutorials | Twee lineaire leerpaden: `loketmedewerker/` (5 lessen) en `dienstbeheerder/` (Basis 6 + Gevorderd 3 + checklist). Elke les leert één taak en linkt door naar de handleiding. |
| **Handleiding** (`handleiding/`) | how-to + reference | De volledige naslag per module en scherm — de bestaande docsify-content, hierheen verplaatst. |
| **Concepten** (`concepten/`) | explanation | Hoe beschikbaarheid berekend wordt, multi-tenant, rollen in detail, woordenlijst. |
| **Support** (`support/`) | — | Contact, bekende problemen, iets melden, release notes. Staat bewust als laatste, zoals bij commitlint. |

> De technische/architectuurdocumentatie (`technische-documentatie.md` uit docsify) is
> voorlopig weggelaten. De brontekst staat nog in de git-historie als die terug moet.

### Het "opleiding = ruggengraat"-principe

Docleas is te uitgebreid om volledig in een opleiding te stoppen. Elke les is daarom kort,
doelgericht ("Na deze les kan je…") en eindigt met **Meer weten**-links naar de handleiding.
De handleiding blijft de volledige naslag; de opleiding dupliceert die inhoud niet.

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
