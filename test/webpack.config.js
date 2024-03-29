
module.exports = {
	mode: 'development',
	entry: './input.js',
	output: {
		path: __dirname,
		filename: './output.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
					{
						loader: 'eslint-loader',
						options: {
							rules: {
								semi: 2
							}
						}
					}
				]
			}
		]
	}
};

