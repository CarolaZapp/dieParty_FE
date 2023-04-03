import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

// export default defineConfig({
//   plugins: [react()],
// });

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // target: "http://localhost:4005",
        target:"http://217.160.69.175:4005",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});


