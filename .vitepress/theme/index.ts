import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'
import Video from './components/Video.vue'
import EditLink from './components/EditLink.vue'

export default {
  extends: DefaultTheme,
  // 'Deze pagina bewerken op GitHub'-knop onderaan de content.
  // Alleen zichtbaar voor wie de vlag heeft gezet (zie EditLink.vue) — klanten niet.
  Layout: () => h(DefaultTheme.Layout, null, { 'doc-footer-before': () => h(EditLink) }),
  enhanceApp({ app }) {
    // <Video src="..." title="..." captions="..." /> bruikbaar in elke .md
    app.component('Video', Video)
  },
} satisfies Theme
