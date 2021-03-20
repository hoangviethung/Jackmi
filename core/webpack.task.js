const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanCSS = require('clean-css');
const UglifyJs = require('uglify-js');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

exports.pages = (env) => {
	const pagesFolder = path.resolve(__dirname, `../src/views/pages`);
	return fs.readdirSync(pagesFolder).map((page) => {
		if (page.split('.')[1] === undefined) {
			return false;
		}

		const parts = page.split('.');
		const fileName = parts[0];
		const options = {
			filename: `${fileName}.html`,
			template: `${pagesFolder}/${fileName}.pug`,
			minify: false,
		};

		return new HtmlWebpackPlugin(options);
	});
};

exports.copy = (mode) => {
	return [
		new CopyWebpackPlugin({
			patterns: [
				{
					context: path.resolve(__dirname, '../src'),
					from: 'resources',
					to: 'resources',
				},
			],
		}),
	];
};

exports.vendor = () => {
	const vendor = JSON.parse(fs.readFileSync('_vendors.json'));
	return new MergeIntoSingleFilePlugin({
		files: [
			{
				src: vendor.js,
				dest: (code) => {
					const min = UglifyJs.minify(code);
					return {
						'./scripts/core.min.js': min.code,
					};
				},
			},
			{
				src: vendor.css,
				dest: (code) => ({
					'./styles/core.min.css': new CleanCSS().minify(code).styles,
				}),
			},
		],
	});
};
