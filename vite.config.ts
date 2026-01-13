import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser', // Cambiamos a terser explícitamente para mayor estabilidad en ciertos hostings
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: undefined, // Dejamos que Vite decida para evitar errores de carga de trozos
      },
    },
  },
});