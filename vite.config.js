import { defineConfig } from 'vite'
<<<<<<< HEAD
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
=======
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
>>>>>>> 85fbd1e (feat: criação da navbar e do componente ThemeToggleBtn para alteração do tema do site)
})
