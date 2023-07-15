import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  define: {
    // NOTE: Environment variables defined here will be exposed in the browser
    'process.env.VITE_supabaseKey': JSON.stringify(process.env.VITE_supabaseKey),
    'process.env.VITE_supabaseUrl': JSON.stringify(process.env.VITE_supabaseUrl), 

  },
})