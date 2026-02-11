// astro.config.mjs
export default defineConfig({
  site: 'https://infinityretouch.com',
  base: '/infinityretouch-website-v2', // <--- Isso avisa ao Astro que ele está em uma subpasta
  integrations: [tailwind()],
});
