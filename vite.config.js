import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/newCarteleraReact/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
  },
  envPrefix: ["VITE_"],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTest.js",
  },
  server: {
    port: 3000,
    open: true,
  },
});
