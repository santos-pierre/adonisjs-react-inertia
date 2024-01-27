import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ['resources/js/app.jsx'],

      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ['resources/views/**/*.edge'],
    }),
    vue(),
  ],
})
