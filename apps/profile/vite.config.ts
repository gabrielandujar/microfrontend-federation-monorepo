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
      name: "profile-app",
      filename: "remoteEntry.js",
      exposes: {
        "./profileApp": "./src/App.tsx",
        "./userStore" :"./src/store/user"
      },
      shared: ["react", "react-dom", "react-router-dom", "zustand"],
    }),
    tsconfigPaths(),
  ],
  preview: {
    host: 'localhost',
    port: 5001,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
});
