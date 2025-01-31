import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig((env) => {
  const envars = loadEnv(env.mode, "./");
  const serverAPIPath = envars.VITE_SERVER_API_PATH ?? "/api";

  return {
    plugins: [react()],
    server: {
      // Vite ne fait pas de proxy en production !!!
      proxy: {
        // Redirection de /api vers ton serveur backend
        [serverAPIPath]: {
          target: "http://localhost:3000", // URL de ton serveur backend
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
