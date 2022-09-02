const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
	mode: "production",
	entry: {
		index: path.resolve(__dirname, "src", "index.js")
	},
	output: {
		path: path.resolve(__dirname, "build")
	},
	plugins: [
		// 清除dist文件夹
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			favicon:"./src/static/img/favicon.ico",
			template: path.resolve(__dirname, "src", "index.html")
		}),
		new webpack.ProvidePlugin({
			// process: 'process/browser',
			Buffer: ['buffer', 'Buffer']
		})
	],
	devServer: {
		hot: true,
		port: 8080,
		static: {
			directory: path.join(__dirname, "/src/static")
		},
		
		proxy:{
			/**
			 * target : 表示的是代理到的目标地址
　　			 * pathRewrite: 默认情况下，我们的 /api-hy 也会被写到 RUL 中，如果希望删除，可以使用 pathRewrite 
　　			 * secure ：默认情况下不接受转发到 https 的服务器上的，如果希望支持，可以设置为 false
　　			 * changeOrigin: 它是表示是否更新代理后请求的 headers 中的 host 地址
			 */
			'/api':{
			    target:'http://localhost:8081',
			    pathRewrite:{'/api':''},
				secure:false,
				changeOrigin:true
			}
		}
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ["style-loader", "css-loader"],
			exclude: /node_modules/
		}]
	},
	resolve: {
		
	}
}
