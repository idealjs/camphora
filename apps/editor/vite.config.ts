import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";
import path from "path";

const config = defineConfig({
  plugins: [vanillaExtractPlugin()],
  resolve: {
    alias: {
      "@idealjs/camphora-styled": path.resolve(
        __dirname,
        "../../packages/camphora-styled/src"
      ),
    },
  },
});

export default config;
