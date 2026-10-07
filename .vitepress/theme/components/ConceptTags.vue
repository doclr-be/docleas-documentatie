<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { CONCEPTS, isConceptKey } from '../concepts'

// Toont de concepten die deze pagina behandelt, als klikbare badges.
// Gevoed door de frontmatter-sleutel 'concepts' (array van concept-sleutels).
const { frontmatter } = useData()

const tags = computed(() => {
  const raw = frontmatter.value.concepts
  if (!Array.isArray(raw)) return []
  return raw
    .map((key) => String(key))
    .filter((key) => {
      const ok = isConceptKey(key)
      if (!ok && import.meta.env.DEV) {
        console.warn(`[concept-tags] onbekend concept "${key}" — zie .vitepress/theme/concepts.ts`)
      }
      return ok
    })
    .map((key) => ({ key, ...CONCEPTS[key] }))
})
</script>

<template>
  <div v-if="tags.length" class="concept-tags">
    <span class="concept-tags__label">Behandelt:</span>
    <a v-for="t in tags" :key="t.key" class="concept-tags__tag" :href="withBase(t.link)">
      {{ t.label }}
    </a>
  </div>
</template>

<style scoped>
.concept-tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem 0.5rem;
  margin: 0 0 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed var(--vp-c-divider);
}
.concept-tags__label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
}
.concept-tags__tag {
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.4;
  padding: 0.1rem 0.55rem;
  border-radius: 999px;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: border-color 0.2s, background-color 0.2s;
}
.concept-tags__tag:hover {
  text-decoration: none;
  border-color: var(--dc, var(--vp-c-brand-1));
  background-color: color-mix(in srgb, var(--dc, var(--vp-c-brand-1)) 12%, var(--vp-c-bg-soft));
}
</style>
