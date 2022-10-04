const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const env = require('./env')

module.exports = {
  entry: './src/main/index.tsx',
  output: {
    path: env.paths.output,
    filename: 'main-bundle-[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext]'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader',
        exclude: env.paths.modules
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack'
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@presentation': path.resolve(__dirname, 'src/presentation'),
      '@main': path.resolve(__dirname, 'src/main')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new FaviconsWebpackPlugin({
      logo: path.resolve(env.paths.public, 'favicon.svg')
    }),
    new Dotenv()
  ]
}
