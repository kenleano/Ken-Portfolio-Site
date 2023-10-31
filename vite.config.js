import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Ken-Portfolio-Site/', // Adjust this based on your repository name

  plugins: [react()],

  build: {
    outDir: 'dist', // Specify the output directory (default is 'dist')
    assetsDir: 'assets', // Specify the assets directory (default is 'assets')
    sourcemap: true, // Enable source maps for debugging
  },

  server: {
    port: 3000, // Specify the port for the development server
    open: true, // Automatically open the default browser when starting the development server
  },
});
