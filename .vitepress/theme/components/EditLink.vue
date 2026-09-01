<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'

// Repo + branch waarop bewerkt wordt. Zet 'branch' op de branch die naar de
// live site deployt (nu 'vite'; wordt 'main' zodra dat de publicatiebranch is).
const REPO = 'doclr-be/docleas-documentatie'
const BRANCH = 'vite'

// De knop is verborgen tenzij deze vlag in localStorage staat. Klanten zetten
// die nooit, dus zij zien niets. Redacteuren activeren hem eenmalig door de
// pagina met ?editor te openen (bookmark: https://<site>/?editor).
const STORAGE_KEY = 'docleas-editor'

const { page } = useData()
const enabled = ref(false)

onMounted(() => {
  try {
    const q = new URLSearchParams(location.search)
    if (q.has('editor')) {
      const on = q.get('editor') !== '0' && q.get('editor') !== 'off'
      localStorage.setItem(STORAGE_KEY, on ? '1' : '0')
    }
    enabled.value = localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    /* private mode e.d. — knop blijft gewoon verborgen */
  }
})

const url = computed(
  () => `https://github.com/${REPO}/edit/${BRANCH}/${page.value.relativePath}`,
)
</script>

<template>
  <div v-if="enabled" class="docleas-edit">
    <a :href="url" target="_blank" rel="noreferrer">✏️ Deze pagina bewerken op GitHub</a>
  </div>
</template>

<style scoped>
.docleas-edit {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--vp-c-divider);
  font-size: 0.9rem;
}
.docleas-edit a {
  font-weight: 600;
  color: var(--vp-c-brand-1);
}
</style>
