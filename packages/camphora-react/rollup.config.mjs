import esbuild from "rollup-plugin-esbuild";
import { visualizer } from "rollup-plugin-visualizer";

const config = {
  input: ["./src/index.ts"],
  plugins: [
    esbuild(),
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
    },
    {
      dir: "./dist/cjs",
      format: "cjs",
      preserveModules: true,
    },
  ],
};

export default config;
