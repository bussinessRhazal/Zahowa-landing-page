import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚠️ IMPORTANT : Adapter le base path selon le déploiement
  // - GitHub Pages avec sous-dossier : '/Zahowa-landing-page/'
  // - Domaine racine (zahowa.com) : '/'
  base: '/Zahowa-landing-page/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'form': ['react-hook-form'],
          'seo': ['react-helmet-async']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
