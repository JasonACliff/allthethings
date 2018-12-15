const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [{
	
	entry : './src/index.js',
	output : {
		filename : 'bundle.js',
		path : path.resolve(__dirname, 'dist')
	},
	
	module: {
		rules: [
			
			{
				test: /\.js$/,
				exclude: ['/node_modules/', /style/],
				use: {
					loader: "babel-loader"
				}
			}
			
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title   : 'Custom template',
			styleSheet : 'style/styles.css',
			// Load a custom template (lodash by default)
			template: 'src/html/index.html'
		})
	]
},
{
	entry : './src/style/main.css',
	optimization: {
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					minChunks: 1,
					reuseExistingChunk: true,
					enforce: true,
				}
			}
		}
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "style/[name].css"
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude:['/js/'],
				use: [
					{loader: MiniCssExtractPlugin.loader},
					"css-loader"
				],
				
			},
			{
				test:/\.(png|svg|jpg)$/,
				use: [{
					loader:'file-loader',
					options:{
						name: '[name].[ext]',
						outputPath: 'images/'
					}
				}]
			}
		]
	}
}];