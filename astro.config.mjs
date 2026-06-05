// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  output: 'static',
  site: 'https://airlab.aero',
  base: isGitHubPages ? '/airlab-website-2026' : '/',
  integrations: [sitemap()],
});
