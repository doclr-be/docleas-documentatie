import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'
import Video from './components/Video.vue'
import EditLink from './components/EditLink.vue'
import ConceptTags from './components/ConceptTags.vue'
import ConceptGuides from './components/ConceptGuides.vue'
import Breadcrumb from './components/Breadcrumb.vue'

export default {
  extends: DefaultTheme,
  // 'Deze pagina bewerken op GitHub'-knop onderaan de content.
  // Alleen zichtbaar voor wie de vlag heeft gezet (zie EditLink.vue) — klanten niet.
  // ConceptTags: badges bovenaan de content met de concepten die de pagina behandelt
  // (frontmatter 'concepts'); toont niets als die sleutel ontbreekt.
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'doc-before': () => [h(Breadcrumb), h(ConceptTags)],
      'doc-footer-before': () => h(EditLink),
    }),
  enhanceApp({ app }) {
    // <Video src="..." title="..." captions="..." /> bruikbaar in elke .md
    app.component('Video', Video)
    // <ConceptGuides concept="agenda" /> — omgekeerde index op concept-pagina's
    app.component('ConceptGuides', ConceptGuides)
  },
} satisfies Theme
