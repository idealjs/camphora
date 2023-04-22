const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const packages = path.join(__dirname, "../packages");

module.exports = {
  webpack: {
    configure: (webpackConfig, { paths }) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];
        match.loader.include = include.concat(packages);
      }

      webpackConfig.plugins.push(
        new NodePolyfillPlugin({ excludeAliases: ["console"] })
      );
      return webpackConfig;
    },
  },
};
