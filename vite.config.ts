import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  // CRITICAL: Tells Vite this will be hosted at the root of Zaay10.github.io
  base: '/', 
  
  plugins: [react(), tailwindcss()],
  
  resolve: {
    alias: {
      // This tells Vite that @/ means the src/ folder
      "@": path.resolve(__dirname, "./src"),
      // This maps the old library link to your local copy
      "@workspace/api-client-react": path.resolve(__dirname, "./src/lib/api-client-react")
    },
  },
  
  server: {
    host: '0.0.0.0', // Lets you test on your mobile devices
    port: 5173
  }
});