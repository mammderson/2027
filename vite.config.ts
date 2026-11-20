import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// This repo is named <owner>.github.io, so GitHub Pages serves it from the site root and the base path is '/'.
// (A project repo with any other name would be served from /<repo-name>/ and would need that as the base.)
export default defineConfig({
  base: '/',
  plugins: [react()],
  define: {
    // The moment the site was built, shown as "Last updated" in the footer. Every build/deploy refreshes it.
    __LAST_UPDATED__: JSON.stringify(new Date().toISOString()),
  },
})
