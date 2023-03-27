import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

// export default defineConfig({
//   plugins: [react()],
// });

export default defineConfig({
  plugins: [react()],
  server: {
    // ???? wie Verbindung zum Frontend?
    // proxy: {
    //   "/": {
    //     target: "http://217.160.69.175:4173",
    //     changeOrigin: true,
    //   },
    // },
    proxy: {
      "/api": {
        target: "http://217.160.69.175:4005",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
