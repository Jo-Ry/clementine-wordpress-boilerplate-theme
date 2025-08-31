import { defineConfig } from "vite";
import path from "path";
import copy from "./.vite/copy.js";

// Get the absolute path to the project root (three levels up from this file)
const ROOT = path.resolve("../../");
// this replacement resolves to the relative path of the 'web root' for this project -> '\wp-content\themes\clementine'
const BASE = __dirname.replace(ROOT, "\\wp-content");

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? `${BASE}/dist/` : BASE,

  build: {
    manifest: "manifest.json",
    assetsDir: ".",
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        scripts: "src/scripts/main.js",
        styles: "src/styles/main.scss",
      },
      // [hash] is used for cache busting
      output: {
        entryFileNames: "[hash].js",
        assetFileNames: "[hash].[ext]",
        chunkFileNames: "[hash].js",
      },
    },
  },

  plugins: [
    copy({
      targets: [
        {
          src: "src/images/**/*.{png,jpg,jpeg,svg,webp,avif}",
        },
        {
          src: "src/fonts/**/*.{woff,woff2,ttf,otf,eot}",
        }
      ],
    }),

    // Enable HMR for PHP files
    {
      name: "php",
      handleHotUpdate({ file, server }) {
        if (file.endsWith(".php")) {
          server.ws.send({ type: "full-reload" });
        }
      },
    },
  ],

  // Set up aliases for easier imports
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
      "@scripts": path.resolve(__dirname, "./src/scripts"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@fonts": path.resolve(__dirname, "./src/fonts"),
    },
  },
});
