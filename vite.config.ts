import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Vite ne fait pas de proxy en production !!!
    proxy: {
      // Redirection de /api vers ton serveur backend
      "/api": {
        target: "http://localhost:3001", // URL de ton serveur backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
