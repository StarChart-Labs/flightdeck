const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: './src/index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'flightdeck.js',
        library: 'flightdeck',
        libraryTarget: 'amd'
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
