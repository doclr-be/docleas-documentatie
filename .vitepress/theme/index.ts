import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'
import Video from './components/Video.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // <Video src="..." title="..." captions="..." /> bruikbaar in elke .md
    app.component('Video', Video)
  },
} satisfies Theme
