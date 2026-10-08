import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    fs: {
      strict: false,
    },
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'https://proj-esp.onrender.com',
        changeOrigin: true,
      },
    },
  },
})