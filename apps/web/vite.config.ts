import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vanillaExtractPlugin()],
  resolve: {
    alias: {
      "@idealjs/camphora-action": path.resolve(
        __dirname,
        "../packages/camphora-action/index.ts"
      ),
      "@idealjs/camphora-styled": path.resolve(
        __dirname,
        "../packages/camphora-styled/index.ts"
      ),
    },
  },
});
