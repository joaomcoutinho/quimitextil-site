import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    
  ],
  base: "/quimitextil-site/",
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
    host: true,
  },
  preview: {
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
    host: true,
  },
})
