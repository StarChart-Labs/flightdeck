const webpack = require('webpack');

module.exports = {
    entry: {
        flightdeck: [ 
            './src/button',
            './src/modal'
        ]
    },
    output: {
        filename: '[name].js',
        path: __dirname
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
