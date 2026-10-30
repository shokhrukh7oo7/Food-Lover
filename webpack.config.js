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

  // watch
  watch: true,
  // devtool
  devtool: "source-map",
  // module
  module: {},
};
