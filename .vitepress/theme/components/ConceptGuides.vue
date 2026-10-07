<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { data as guidesByConcept } from '../../data/guidesByConcept.data'
import { CONCEPTS, isConceptKey } from '../concepts'

// Omgekeerde index op een concept-pagina:
//   <ConceptGuides concept="agenda" />
// Toont elke how-to die dit concept in zijn frontmatter heeft staan.
const props = defineProps<{ concept: string }>()

const label = computed(() =>
  isConceptKey(props.concept) ? CONCEPTS[props.concept].label : props.concept,
)
const guides = computed(() => guidesByConcept[props.concept] ?? [])
</script>

<template>
  <div class="concept-guides">
    <p class="concept-guides__title">How-to's over {{ label }}</p>
    <ul v-if="guides.length">
      <li v-for="g in guides" :key="g.url">
        <a :href="withBase(g.url)">{{ g.title }}</a>
        <span v-if="g.description" class="concept-guides__desc"> — {{ g.description }}</span>
      </li>
    </ul>
    <p v-else class="concept-guides__empty">Nog geen how-to's gekoppeld aan dit concept.</p>
  </div>
</template>

<style scoped>
.concept-guides {
  margin: 1.5rem 0;
  padding: 1rem 1.25rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
}
.concept-guides__title {
  margin: 0 0 0.5rem;
  font-weight: 700;
}
.concept-guides ul {
  margin: 0;
  padding-left: 1.2rem;
}
.concept-guides li {
  margin: 0.15rem 0;
}
.concept-guides__desc {
  color: var(--vp-c-text-2);
}
.concept-guides__empty {
  margin: 0;
  color: var(--vp-c-text-2);
}
</style>
