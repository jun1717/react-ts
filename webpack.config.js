module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/index.tsx',

  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: 'main.js',
  },

  devServer: {
    contentBase: `${__dirname}/dist`,
    port: 8080,
    open: true,
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // 拡張子 .ts の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
  resolve: {
    // 拡張子を配列で指定
    extensions: ['.ts', '.tsx', '.js', '.json', 'css'],
  },
};
