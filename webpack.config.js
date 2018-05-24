const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader'},
			{test: /\.css$/, use: ['style-loader', 'css-loader']},
			{test: /\.(jpg|gif|png|webp|ico)$/, use: 'url-loader'}, // 图片只需要这一个loader即可
			{test: /\.(ttf|eot)$/, use: 'file-loader'},
			{test: /\.html$/, use: 'html-loader'},// 处理HTML中的图片引用
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			favicon: './src/pelli.ico',
			title: 'webpack极简配置'
		}),
		new webpack.HotModuleReplacementPlugin(), // 开启服务器热加载，更新源代码会自动刷新浏览器
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		host: 'localhost',
		port: 3333,
		hot: true
	}
};