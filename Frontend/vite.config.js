import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Provide a browser-safe replacement for `process.env` used by some deps
  define: {
    'process.env': {},
  },
  plugins: [react()],
})
