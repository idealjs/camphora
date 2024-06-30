const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const createMDXPlugin = require("@next/mdx");
const { version } = require("./package.json");

const withMDX = createMDXPlugin();
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  publicRuntimeConfig: {
    version,
  },
};

module.exports = withVanillaExtract(withMDX(nextConfig));
