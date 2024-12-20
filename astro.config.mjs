import react from '@astrojs/react'
import compress from 'astro-compress'
// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

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
  integrations: [react(), tailwind(), compress({ HTML: false, Image: false, SVG: false })],
})
