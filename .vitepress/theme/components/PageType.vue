<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

// Markeert een pagina als how-to (stap-voor-stap handeling).
// Gevoed door de frontmatter-sleutel 'type: how-to'; toont niets als die sleutel ontbreekt.
// Het label linkt naar het overzicht van alle how-to's.
const { frontmatter } = useData()

const isHowTo = computed(() => frontmatter.value.type === 'how-to')
</script>

<template>
  <div v-if="isHowTo" class="page-type">
    <a class="page-type__badge" :href="withBase('/handleiding/how-tos')">How-to</a>
  </div>
</template>

<style scoped>
.page-type__badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.4;
  padding: 0.1rem 0.6rem;
  border-radius: 4px;
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
  transition: background-color 0.2s;
}
.page-type__badge:hover {
  text-decoration: none;
  background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg-soft));
}
</style>
