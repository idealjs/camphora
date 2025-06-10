import {
  compile,
  cssFileFilter,
  getSourceFromVirtualCssFile,
  processVanillaFile,
  virtualCssFileFilter,
} from "@vanilla-extract/integration";
import esbuild from "rollup-plugin-esbuild";
import styles from "rollup-plugin-styles";
import { visualizer } from "rollup-plugin-visualizer";

function renamePlugin() {
  return {
    name: "rename-css-js",
    generateBundle(options, bundle) {
      Object.entries(bundle).forEach(([key, value]) => {
        if (key.endsWith(".css.js")) {
          const newKey = key.replace(".css.js", ".js");
          bundle[newKey] = value;
          delete bundle[key];
          value.fileName = newKey;
        }
      });
    },
  };
}

const config = {
  input: ["./src/index.ts", "./src/themes/index.ts", "./src/utils/index.ts"],
  plugins: [
    esbuild(),
    vanillaExtractPlugin(),
    styles({
      mode: "extract",
    }),
    renamePlugin(),
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
        return name?.replace(".css.css", ".css") ?? "";
      },
    },
    {
      dir: "./dist/cjs",
      format: "cjs",
      preserveModules: true,
      assetFileNames({ name }) {
        return name?.replace(".css.css", ".css") ?? "";
      },
    },
  ],
};

export default config;

export function vanillaExtractPlugin({
  identifiers,
  cwd = process.cwd(),
  esbuildOptions,
} = {}) {
  const isProduction = process.env.NODE_ENV === "production";
  const customVirtualCssFilter = /\.vanilla\.css$/;

  return {
    name: "vanilla-extract",
    // Transform .css.js to .js
    async transform(_code, id) {
      if (!cssFileFilter.test(id)) {
        return null;
      }

      const index = id.indexOf("?");
      const filePath = index === -1 ? id : id.substring(0, index);

      const identOption = identifiers ?? (isProduction ? "short" : "debug");

      const { source, watchFiles } = await compile({
        filePath,
        cwd,
        esbuildOptions,
        identOption,
      });

      for (const file of watchFiles) {
        this.addWatchFile(file);
      }

      const output = await processVanillaFile({
        source,
        filePath,
        identOption,
      });

      return {
        code: output,
        map: { mappings: "" },
      };
    },
    // Resolve .css to external module
    async resolveId(id) {
      if (!virtualCssFileFilter.test(id)) {
        return null;
      }
      const { fileName, source } = await getSourceFromVirtualCssFile(id);

      return {
        id: fileName,
        meta: {
          css: source,
        },
      };
    },
    // 添加 load 钩子
    async load(id) {
      if (customVirtualCssFilter.test(id)) {
        const meta = this.getModuleInfo(id).meta;
        return {
          code: meta.css,
        };
      }
      return null;
    },
  };
}
