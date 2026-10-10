import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'
import imageFigures from 'markdown-it-image-figures'

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
  // 'concepten/**' staat klaar maar gaat nog niet mee naar de site.
  srcExclude: ['README.md', 'DEPLOY.md', 'concepten/**'],
  ignoreDeadLinks: [
    // links naar bestanden buiten deze docs-map (Releases, Tickets, project-info)
    /\.\.\//,
  ],

  sitemap: {
    hostname: HOSTNAME,
  },

  // Toon de frontmatter-'description' als lead-paragraaf onder de H1.
  // VitePress rendert die zelf nergens; hier voegen we hem na de titel in.
  markdown: {
    config(md) {
      // Onderschrift onder afbeeldingen: <figure> + <figcaption> met de alt-tekst als bijschrift.
      // Voorlopig alleen voor pagina's met `figures: true` in de frontmatter (proefversie op
      // handleiding/gebruikers.md). Globaal maken: vervang `gated` hieronder door `figures`.
      // (De frontmatter is pas tijdens het renderen bekend, daarom wordt de check in de regel zelf gedaan.)
      const before = md.core.ruler.getRules('')
      md.use(imageFigures, { figcaption: 'alt' })
      const figures = md.core.ruler.getRules('').find((fn) => !before.includes(fn))!
      const gated = (state: any) => (state.env?.frontmatter?.figures ? figures(state) : undefined)
      md.core.ruler.at('image_figures', gated)

      const render = md.render.bind(md)
      md.render = (src, env) => {
        const html = render(src, env)
        const desc = (env as any)?.frontmatter?.description
        if (!desc || (env as any)?.frontmatter?.layout === 'home') return html
        return html.replace(
          '</h1>',
          `</h1>\n<p class="page-description">${md.utils.escapeHtml(String(desc))}</p>`,
        )
      }
      return md
    },
  },

  // llms.txt + llms-full.txt genereren — machineleesbare versie van de site,
  // bedoeld voor zoekmachines en AI-agents (grounding).
  vite: {
    plugins: [llmstxt()],
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }],
    // Huisstijl-lettertypes (zelfde als docleas.eu): Raleway = tekst, Montserrat = titels
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Raleway:wght@400;500;600;700&display=swap',
      },
    ],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Docleas Documentatie' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
  ],

  transformPageData(pageData) {
    const path = pageData.relativePath
      .replace(/(^|\/)index\.md$/, '$1') // .../index.md -> .../
      .replace(/\.md$/, '.html')
    const canonical = `${HOSTNAME}/${path}`

    // Sectiekleur: eerste padsegment -> class op de pagina (zie custom.css).
    const section = pageData.relativePath.split('/')[0]
    if (['introductie', 'opleidingen', 'handleiding', 'concepten', 'support'].includes(section)) {
      pageData.frontmatter.pageClass = `sec-${section}`
    }

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
    logo: { src: '/logo.png', alt: 'Docleas' },

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
          text: 'Opleiding gebruikers',
          collapsed: false,
          items: [
            { text: 'Overzicht', link: '/opleidingen/gebruiker/' },
            { text: '1. Onthaal vs agenda', link: '/opleidingen/gebruiker/01-onthaal-vs-agenda' },
            { text: '2. De agenda', link: '/opleidingen/gebruiker/02-de-agenda' },
            { text: '3. Een afspraak raadplegen', link: '/opleidingen/gebruiker/03-afspraak-raadplegen' },
            { text: '4. Een afspraak maken', link: '/opleidingen/gebruiker/04-afspraak-maken' },
            { text: '5. Verplaatsen en annuleren', link: '/opleidingen/gebruiker/05-verplaatsen-en-annuleren' },
            { text: '6. Afwezigheid en beschikbaarheid', link: '/opleidingen/gebruiker/06-afwezigheid-en-beschikbaarheid' },
            { text: '7. Werken via het Onthaal', link: '/opleidingen/gebruiker/07-werken-via-onthaal' },
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
          ],
        },
      ],

      '/handleiding/': [
        { text: 'Overzicht', link: '/handleiding/' },
        {
          text: 'Medewerker',
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
            {
              text: 'Afspraken',
              link: '/handleiding/afspraken/',
              collapsed: false,
              items: [
                { text: "Afspraken in meerdere agenda's", link: '/handleiding/afspraken/meerdere-agendas' },
              ],
            },
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

      // '/concepten/': tijdelijk niet op de site — zie srcExclude bovenaan.

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
