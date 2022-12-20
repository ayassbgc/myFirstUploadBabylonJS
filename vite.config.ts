import { defineConfig } from 'vite';
export default defineConfig({
  base:'/myFirstUploadBabylonJS/docs/',
  server: {
    port: 18080,
  },
  build: {
    target: 'esnext'
  }
});
