const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();
const { version } = require("./package.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    version,
  },
};

module.exports = withVanillaExtract(nextConfig);
