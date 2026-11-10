<script setup lang="ts">
import { withBase } from 'vitepress'
import { data as groups } from '../../data/howtos.data'

// Overzicht van alle pagina's met frontmatter 'type: how-to', gegroepeerd per onderdeel:
//   <HowToList />
</script>

<template>
  <div v-if="groups.length" class="how-to-list">
    <section v-for="group in groups" :key="group.label">
      <h2>{{ group.label }}</h2>
      <ul>
        <li v-for="p in group.howTos" :key="p.url">
          <a :href="withBase(p.url)">{{ p.title }}</a>
          <span v-if="p.description" class="how-to-list__desc"> — {{ p.description }}</span>
        </li>
      </ul>
    </section>
  </div>
  <p v-else class="how-to-list__empty">Er zijn nog geen how-to's gemarkeerd.</p>
</template>

<style scoped>
.how-to-list__desc {
  color: var(--vp-c-text-2);
}
.how-to-list__empty {
  color: var(--vp-c-text-2);
}
</style>
