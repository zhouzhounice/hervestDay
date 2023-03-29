import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server:{
    host: '127.0.0.1',
    port: 5173,
    proxy:{
      '/api': {
        target: 'http://127.0.0.1:3000/api',
        changeOrigin: true,
        rewrite: (path) => {
          console.log(path)
          return path.replace(/^\/api/, '')
        },
      },
    }
  }
})
