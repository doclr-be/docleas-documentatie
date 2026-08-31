<script setup lang="ts">
interface Props {
  /** URL van de MP4 (bv. de DO Spaces CDN-URL, of /videos/... uit public/) */
  src: string
  /** Poster-afbeelding die getoond wordt vóór afspelen */
  poster?: string
  /** Titel — wordt als bijschrift onder de video getoond en is echte tekst (indexeerbaar) */
  title?: string
  /** URL van het WebVTT-ondertitelbestand (.vtt). SRT werkt niet in de browser. */
  captions?: string
  /** Taalcode van de ondertiteling */
  lang?: string
  /** Label voor de ondertitelknop */
  captionsLabel?: string
  /**
   * Zet op "anonymous" wanneer het .vtt-bestand op een ANDER domein staat dan de site
   * (dan moet dat domein ook CORS-headers sturen). Tip: hou het kleine .vtt-bestand
   * gewoon in public/videos/ op dezelfde origin, dan is dit niet nodig.
   */
  crossorigin?: '' | 'anonymous' | 'use-credentials'
}

const props = withDefaults(defineProps<Props>(), {
  lang: 'nl',
  captionsLabel: 'Nederlands',
})
</script>

<template>
  <figure class="doc-video">
    <video
      controls
      playsinline
      preload="metadata"
      :poster="poster"
      :crossorigin="crossorigin"
    >
      <source :src="src" type="video/mp4" />
      <track
        v-if="captions"
        kind="captions"
        :src="captions"
        :srclang="lang"
        :label="captionsLabel"
        default
      />
      <p>
        Je browser kan deze video niet afspelen.
        <a :href="src" download>Download de video (MP4)</a>.
      </p>
    </video>
    <figcaption v-if="title">{{ title }}</figcaption>
  </figure>
</template>

<style scoped>
.doc-video {
  margin: 20px 0;
}

.doc-video video {
  width: 100%;
  height: auto;
  display: block;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: #000;
}

.doc-video figcaption {
  margin-top: 8px;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  text-align: center;
}
</style>
