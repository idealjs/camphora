import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";
import esbuild from "rollup-plugin-esbuild";
import { visualizer } from "rollup-plugin-visualizer";

import pkg from "./package.json" assert { type: "json" };

const config = {
  input: ["./src/index.ts"],
  plugins: [
    esbuild(),
    vanillaExtractPlugin(),
    visualizer({
      emitFile: true,
      filename: "stats.html",
    }),
  ],
  output: [
    {
      file: pkg.exports["."].import,
      format: "esm",
      assetFileNames({ name }) {
        return name?.replace(".css.ts", "") ?? "";
      }
    },
    {
      file: pkg.exports["."].require,
      format: "cjs",
      assetFileNames({ name }) {
        return name?.replace(".css.ts", "") ?? "";
      }
    },
  ],
};

export default config;
