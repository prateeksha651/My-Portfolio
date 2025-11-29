import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/My-portfolio/", // EXACT match of your repo name (case-sensitive)
  plugins: [react()],
});


