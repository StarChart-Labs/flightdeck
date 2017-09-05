const webpack = require('webpack');

module.exports = {
	devtool: 'eval',
    entry: {
        flightdeck: [
            './src/button',
            './src/modal'
        ]
    },
    output: {
        filename: '[name].js',
        path: __dirname,
        library: 'flightdeck'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader', 'eslint-loader']
            }
        ]
    }
};
