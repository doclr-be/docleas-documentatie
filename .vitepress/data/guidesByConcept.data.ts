import { createContentLoader } from 'vitepress'

// Omgekeerde index: per concept-sleutel de lijst how-to-pagina's die het concept
// behandelt (frontmatter 'concepts'). Wordt bij build berekend en gebruikt door
// <ConceptGuides concept="agenda" /> op de concept-/kernbegrippenpagina's.

export interface GuideRef {
  title: string
  url: string
  /** Korte omschrijving (frontmatter 'description'), getoond onder de titel. */
  description?: string
}

export type GuidesByConcept = Record<string, GuideRef[]>

declare const data: GuidesByConcept
export { data }

export default createContentLoader('{handleiding,opleidingen}/**/*.md', {
  includeSrc: true,
  transform(raw) {
    const byConcept: GuidesByConcept = {}

    for (const page of raw) {
      const concepts = page.frontmatter.concepts
      if (!Array.isArray(concepts) || concepts.length === 0) continue

      const h1 = page.src?.match(/^#\s+(.+)$/m)?.[1]?.trim()
      const title = (page.frontmatter.title as string | undefined) ?? h1 ?? page.url
      const description =
        (page.frontmatter.description as string | undefined) ??
        (page.frontmatter.tagline as string | undefined) ??
        undefined

      for (const key of concepts) {
        const k = String(key)
        ;(byConcept[k] ??= []).push({ title, url: page.url, description })
      }
    }

    for (const list of Object.values(byConcept)) {
      list.sort((a, b) => a.title.localeCompare(b.title, 'nl'))
    }
    return byConcept
  },
})
