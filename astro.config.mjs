import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  // base: '',
  // outDir: '',
  // site: '',
  trailingSlash: 'always',
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
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
})
