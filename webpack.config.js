const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  // mode: 'production',

  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: outputPath,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  // importで拡張子を省略できる
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    contentBase: outputPath,
  },
};
