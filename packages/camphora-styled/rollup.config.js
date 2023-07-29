import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";
import ts from "rollup-plugin-ts";
import { visualizer } from "rollup-plugin-visualizer";

import pkg from "./package.json" assert { type: "json" };

const config = {
  input: ["./src/index.ts"],
  plugins: [
    ts(),
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
