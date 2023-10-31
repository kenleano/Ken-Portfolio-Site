import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/Ken-Portfolio-Site/', // Adjust this based on your repository name

  plugins: [react()],
  // build: {
  //   outDir: 'dist', // Specify the output directory
  // },
})
