import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";
import esbuild from "rollup-plugin-esbuild";
import { visualizer } from "rollup-plugin-visualizer";

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
      dir: "./dist/esm",
      format: "esm",
      preserveModules: true,
      assetFileNames({ name }) {
        return name?.replace(".css.ts", "") ?? "";
      },
    },
    {
      dir: "./dist/cjs",
      format: "cjs",
      preserveModules: true,
      assetFileNames({ name }) {
        return name?.replace(".css.ts", "") ?? "";
      },
    },
  ],
};

export default config;
