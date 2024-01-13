import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";
import { defineConfig } from "vite";

const config = defineConfig({
  plugins: [vanillaExtractPlugin()],
  resolve: {
    alias: {
      "@idealjs/camphora-styled": path.resolve(
        __dirname,
        "../../packages/camphora-styled/src"
      ),
      "@idealjs/dnd-core": path.resolve(
        __dirname,
        "../../packages/dnd-core/src"
      ),
    },
  },
});

export default config;
