import { defineConfig } from 'vite';
export default defineConfig({
  base:'/myFirstUploadBabylonJS/docs/index.html',
  server: {
    port: 18080,
  },
  build: {
    target: 'esnext'
  }
});
