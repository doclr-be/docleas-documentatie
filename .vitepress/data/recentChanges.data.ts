import { createContentLoader } from 'vitepress'

// De recent gewijzigde pagina's, op basis van de frontmatter-sleutel 'updated' (jjjj-mm-dd) die je zelf
// bijhoudt. Bewust niet de git-datum: een typfout of opmaakcommit telt dan niet mee.
// Getoond door <RecentChanges />.

export interface RecentChange {
  title: string
  url: string
  /** Korte omschrijving (frontmatter 'description'), getoond onder de titel. */
  description?: string
  /** ISO-datum (jjjj-mm-dd) van de laatste inhoudelijke wijziging. */
  updated: string
}

declare const data: RecentChange[]
export { data }

/** Aantal pagina's dat het overzicht toont. */
const MAX_PAGES = 25

export default createContentLoader('{handleiding,opleidingen}/**/*.md', {
  includeSrc: true,
  transform(raw) {
    const changes: RecentChange[] = []

    for (const page of raw) {
      const value = page.frontmatter.updated
      if (!value) continue
      // YAML leest jjjj-mm-dd als Date (UTC), een string met tekst blijft een string
      const date = new Date(value as string | Date)
      if (Number.isNaN(date.getTime())) {
        console.warn(`[recent-changes] ongeldige 'updated' op ${page.url}: ${String(value)}`)
        continue
      }

      const h1 = page.src?.match(/^#\s+(.+)$/m)?.[1]?.trim()
      changes.push({
        title: (page.frontmatter.title as string | undefined) ?? h1 ?? page.url,
        url: page.url,
        description: page.frontmatter.description as string | undefined,
        updated: date.toISOString().slice(0, 10),
      })
    }

    return changes
      .sort((a, b) => b.updated.localeCompare(a.updated) || a.title.localeCompare(b.title, 'nl'))
      .slice(0, MAX_PAGES)
  },
})
