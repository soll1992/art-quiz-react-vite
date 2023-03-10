import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      components: '/src/Components',
      consts: '/src/consts',
      pages: '/src/Pages',
      types: '/src/types',
      utils: '/src/utils',
    },
  },
});
