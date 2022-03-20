const path = require('path')
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {DefinePlugin} = require('webpack');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const commonConfig = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash:8].js'
  },
  module: {
    rules: [
      // webpack5内置了资源加载loader，可以不使用url-loader
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
        generator: {
          // 输出文件位置以及文件名
          filename: "public/assets/[name].[hash:8][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 小于10kb inline，否则resource
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        generator: {
          // 输出文件位置以及文件名
          filename: "public/assets/[name].[hash:8][ext]" // 可以将项目内用到的资源自动打包到 (public/assets) 文件夹下，便于统一处理
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 超过100kb不转 base64
          }
        }
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        // use 为 使用的loader数组，执行顺序为逆时针(从右->左或从下->上)
        use: [
          MiniCssExtractPlugin.loader, // 这个插件可以将css代码抽离成文件插入到html中，style-loader可以将css代码通过<style>标签插入head中(css in js就是采用的这种方案)
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1 // 这个配置指的是在执行该loader之前有几个loader会执行(比如css-loader在一个长度为2的use数组里的index为1，那么css-loader的importLoaders的值为 (use[].length - 1) - (1))
            }
          }, {
            loader: "postcss-loader"
          },]
      },
      {
        test: /\.(scss|sass)$/i, // scss/less文件需要单独配置 rule
        exclude: /node_modules/,
        // use 为 使用的loader数组，执行顺序为逆时针(从右->左或从下->上)
        use: [
          MiniCssExtractPlugin.loader, // 这个插件可以将css代码抽离成文件插入到html中，style-loader可以将css代码通过<style>标签插入head中(css in js就是采用的这种方案)
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          }, {
            loader: "postcss-loader",
          }, {
            loader: "sass-loader"
          }]
      },
      {
        test: /\.(js?x|ts?x)$/i,
        exclude: /node_modules/,
        // 对js文件进行babel转译
        use: [{
          loader: 'babel-loader', options: {
            cacheDirectory: true // 启用缓存
          }
        }]
      }
    ],
  },
  plugins: [
    new DefinePlugin({
      BASE_URL: '"./"'
    }),
    new CleanWebpackPlugin(), // 在打包前清理掉上一次生成的打包文件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html') // 将打包生成的资源注入到这个路径下的html文件里
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css' //输出打包好的css文件
    })
  ],
  cache: {
    type: 'filesystem', // webpack5新特性，开启缓存，提高打包性能
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // 这些后缀的文件在引入的时候可以不写后缀名，比如 import App from './App.jsx' => import App from './App
    // 配置别名
    alias: {
      '@src': resolve('src'),
      '@components': resolve('src/components'),
    }
  }
}

module.exports = commonConfig
