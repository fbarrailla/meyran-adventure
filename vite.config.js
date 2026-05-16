import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (meyran-adventure.com) serves from /, so base stays at '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
