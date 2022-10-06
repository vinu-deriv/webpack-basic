const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: "./src/index.js",
    invokeGreetHello: "./src/invoke-greet-hello.js",
  },
  output: {
    filename: "[name][contenthash].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader,'css-loader'] },
      {
        test: /\.(svg|png|jpg|gif|ico)$/,
        type: 'asset/resource',
        generator: {
            filename: 'images/[name].[hash][ext]'
          }
    }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'main.css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: 'index.html'
    })
  ]
};
