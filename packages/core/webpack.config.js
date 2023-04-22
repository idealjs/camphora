import path from "path";
import { fileURLToPath } from "url";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @return {import('webpack').Configuration} */
const config = (env) => ({
  experiments: {
    outputModule: true,
  },
  mode: env.production ? "production" : "development",
  entry: "./index.ts",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {},
    plugins: [],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    library: {
      type: "module",
    },
    filename: "index.js",
  },
  externals: [],
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: env.production ? "disabled" : "static",
      openAnalyzer: false,
      reportFilename: "analyzer.html",
    }),
  ],
});

export default config;
