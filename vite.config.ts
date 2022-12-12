import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'

import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      include: [/\.[tj]sx?$/],
      dts: './auto-imports.d.ts',
      imports: ['react', 'react-router-dom'],
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    Unocss({}),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
