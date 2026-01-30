import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/poc-gh-pages-actions-react",
  plugins: [react()],
});
