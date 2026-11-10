import { createContentLoader } from 'vitepress'

// Alle handleiding-pagina's met frontmatter 'type: how-to', gegroepeerd per onderdeel
// (eerste map onder /handleiding/). Wordt bij build berekend en getoond door <HowToList />.

export interface HowToRef {
  title: string
  url: string
  /** Korte omschrijving (frontmatter 'description'), getoond onder de titel. */
  description?: string
}

export interface HowToGroup {
  label: string
  howTos: HowToRef[]
}

declare const data: HowToGroup[]
export { data }

const GROUP_LABELS: Record<string, string> = {
  afspraken: 'Afspraken',
  producten: 'Producten',
  burgerflow: 'Burgerflow',
  'mijn-burger-profiel': 'Mijn Burger Profiel',
  werkschemas: "Werkschema's",
}
const OTHER = 'Overige'

export default createContentLoader('handleiding/**/*.md', {
  includeSrc: true,
  transform(raw) {
    const groups = new Map<string, HowToRef[]>()

    for (const page of raw) {
      if (page.frontmatter.type !== 'how-to') continue

      const h1 = page.src?.match(/^#\s+(.+)$/m)?.[1]?.trim()
      const title = (page.frontmatter.title as string | undefined) ?? h1 ?? page.url
      const description = page.frontmatter.description as string | undefined

      // /handleiding/<onderdeel>/... ; een pagina direct onder /handleiding/ valt in 'Overige'
      const segments = page.url.split('/').filter(Boolean)
      const label = segments.length > 2 ? (GROUP_LABELS[segments[1]] ?? segments[1]) : OTHER

      ;(groups.get(label) ?? groups.set(label, []).get(label)!).push({ title, url: page.url, description })
    }

    return [...groups.entries()]
      .map(([label, howTos]) => ({
        label,
        howTos: howTos.sort((a, b) => a.title.localeCompare(b.title, 'nl')),
      }))
      .sort((a, b) => (a.label === OTHER ? 1 : b.label === OTHER ? -1 : a.label.localeCompare(b.label, 'nl')))
  },
})
