const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

// Configure environment variables
const dotenv = require("dotenv").config({ path: __dirname + "/.env" });

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
      },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  entry: {
    app: "./src/index.tsx"
  },
  output: {
    publicPath: "/",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new CopyPlugin([{ from: "public" }]), // Copy the root public folder into dist
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.parsed)
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
