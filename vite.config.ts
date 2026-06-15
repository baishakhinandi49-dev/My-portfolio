import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "node:path"

export default defineConfig({
  base: "./",
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  plugins: [react()],
  build: {
    sourcemap: false,
    cssCodeSplit: true,
    target: "es2020",
  },
})
