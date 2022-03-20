/**
 * @name: babel.config.js
 * @author: evil
 * @date: 2022-03-20 17:55
 * @description：babel.config.js
 * @update: 2022-03-20 17:55
 */
const env = process.env.NODE_ENV
module.exports = {
  presets: [
    ["@babel/preset-env", {
      modules: false, // 开启tree-shaking
      useBuiltIns: 'entry',
      corejs: 3
    }],
    ["@babel/preset-react"],
    ["@babel/preset-typescript"]
  ],
  plugins: [env === 'development' && require.resolve('react-refresh/babel')].filter(Boolean)
}
