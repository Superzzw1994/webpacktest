const commonConfig = require('./webpack.common')
const {merge} = require('webpack-merge')
const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const devConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map', // 开发环境source-map要定位到行，并且抛出源码
  devServer: {
    hot: true,
    static: {
      directory: path.resolve(__dirname, '../public'), // 该配置要指向项目的静态资源，例如public文件夹，直接读取资源，可以减少开发模式的打包时间，增加开发效率。
    },
    compress: true,
    port: 8000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin()
  ]
}

module.exports = merge(commonConfig, devConfig)
