const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const { Loaders } = require('./webpack.loaders');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'app.bundle.js',
        libraryTarget: 'var',
        publicPath: 'http://localhost:8081/'
    },
    target: 'web',
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/')
                ],
                use: [Loaders.babel]
            },
            {
                test: /\.tsx?$/,
                use: [Loaders.typescript]
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
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ExtractCssChunks({
            filename: `app.bundle.css`,
            chunkFilename: '[id].css',
            hot: true
        })
    ],
    devServer: {
        port: 8081,
        hot: true,
        compress: true,
        publicPath: `http://localhost:8081/`,
        contentBase: path.resolve(__dirname, `dist`),
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    }
}