import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load all env vars for the current mode (including non-VITE_ vars)
  const env = loadEnv(mode, process.cwd(), '')

  // ALLOWED_HOSTS expected as a comma-separated list in .env, e.g.
  // ALLOWED_HOSTS=localhost,127.0.0.1,myhost.local
  const raw = env.ALLOWED_HOSTS ?? ''
  const allowedFromEnv = raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)

  // Keep an empty-string entry like the original config (Vite accepts it)
  const allowedHosts = Array.from(new Set(['', ...allowedFromEnv]))

  return {
    plugins: [vue(), tailwindcss()],
    envPrefix: ['VITE_', 'REALGRID_'],
    server: {
      allowedHosts
    }
  }
})
