import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: false,
    rollupOptions: {
      input: {
        popup: 'popup.html',
        options: 'options.html',
        'page_content_scripts/content': 'src/page_content_scripts/content.tsx',
        'background/background': 'src/background.tsx'
      },
      output: {
      // 重点在这里哦
        // entryFileNames: `assets/[name].${timestamp}.js`,
        // chunkFileNames: `assets/[name].${timestamp}.js`,
        // assetFileNames: `assets/[name].${timestamp}.[ext]`
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      }
    }
  },
  plugins: [react()],
})
