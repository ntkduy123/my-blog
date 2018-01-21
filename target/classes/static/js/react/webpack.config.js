const path = require('path');
const webpack = require('webpack');

const BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    cache: true,
    devtool: 'sourcemap',
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new BowerWebpackPlugin({
            searchResolveModulesDirectories: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.(png|jpg|gif)$/, loader: "file-loader?name=/public/images/[name].[ext]" },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=/public/fonts/[name].[ext]"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=/public/fonts/[name].[ext]"
            },
        ]
    }
};