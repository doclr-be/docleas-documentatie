<script setup lang="ts">
import { withBase } from 'vitepress'
import { data as changes } from '../../data/recentChanges.data'

// Overzicht van de recent gewijzigde pagina's (frontmatter 'updated'), nieuwste eerst:
//   <RecentChanges />
const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('nl-BE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
</script>

<template>
  <ul v-if="changes.length" class="recent-changes">
    <li v-for="c in changes" :key="c.url">
      <span class="recent-changes__date">{{ formatDate(c.updated) }}</span>
      <a :href="withBase(c.url)">{{ c.title }}</a>
      <span v-if="c.description" class="recent-changes__desc"> — {{ c.description }}</span>
    </li>
  </ul>
  <p v-else class="recent-changes__empty">Er zijn nog geen pagina's met een wijzigingsdatum.</p>
</template>

<style scoped>
.recent-changes {
  list-style: none;
  padding-left: 0;
}
.recent-changes li {
  margin: 0.5rem 0;
}
.recent-changes__date {
  display: inline-block;
  min-width: 8.5rem;
  margin-right: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
}
.recent-changes__desc,
.recent-changes__empty {
  color: var(--vp-c-text-2);
}
</style>
