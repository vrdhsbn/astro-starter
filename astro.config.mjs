import react from '@astrojs/react'
import compress from 'astro-compress'
// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  server: {
    open: true,
  },
  devToolbar: {
    enabled: false,
  },
  build: {
    // format: 'file',
    inlineStylesheets: 'never',
  },
  compressHTML: false,
  integrations: [react(), compress({ CSS: false, Image: false, SVG: false })],
})
