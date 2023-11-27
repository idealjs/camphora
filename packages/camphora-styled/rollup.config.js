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
    },
    {
      file: pkg.exports["."].require,
      format: "cjs",
    },
  ],
};

export default config;
