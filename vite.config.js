import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base is set for GitHub Pages (https://fbarrailla.github.io/meyran-adventure/).
// In dev we serve from `/`.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/meyran-adventure/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
}))
