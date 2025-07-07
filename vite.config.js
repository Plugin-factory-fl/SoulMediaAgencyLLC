import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    hmr: {
      // Use polling instead of WebSocket for HMR in WebContainer
      // This is more reliable in containerized environments
      port: 5173,
      host: 'localhost'
    },
    watch: {
      // Enable polling for file watching
      usePolling: true,
      interval: 1000
    }
  }
})