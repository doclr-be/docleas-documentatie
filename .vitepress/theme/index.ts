import { h, nextTick, onMounted, watch } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useRoute, type Theme } from 'vitepress'
import mediumZoom, { type Zoom } from 'medium-zoom'
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
  // Klik op een afbeelding met onderschrift (markdown-it-image-figures, zie config.ts) om ze
  // groter te openen. Opnieuw koppelen na elke paginawissel (VitePress laadt zonder herladen).
  setup() {
    const route = useRoute()
    let zoom: Zoom | null = null
    const initZoom = () => {
      zoom?.detach()
      zoom = mediumZoom('.vp-doc figure img', { background: 'var(--vp-c-bg)', margin: 24 })
    }
    onMounted(initZoom)
    watch(() => route.path, () => nextTick(initZoom))
  },
  enhanceApp({ app }) {
    // <Video src="..." title="..." captions="..." /> bruikbaar in elke .md
    app.component('Video', Video)
    // <ConceptGuides concept="agenda" /> — omgekeerde index op concept-pagina's
    app.component('ConceptGuides', ConceptGuides)
  },
} satisfies Theme
