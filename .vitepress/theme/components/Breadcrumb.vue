<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

// Kruimelpad, afgeleid uit themeConfig.sidebar (config.ts). Geen plugin:
// we lopen de sidebar-boom af tot de huidige pagina en tonen de voorouders.
const { page, theme, frontmatter } = useData()

interface SidebarItem {
  text?: string
  link?: string
  items?: SidebarItem[]
}
interface Crumb {
  text: string
  link?: string
}

function normalize(p: string): string {
  let s = p.split('#')[0].split('?')[0]
  s = s.replace(/\.(html|md)$/, '')
  s = s.replace(/\/index$/, '/')
  if (s.length > 1) s = s.replace(/\/$/, '')
  if (!s.startsWith('/')) s = '/' + s
  return s
}

const currentPath = computed(() => normalize('/' + page.value.relativePath))

function pickSidebar(): SidebarItem[] {
  const sb = theme.value.sidebar as SidebarItem[] | Record<string, SidebarItem[]> | undefined
  if (!sb) return []
  if (Array.isArray(sb)) return sb
  const key = Object.keys(sb)
    .filter((k) => currentPath.value.startsWith(k))
    .sort((a, b) => b.length - a.length)[0]
  return key ? sb[key] : []
}

// Een groep heeft in onze config vaak geen eigen 'link'. Als eerste onderliggende
// item naar een sectie-index wijst (link eindigt op '/'), gebruiken we die.
function sectionLink(item: SidebarItem): string | undefined {
  if (item.link) return item.link
  // alleen als een onderliggend item de échte sectie-index is: link eindigt op '/'
  // én is een pad-prefix van de huidige pagina (dus een echte voorouder).
  const idx = item.items?.find(
    (c) => c.link && /\/$/.test(c.link) && currentPath.value.startsWith(normalize(c.link) + '/'),
  )
  return idx?.link
}

function findTrail(items: SidebarItem[], trail: Crumb[]): Crumb[] | null {
  for (const item of items) {
    const next: Crumb[] = [...trail, { text: item.text ?? '', link: sectionLink(item) }]
    if (item.link && normalize(item.link) === currentPath.value) return next
    if (item.items?.length) {
      const found = findTrail(item.items, next)
      if (found) return found
    }
  }
  return null
}

const crumbs = computed<Crumb[]>(() => {
  if (frontmatter.value.layout === 'home') return []
  const trail = findTrail(pickSidebar(), [])?.filter((c) => c.text)
  if (!trail?.length) return []
  // De huidige pagina blijft als laatste kruimel staan, maar zonder link.
  trail[trail.length - 1] = { text: trail[trail.length - 1].text }
  return [{ text: 'Documentatie', link: '/' }, ...trail]
})
</script>

<template>
  <nav v-if="crumbs.length" class="breadcrumb" aria-label="Kruimelpad">
    <template v-for="(c, i) in crumbs" :key="i">
      <span v-if="i" class="breadcrumb__sep" aria-hidden="true">›</span>
      <a v-if="c.link" :href="withBase(normalize(c.link))">{{ c.text }}</a>
      <span v-else>{{ c.text }}</span>
    </template>
  </nav>
</template>

<style scoped>
.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}
.breadcrumb a {
  color: var(--vp-c-text-2);
  font-weight: 500;
}
.breadcrumb a:hover {
  color: var(--dc, var(--vp-c-brand-1));
  text-decoration: none;
}
.breadcrumb__sep {
  color: var(--vp-c-text-3);
}
</style>
