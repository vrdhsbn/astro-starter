import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import compress from 'astro-compress'
// @ts-check'
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
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), compress({ HTML: false, Image: false, SVG: false })],
})
