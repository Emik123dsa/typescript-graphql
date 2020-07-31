const path = require("path");

const nodeExternals = require("webpack-node-externals");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

module.exports = require("./webpack.config.js")({
  mode: "production",
  target: "node",
  entry: {
    main: ["babel-polyfill", "./src/index.ts"],
  },
  plugins: [
    new TerserPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  externals: [nodeExternals()],
  output: {
    path: path.resolve("build"),
    filename: "[name].js",
    library: "app",
    libraryTarget: "commonjs2",
    publicPath: "/",
  },
});
