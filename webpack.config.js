require("@babel/polyfill");
require("@babel/plugin-syntax-class-properties");

const webpack = require("webpack");

const path = require("path");

const ProgressBarPlugin = require("progress-bar-webpack-plugin");

const plugins = [
  new ProgressBarPlugin(),

  new webpack.ProvidePlugin({
    fetch: "exports-loader?self.fetch!whatwg-fetch",
  }),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),
  new webpack.NamedModulesPlugin(),
];

module.exports = (options) => ({
  mode: options.mode,
  entry: options.entry,
  output: Object.assign(
    {
      path: path.resolve(process.cwd(), "build"),
      publicPath: "/",
    },
    options.output
  ),
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
    modules: ["node_modules"],
  },
  plugins: options.plugins ? options.plugins.concat(plugins) : plugins,
  target: options.target,
  performance: options.performance || {},
});
