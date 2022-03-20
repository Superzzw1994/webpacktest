const commonConfig = require('./webpack.common')
const {merge} = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const productionConfig = {
  mode: 'production',
  // 生产环境取消生成source-map，不暴露源码
  optimization: {
    minimize: true,
    // 压缩代码
    minimizer: [
      // 使用Terser对打包生成的js进行压缩
      new TerserPlugin({
        extractComments: false
      }),
      // 对打包生成的css进行压缩
      new CssMinimizerPlugin()
    ],
    // 对代码进行分割
    splitChunks: {
      cacheGroups: { // 配置提取模块的方案
        default: false,
        styles: {
          name: 'styles',
          test: /\.(s?css|less|sass)$/,
          chunks: 'all',
          enforce: true,
          priority: 10,
        },
        // common公共模块, 比如一个组件List.jsx被其他组件引用了多次，那么List.js就是一个Common chunk，将会被打包进common.js这个bundle里
        common: {
          name: 'common',
          chunks: 'all', // 将所有的入口文件(比如react的路由对应的component)和需要异步加载的文件都打包到common bundle里面
          minChunks: 2, // 当一个文件(对react工程来说就是组件)被复用的次数大于等于2时，就将它放入bundle中
          maxInitialRequests: 5,
          minSize: 0,
          priority: 1, // 优先级，common的优先级要小于vendors(react一定会被所有组件都引入，但react属于vendors，只需要打包一次即可，不需要作为复用的文件进行打包)
          enforce: true,
          reuseExistingChunk: true,
        },
        vendors: {
          // vendors广义上指工程里用到的依赖，将这些依赖打包到一起。
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 2,
          enforce: true,
          reuseExistingChunk: true,
        },
        // ... 根据不同项目再细化拆分内容
      },
    },
  },
}

module.exports = merge(commonConfig, productionConfig)
