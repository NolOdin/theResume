const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
	mode: "development",
	entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"

},
module: {
    rules: [
      {
        test: /\.jsx|js?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test : /\.(png|jp(e*)g|svg)$/,
        use : [{
          loader : 'url-loader',
          options : {
            limit : 8000,
            name : 'images/[hash]-[name].[ext]'
          }
        }]
      },
      {
        test : /\.(png|jp(e*)g|svg)$/,
        use : {
          loader: "file-loader",
          options: {
            name: "images/[name].[hash].[ext]"
          }
        }
       },
    ]
  }
};