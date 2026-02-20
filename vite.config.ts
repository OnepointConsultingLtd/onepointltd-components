import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "onepointltd-components": path.resolve(__dirname, "./onepointltd-components/src"),
    },
  },
});
