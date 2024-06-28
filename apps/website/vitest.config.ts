import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), vanillaExtractPlugin()],

  test: {
    setupFiles: ["./setup.ts"],
    browser: {
      provider: "playwright",
      enabled: true,
      name: "chromium",
      // headless: true,
    },
  },
});
