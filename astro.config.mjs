import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Your site URL
  site: 'https://yourdomain.com',
  
  // Base path (leave as '/' for root domain)
  base: '/',
  
  // Build output directory
  outDir: './dist',
  
  // Server options
  server: {
    port: 4321,
    host: true
  }
});
