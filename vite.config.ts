import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env', // Specify the environment variable directory
  plugins: [react()],
  server: {
    port: parseInt(process.env.PORT || '3001', 10), // Default to 3001 if process.env.PORT is undefined
    host: true, // Ensures it binds to all network interfaces (important for Render)
  },
});
