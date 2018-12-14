const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
	}
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
			filename: "bundle.css"
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
					options:{}
				}]
			}
		]
	}
}];