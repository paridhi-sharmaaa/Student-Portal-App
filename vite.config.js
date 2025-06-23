import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // 👈 ensures _redirects is copied
  build: {
    outDir: 'dist'
  }
})
