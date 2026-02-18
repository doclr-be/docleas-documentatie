# Docleas Documentatie

Welkom bij de documentatie van Docleas, het online afsprakensysteem voor lokale besturen in België.

## Documentatie bekijken

### Optie 1: Docsify (Eenvoudig, aanbevolen voor snel starten)

```bash
# Installeer dependencies
npm install

# Start development server
npm run docs:dev

# Open http://localhost:3000
```

### Optie 2: MkDocs Material (Professioneel, aanbevolen voor productie)

```bash
# Installeer Python dependencies
pip install -r requirements.txt

# Start development server
npm run docs:mkdocs

# Open http://localhost:8000
```

### Alternatief: Zonder installatie (Python)

```bash
cd docs
python3 -m http.server 8000
# Open http://localhost:8000
```

## Projectstructuur

```
Tickets/          - Alle tickets (TICK-XXX.md)
IntegrationTests/ - Integratie tests per ticket
Documentation/    - Documentatie (Markdown bestanden)
  ├── index.md                    - Hoofdpagina
  ├── burgerflow/                 - De Burgerflow (werking en configuratie)
  │   └── index.md
  ├── technische-documentatie.md  - Voor developers
  └── dienstbeheerders/           - Voor dienstbeheerders
      ├── index.md
      ├── gemeente-instellingen.md
      ├── agendas.md
      ├── werkschema.md
      ├── gebruikers.md
      ├── statistieken.md
      ├── faq.md
      └── producten/
          ├── algemene-werking.md
          ├── producten-beheren.md
          ├── algemene-instellingen.md
          ├── teksten.md
          ├── velden.md
          ├── beschikbaarheden.md
          ├── groepen.md
          ├── structuur.md
          └── overzichtspagina.md
Releases/         - Release notes per versie
docs/             - Docsify website configuratie
```

## Hosting opties

Voor **gedetailleerde deployment instructies**, zie **[DEPLOYMENT.md](DEPLOYMENT.md)**.

### Snelle deployment:

| Optie | Commando | Live in | Kosten |
|-------|----------|---------|--------|
| **GitHub Pages** (Docsify) | Push `docs` folder | ~2 min | Gratis |
| **GitHub Pages** (MkDocs) | `mkdocs gh-deploy` | ~2 min | Gratis |
| **Netlify** | Connect repo via UI | ~3 min | Gratis |
| **Vercel** | Connect repo via UI | ~3 min | Gratis |

**💡 Aanbeveling voor productie**:
- **MkDocs Material + GitHub Pages**
  - Professioneel design met tabs, search, dark mode
  - Gratis hosting + automatische SSL
  - One-command deployment: `mkdocs gh-deploy`

## Ontwikkeling

### Skills beschikbaar

- `/ticket` - Maak een nieuw ticket aan
- `/integratie-test` - Schrijf integratie tests
- `/documentatie` - Schrijf documentatie (indien beschikbaar)
- `/release-notes` - Schrijf release notes

### Taal

Alle documentatie is in het Nederlands geschreven.

## Licentie

Interne documentatie voor Docleas.
