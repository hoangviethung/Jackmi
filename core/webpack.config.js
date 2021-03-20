/* webpack.config.js */
const path = require('path');
const tasks = require('./webpack.task');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
	return {
		context: path.resolve(__dirname, '../src'),
		entry: ['./scripts/app.js', './styles/main.scss'],
		output: {
			path: path.resolve(__dirname, '../_dist'),
			filename: './scripts/[name].min.js',
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
							plugins: [
								'@babel/plugin-proposal-class-properties',
							],
						},
					},
				},
				{
					test: /\.pug$/,
					use: ['pug-loader'],
				},
				{
					test: /\.(sa|sc)ss$$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								plugins: [
									require('postcss-cssnext')({
										cascade: false,
									}),
								],
							},
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							},
						},
					],
				},
				{
					test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
					loader: 'url-loader',
					options: {
						limit: 5000,
						name: 'resources/images/[name].[ext]',
						publicPath: '../',
					},
				},
				{
					test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
					loader: 'url-loader',
					options: {
						limit: 5000,
						name: 'resources/fonts/[name].[ext]',
						publicPath: '../',
					},
				},
				{
					test: /\.(mp4)(\?.*)?$/,
					loader: 'url-loader',
					options: {
						limit: 20000,
						name: 'resources/videos/[name].[ext]',
					},
				},
				{
					test: /\.(json)(\?.*)?$/,
					loader: 'url-loader',
					options: {
						limit: 1000,
						name: 'api/[name].[ext]',
					},
				},
			],
		},
		plugins: [
			tasks.vendor(),
			...tasks.copy(argv.mode),
			...tasks.pages(env.NODE_ENV),
			new MiniCssExtractPlugin({
				filename: './styles/[name].min.css',
			}),
			new webpack.ProvidePlugin({
				PIXI: 'pixi.js',
			}),
		],
		devServer: {
			port: 3000,
			contentBase: path.join(__dirname, '../_dist'),
			compress: true,
		},
	};
};
