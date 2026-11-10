import { createContentLoader } from 'vitepress'
import { CONCEPTS, isConceptKey } from '../theme/concepts'

// Alle handleiding-pagina's met frontmatter 'type: how-to', gegroepeerd per concept
// (frontmatter 'concepts', zie theme/concepts.ts). Een pagina met meerdere concepten staat onder
// elk van die concepten; een pagina zonder geldig concept valt in 'Overige'.
// Wordt bij build berekend en getoond door <HowToList />.

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

      const concepts = Array.isArray(page.frontmatter.concepts) ? page.frontmatter.concepts.map(String) : []
      const labels = concepts.filter(isConceptKey).map((key) => CONCEPTS[key].label)

      for (const label of labels.length ? labels : [OTHER]) {
        ;(groups.get(label) ?? groups.set(label, []).get(label)!).push({ title, url: page.url, description })
      }
    }

    return [...groups.entries()]
      .map(([label, howTos]) => ({
        label,
        howTos: howTos.sort((a, b) => a.title.localeCompare(b.title, 'nl')),
      }))
      .sort((a, b) => (a.label === OTHER ? 1 : b.label === OTHER ? -1 : a.label.localeCompare(b.label, 'nl')))
  },
})
