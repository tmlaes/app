const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { merge } = require('webpack-merge');
const common = require('./webpack.commom.js')
const prodWebpack = merge(common, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: true,
      }),
    ]
  },
})
// 最后通过 module.exports 导出
module.exports = prodWebpack