const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          'postcss-loader'
        ],
        include: /\.module\.css$/
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
      fallback: {
        util: require.resolve("util/"),
        buffer: false,
        assert: false,
      }
  },
  plugins: [
    new webpack.IgnorePlugin(/^pg-native$/),
    new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ })
  ],
};

module.exports = config;