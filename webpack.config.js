const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./assets/JS/script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  mode: "development"
};
