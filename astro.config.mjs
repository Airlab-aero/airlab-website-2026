// @ts-check
import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  output: 'static',
  site: isGitHubPages ? 'https://airlab-aero.github.io' : 'https://airlab.aero',
  base: isGitHubPages ? '/airlab-website-2026' : '/',
});
