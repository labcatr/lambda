import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
// import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  // This is here if I ever want this to be server-side rendered
  // output: "server",
  // adapter: vercel()
});