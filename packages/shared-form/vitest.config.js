import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    includeSource: ["src/**/*.{ts,tsx}"]
  },
})