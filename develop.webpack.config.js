const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

// Configure environment variables
const dotenv = require("dotenv").config({ path: __dirname + "/.env" });

/**
 * The main responsibility for the develop config will be to run local development server
 * We'll use debuggable configuration such as including source-maps
 */
module.exports = {
  mode: "development",
  devtool: "source-map", // Debugging sourcemaps for webpack
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader" // JS files to be processed by the source map loader
      }
    ]
  },
  entry: {
    app: "./src/index.tsx"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CopyPlugin([{ from: "public" }]), // Copy the root public folder into dist
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.parsed)
    })
  ]
};
