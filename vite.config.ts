import { defineConfig } from 'vite';
export default defineConfig({
  base:'/myFirstUploadBabylonJS/',
  server: {
    port: 18080,
  },
  build: {
    target: 'esnext'
  }
});

