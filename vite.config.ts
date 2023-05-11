import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  base: './',
  server: {
    port: 8000,
    open: true,
    cors: true,
    host: '0.0.0.0',
    proxy: {},
  },
  plugins: [vue()],
})
