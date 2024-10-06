import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

// Construct __dirname since it's not available in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react", // For Emotion support
      babel: {
        plugins: ["@emotion/babel-plugin"] // Babel plugin for Emotion
      }
    })
  ],
  root: "src", // Setting the root directory to "src"
  build: {
    outDir: '../dist', // Output directory for the build (relative to root)
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html') // Path to your index.html
      }
    }
  },
})
