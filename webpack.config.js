const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const { Loaders } = require('./webpack.loaders');

module.exports = {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'app.bundle.js',
        libraryTarget: 'var',
        publicPath: ''
    },
    target: 'web',
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [ Loaders.babel ]
            },
            {
                test: /\.tsx?$/,
                use: [ Loaders.typescript ]
            },
            {
                test: /\.pcss$/,
                use: [
                    ExtractCssChunks.loader,
                    Loaders.cssTypescript,
                    Loaders.cssModules,
                    Loaders.postcss
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ExtractCssChunks({
            filename: `app.bundle.css`,
            chunkFilename: '[id].css'
        })
    ]
}