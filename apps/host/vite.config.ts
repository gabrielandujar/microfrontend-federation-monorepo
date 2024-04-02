import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import dns from 'dns';
import tsconfigPaths from 'vite-tsconfig-paths';

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        "remote-app": "http://localhost:5002/assets/remoteEntry.js",
        "profile-app": "http://localhost:5001/assets/remoteEntry.js"
      },
      shared: ["react", "react-dom", "react-router-dom",  "zustand"]
    }),
    tsconfigPaths(),
  ],
  preview: {
    host: 'localhost',
    port: 5000,
    strictPort: true,
  },
  build: {
    target: 'esnext'
  }
});
