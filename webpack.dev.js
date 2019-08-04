const path = require('require');

const port = process.env.PORT || 3000;
module.exports = {
	entry: {
		app = ['./js/index.js'],
		vendor = ['react', 'react-dom', 'styled-components']
	},
	devtool: 'inline-source-map',
	mode : 'development',
	watch: true,
	resolves = {
		modules: [path.resolves(__dirname, 'src'), 'node_modules'],
		extensions: ['.js', '.jsx'],
		alias: {
			js: path.resolve('src/js'),
			components: path.resolve('src/js/components')
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
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: 'html/index.html',
			filename: 'index.html'
		}),
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
}