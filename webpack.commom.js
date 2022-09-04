const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require("webpack");
// 通用Style Loader
const commonCssLoader = [
	MiniCssExtractPlugin.loader,
	'css-loader',
	'postcss-loader',
];
module.exports = {
	entry: {
		index: resolve(__dirname, "src", "index.js")
	},
	output: {
		filename: 'main.js',
		path: resolve(__dirname, 'build'),
		clean: true
	},
	module: {
		rules: [
			// 使用资源模块处理字体
			{
				test: /.(eot|svg|ttf|woff|woff2)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name].[hash:5][ext]'
				}
			},
			//处理CSS
			{
				test: /\.(css)$/i,
				use: commonCssLoader
			},
			// 资源模块处理图片
			{
				test: /.(png|jpe?g|gif)$/i,
				type: "asset",
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024 // 8kb
					}
				},
				generator: {
					filename: 'images/[name].[hash:5][ext]'
				}
			},
			//      // 打包html中的图片
			{
				test: /\.html$/,
				loader: 'html-withimg-loader',
				options: {
					minimize: false,
					esModule: false,
				}
			},
			// 编译JS
			{
				test: /\.m?js$/,
				include: resolve(__dirname, "../src"),
				use: {
					loader: "babel-loader",
					options: {
						cacheDirectory: true,
						cacheCompression: false,
						plugins: ["@babel/plugin-transform-runtime"], // 减少代码体积
					},
				},
			},
		]
	},
	plugins: [
		// 打包前 清理输出目录
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			favicon: resolve(__dirname, "src/static/img", "favicon.ico"),
			template: resolve(__dirname, "src", "index.html"),
			meta: {
				keywords: 'tmlaes'
			},
			// 压缩html页面 开发环境不需要
			minify: {
				collapseWhitespace: true,
				keepClosingSlash: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true,
				minifyCSS: true
			}
		}),
		// 提取CSS到单独的CSS文件
		new MiniCssExtractPlugin({
			filename: "static/css/[name].[hash:5].css",
		}),
		new webpack.DefinePlugin({
			__VUE_OPTIONS_API__: true,
			__VUE_PROD_DEVTOOLS__: false,
		}),
	],
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.esm-bundler.js'
		},
	}
}
