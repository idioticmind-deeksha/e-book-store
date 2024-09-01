import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        'D:/Deeksha/deek-projects/bookStore/frontend',
        'D:/Deeksha/deek-projects/bookStore/node_modules/slick-carousel/slick/fonts'
      ]
    }
  },
  build: {
    rollupOptions: {
      external: [
        '/src/main.jsx' 
      ]
    }
  }
});

