import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";
import esbuild from "rollup-plugin-esbuild";
import { visualizer } from "rollup-plugin-visualizer";
import dts from "rollup-plugin-dts";

const config = {
  input: ["./index.ts"],
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
      file: "dist/index.js",
      format: "esm",
    },
    {
      file: "dist/index.cjs",
      format: "cjs",
    },
  ],
};

export default config;
