const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

/**
 * The main responsibility for the production config will be to create production bundles ready for distribution
 * Seperating the configuration allows differences from the development environment
 * For example we can use different modes or load React from a CDN rather than bundling it with the app
 */
module.exports = {
  mode: "production",
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
  plugins: [new CopyPlugin([{ from: "public" }])] // Copy the root public folder into dist
};
