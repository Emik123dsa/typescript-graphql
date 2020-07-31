const path = require("path");

const nodeExternals = require("webpack-node-externals");

const webpack = require("webpack");

module.exports = require("./webpack.config.js")({
  mode: "development",
  target: "node",
  entry: {
    main: ["babel-polyfill", "./src/index.ts"],
  },
  externals: [nodeExternals()],
  output: {
    path: path.resolve("build"),
    filename: "[name].dev.js",
    library: "app",
    libraryTarget: "commonjs2",
    publicPath: "/",
  },
  devtool: "eval-source-map",
  performance: {
    hints: false,
  },
});
