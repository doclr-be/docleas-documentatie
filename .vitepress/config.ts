import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'

// Waar de site draait — gebruikt voor sitemap.xml, canonical-links en robots.txt.
// Pas dit aan als er een eigen domein komt (bv. https://docs.docleas.be).
const HOSTNAME = 'https://docleas-documentation-zzn92.ondigitalocean.app'

export default defineConfig({
  lang: 'nl-BE',
  title: 'Docleas Documentatie',
  description:
    'Documentatie voor Docleas, het online afsprakensysteem en klantgeleiding voor lokale besturen in Vlaanderen.',
  // cleanUrls bewust UIT: elke pagina is een expliciet .html-bestand, zodat de
  // site op elke statische host werkt zonder extra rewrite-regels (zoals commitlint.js.org).
  cleanUrls: false,
  lastUpdated: true,
  srcExclude: ['README.md', 'DEPLOY.md'],
  ignoreDeadLinks: [
    // links naar bestanden buiten deze docs-map (Releases, Tickets, project-info)
    /\.\.\//,
  ],

  sitemap: {
    hostname: HOSTNAME,
  },

  // llms.txt + llms-full.txt genereren — machineleesbare versie van de site,
  // bedoeld voor zoekmachines en AI-agents (grounding).
  vite: {
    plugins: [llmstxt()],
  },

  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Docleas Documentatie' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
  ],

  transformPageData(pageData) {
    const path = pageData.relativePath
      .replace(/(^|\/)index\.md$/, '$1') // .../index.md -> .../
      .replace(/\.md$/, '.html')
    const canonical = `${HOSTNAME}/${path}`

    const description =
      (pageData.frontmatter.description as string | undefined) ??
      pageData.frontmatter.tagline ??
      undefined

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonical }],
      ['meta', { property: 'og:url', content: canonical }],
      ['meta', { property: 'og:title', content: pageData.title ?? 'Docleas Documentatie' }],
    )
    if (description) {
      pageData.frontmatter.head.push(['meta', { property: 'og:description', content: description }])
    }
  },

  themeConfig: {
    logo: '/logo.png',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Zoeken', buttonAriaLabel: 'Zoeken' },
          modal: {
            noResultsText: 'Geen resultaten gevonden',
            resetButtonTitle: 'Zoekopdracht wissen',
            footer: {
              selectText: 'selecteren',
              navigateText: 'navigeren',
              closeText: 'sluiten',
            },
          },
        },
      },
    },

    nav: [
      { text: 'Introductie', link: '/introductie/' },
      { text: 'Opleidingen', link: '/opleidingen/' },
      { text: 'Handleiding', link: '/handleiding/' },
      { text: 'Concepten', link: '/concepten/' },
      { text: 'Support', link: '/support/' },
    ],

    sidebar: {
      '/introductie/': [
        {
          text: 'Introductie',
          items: [
            { text: 'Wat is Docleas?', link: '/introductie/' },
            { text: 'Rollen & rechten', link: '/introductie/rollen-en-rechten' },
            { text: 'Kernbegrippen', link: '/introductie/kernbegrippen' },
          ],
        },
      ],

      '/opleidingen/': [
        { text: 'Opleidingen', link: '/opleidingen/' },
        {
          text: 'Opleiding loketmedewerker',
          collapsed: false,
          items: [
            { text: 'Overzicht', link: '/opleidingen/loketmedewerker/' },
            { text: '1. Je agenda leren kennen', link: '/opleidingen/loketmedewerker/01-agenda-leren-kennen' },
            { text: '2. Een afspraak inplannen', link: '/opleidingen/loketmedewerker/02-afspraak-inplannen' },
            { text: '3. Een burger aanmelden', link: '/opleidingen/loketmedewerker/03-burger-aanmelden' },
            { text: '4. Afspraken wijzigen, annuleren, no-show', link: '/opleidingen/loketmedewerker/04-afspraken-beheren' },
            { text: '5. Klaar — checklist', link: '/opleidingen/loketmedewerker/05-klaar' },
          ],
        },
        {
          text: 'Opleiding dienstbeheerder',
          collapsed: false,
          items: [
            { text: 'Overzicht', link: '/opleidingen/dienstbeheerder/' },
            {
              text: 'Basis',
              collapsed: false,
              items: [
                { text: '1. Gemeente-instellingen', link: '/opleidingen/dienstbeheerder/basis/01-gemeente-instellingen' },
                { text: '2. Je eerste product', link: '/opleidingen/dienstbeheerder/basis/02-eerste-product' },
                { text: '3. Beschikbaarheden', link: '/opleidingen/dienstbeheerder/basis/03-beschikbaarheden' },
                { text: '4. Een werkschema koppelen', link: '/opleidingen/dienstbeheerder/basis/04-werkschema' },
                { text: '5. Publiceren naar de burgerflow', link: '/opleidingen/dienstbeheerder/basis/05-publiceren' },
                { text: '6. Gebruikers toevoegen', link: '/opleidingen/dienstbeheerder/basis/06-gebruikers' },
              ],
            },
            {
              text: 'Gevorderd',
              collapsed: false,
              items: [
                { text: '7. Groepen & dienstoverschrijdend', link: '/opleidingen/dienstbeheerder/gevorderd/07-groepen-dienstoverschrijdend' },
                { text: '8. Structuur & overzichtspagina', link: '/opleidingen/dienstbeheerder/gevorderd/08-structuur-overzicht' },
                { text: '9. Statistieken lezen', link: '/opleidingen/dienstbeheerder/gevorderd/09-statistieken' },
              ],
            },
            { text: 'Klaar — checklist', link: '/opleidingen/dienstbeheerder/klaar' },
          ],
        },
      ],

      '/handleiding/': [
        { text: 'Overzicht', link: '/handleiding/' },
        {
          text: 'Configuratie',
          collapsed: false,
          items: [
            { text: 'Gemeente-instellingen', link: '/handleiding/gemeente-instellingen' },
            {
              text: 'Producten',
              collapsed: false,
              items: [
                { text: 'Algemene werking', link: '/handleiding/producten/algemene-werking' },
                { text: 'Producten beheren', link: '/handleiding/producten/producten-beheren' },
                { text: 'Algemene instellingen', link: '/handleiding/producten/algemene-instellingen' },
                { text: 'Teksten', link: '/handleiding/producten/teksten' },
                { text: 'Velden', link: '/handleiding/producten/velden' },
                { text: 'Beschikbaarheden', link: '/handleiding/producten/beschikbaarheden' },
                { text: 'Groepen', link: '/handleiding/producten/groepen' },
                { text: 'Structuur', link: '/handleiding/producten/structuur' },
                { text: 'Overzichtspagina', link: '/handleiding/producten/overzichtspagina' },
              ],
            },
            { text: "Agenda's", link: '/handleiding/agendas' },
            { text: "Werkschema's", link: '/handleiding/werkschemas/' },
            { text: 'Gebruikers', link: '/handleiding/gebruikers' },
            { text: 'Statistieken', link: '/handleiding/statistieken' },
          ],
        },
        {
          text: 'Burger',
          collapsed: false,
          items: [
            { text: 'De Burgerflow', link: '/handleiding/burgerflow/' },
            {
              text: 'Mijn Burger Profiel',
              collapsed: false,
              items: [
                { text: 'Overzicht', link: '/handleiding/mijn-burger-profiel/' },
                { text: 'Global Header', link: '/handleiding/mijn-burger-profiel/global-header/' },
                { text: 'Global Header Validatie', link: '/handleiding/mijn-burger-profiel/global-header/global-header-validatie' },
                { text: 'Notificaties', link: '/handleiding/mijn-burger-profiel/notificaties' },
                { text: 'Afspraak maken', link: '/handleiding/mijn-burger-profiel/afspraak-maken' },
              ],
            },
          ],
        },
        {
          text: 'Naslag',
          collapsed: false,
          items: [
            { text: 'FAQ voor dienstbeheerders', link: '/handleiding/faq' },
            { text: 'Feature-overzicht per scherm', link: '/handleiding/feature-overzicht-per-scherm' },
          ],
        },
      ],

      '/concepten/': [
        {
          text: 'Concepten',
          items: [
            { text: 'Overzicht', link: '/concepten/' },
            { text: 'Hoe beschikbaarheid berekend wordt', link: '/concepten/beschikbaarheid' },
            { text: 'Multi-tenant', link: '/concepten/multi-tenant' },
            { text: 'Rollen en rechten in detail', link: '/concepten/rollen-en-rechten' },
            { text: 'Woordenlijst', link: '/concepten/woordenlijst' },
          ],
        },
      ],

      '/support/': [
        {
          text: 'Support',
          items: [
            { text: 'Contact', link: '/support/' },
            { text: 'Bekende problemen', link: '/support/bekende-problemen' },
            { text: 'Iets melden', link: '/support/iets-melden' },
            { text: 'Release notes', link: '/support/release-notes' },
          ],
        },
      ],
    },

    docFooter: { prev: 'Vorige', next: 'Volgende' },
    outline: { label: 'Op deze pagina', level: [2, 3] },
    returnToTopLabel: 'Terug naar boven',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Thema',
    lightModeSwitchTitle: 'Schakel naar lichte modus',
    darkModeSwitchTitle: 'Schakel naar donkere modus',
    lastUpdatedText: 'Laatst bijgewerkt',
  },
})
