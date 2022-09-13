const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');
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
		filename: 'js/[name].[contenthash:5].js',
		chunkFilename: 'js/[name].[contenthash:5].js',
		path: resolve(__dirname, './build'),
		publicPath: "/",
		clean: true
	},
	module: {
		rules: [
			{
			    test: /\.vue$/,
			    use:[
			        'vue-loader'
			    ]
			},
			//处理CSS
			{
				test: /\.(css)$/i,
				use: commonCssLoader
			},
			// 使用资源模块处理字体
			{
				test: /.(eot|svg|ttf|woff|woff2)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name].[contenthash:5][ext]'
				}
			},
			// 资源模块处理图片
			{
				test: /.(png|jpe?g|gif)$/i,
				type: "asset",
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024 // 10kb
					}
				},
				generator: {
					filename: 'images/[name].[contenthash:5][ext]'
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
		new CompressionPlugin({
			 filename: '[path][base].gz', //目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
		     algorithm: 'gzip',//算法
		     test: new RegExp('\\.(js|css)$'),
		     threshold: 10240,//只处理比这个值大的资源。按字节计算
		     minRatio: 0.8//只有压缩率比这个值小的资源才会被处理
		}),
		new HtmlWebpackPlugin({
			// publicPath:"/",
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
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
			chunksSortMode:'auto',
		}),
		// 提取CSS到单独的CSS文件
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:5].css",
		}),
		new webpack.DefinePlugin({
			__VUE_OPTIONS_API__: true,
			__VUE_PROD_DEVTOOLS__: false,
		}),
		new VueLoaderPlugin(),
	],
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.esm-bundler.js'
		},
	}
}
