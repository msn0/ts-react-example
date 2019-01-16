const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'index.bundle.js',
        libraryTarget: 'var',
        publicPath: ''
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
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', { modules: false }],
                                '@babel/preset-react'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.pcss$/,
                use: [
                    ExtractCssChunks.loader,
                    {
                        loader: 'css-modules-typescript-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('postcss-import-sync2'),
                                require('postcss-at-rules-variables'),
                                require('postcss-mixins'),
                                require('postcss-modular-scale-plus'),
                                require('postcss-simple-vars'),
                                require('postcss-custom-properties'),
                                require('postcss-remove-null'),
                                require('postcss-nested'),
                                require('postcss-calc'),
                                require('postcss-custom-media')
                            ]
                        }
                    }
                    // {
                    //     // loader: 'css-modules-typescript-loader',
                    //     // loader: 'typed-css-modules-loader',
                    //     // loader: 'typings-for-css-modules-loader',
                    //     // loader: 'css-loader',
                    //     options: {
                    //         modules: true,
                    //         camelCase: true
                    //         // namedExport: true
                    //         // exportOnlyLocals: true
                    //     }
                    // }
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