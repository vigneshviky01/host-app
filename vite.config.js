// host-app/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host_app',
      remotes: {
        // remote_app is the same "name" from the remote's config
        // URL must point to the remoteEntry.js served by remote-app
        remote_app: 'https://mfremoteapp.netlify.app/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    // target: 'esnext',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5173
  }
})
