const path = require("path");
const webpack = require("webpack");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
	entry: "./src/index.ts",
	mode: "development",
	devServer: {
		watchFiles: ["src/**/*"],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(sa|sc|c)ss$/i,
				use: [
					{
						loader: "file-loader",
						options: { outputPath: "../", name: "[name].css" },
					},
					"postcss-loader",
					"sass-loader",
				],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	plugins: [
		new BrowserSyncPlugin(
			{
				host: "localhost",
				port: 3000,
				proxy: "http://localhost:3100/", // REPLACE with whatever your loca
				files: ["**/**.css"],
				open: false,
			},
			{
				reload: false,
			}
		),
		new webpack.HotModuleReplacementPlugin(),
	],
	output: {
		filename: "scripts/script.js",
		path: path.resolve(__dirname, "assets"),
		clean: true,
	},
};
