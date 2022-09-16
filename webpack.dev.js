const { resolve } = require('path');
const { merge } = require('webpack-merge');
const commom = require('./webpack.commom.js')
const devWebpack = merge(commom, {
  mode: "development",
  devServer: {
	historyApiFallback: true,
    static: {
    	directory: resolve(__dirname, './')
    },
    port: 8080,  // 配置端口
    open: true, // 配置是否自动打开浏览器
    compress: true,
    liveReload: true, //热更新
    //配置代理 解决跨域
    proxy: {
      "/api": {
        target: "http://localhost:8081",
        changeOrigin: true,
        // ws: true,
        // secure: false,
        pathRewrite: {
          "^/api": "",
        },
      },
    }
  },
  target: 'web', //热更新
  devtool: 'inline-source-map',
})
// 最后通过 module.exports 导出
module.exports = devWebpack
