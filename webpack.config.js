const path = require("path");

module.exports = {
  // mode
  mode: "development",

  // entry
  entry: "./js/main.js",

  // output
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "."),
    },
    port: 8080,
    open: true,
  },

  // watch
  watch: true,
  // devtool
  devtool: "source-map",
  // module
  module: {},
};
