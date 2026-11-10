<script setup lang="ts">
// Printicoon rechtsboven: opent het printvenster van de browser; de gebruiker kiest 'Opslaan als PDF'.
// Geen build-stap nodig. De print-stijlen (navigatie verbergen e.d.) staan in custom.css.
function print() {
  window.print()
}
</script>

<template>
  <button
    type="button"
    class="docleas-print"
    title="Afdrukken of opslaan als PDF"
    aria-label="Afdrukken of opslaan als PDF"
    @click="print"
  >
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  </button>
</template>

<style scoped>
/* Zweeft rechts, zodat de broodkruimel ernaast blijft staan en het geen extra regel inneemt. */
.docleas-print {
  float: right;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin: 0 0 4px 12px;
  padding: 0;
  color: var(--vp-c-text-2);
  background: transparent;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;
}
.docleas-print:hover {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-default-soft);
}
</style>
