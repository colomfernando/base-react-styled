const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
	entry: {
		app: ['./js/index.js'],
		vendor: ['react', 'react-dom', 'styled-components']
	},
	devtool: 'inline-source-map',
	mode: 'development',
	watch: true,
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		extensions: ['.js', '.jsx'],
		alias: {
			js: path.resolve('src/js'),
			components: path.resolve('src/js/components'),
			theme: path.resolve('src/js/theme/index'),
			core: path.resolve('src/js/core')
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all'
				}
			}
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: 'html/index.html',
			filename: 'index.html'
		}),
		new CopyWebpackPlugin([
			{
				from: './assets',
				to: 'assets'
			}
		])
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './build')
	},
	context: path.resolve(__dirname, 'src') || this.rootContext,
	devServer: {
		contentBase: path.join(__dirname, './build'),
		port,
		hot: true,
		historyApiFallback: true
	}
};
