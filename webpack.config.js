const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const Loaders = {
    babel: {
        loader: 'babel-loader',
        options: {
            presets: [
                ['@babel/preset-env', { modules: false }],
                '@babel/preset-react'
            ]
        }
    },
    typescript: {
        loader: 'awesome-typescript-loader'
    },
    cssExtract: ExtractCssChunks.loader,
    cssTypescript: {
        loader: 'css-modules-typescript-loader'
    },
    cssModules: {
        loader: 'css-loader',
        options: {
            modules: true
        }
    },
    postcss: {
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
}

module.exports.Loaders = Loaders;

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
                    Loaders.cssExtract,
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