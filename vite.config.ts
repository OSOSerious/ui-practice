import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ai-tutor/',
  plugins: [react()],
  server: {
    port: 5174,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
