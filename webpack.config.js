const jsLoaders = [
  "react-hot",
  "babel?optional[]=runtime&stage=1&cacheDirectory=true",
];

module.exports = {
  devtool: "source-map", // http://webpack.github.io/docs/configuration.html#devtool

  entry: {
    "app": "./src",
  },

  node: {
    __filename: true,
    fs: "empty",
  },

  output: {
    path: "./dist",
    filename: "[name].js",
    publicPath: "/",
  },

  resolve: {
    extensions: ["", ".js", ".jsx", ".css"],
    modulesDirectories: ["node_modules", "lib"],
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: jsLoaders,
      },
      {
        test: /.html$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  },
};
