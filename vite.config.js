import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH ||"/DMovies",
   build: {
    outDir: 'dist',
  },
  preview: {
    port: 4173,
    host: true
  },
  server: {
    port: 3000,
    host: true
  }
})
