module.exports = {
    webpack: {
        loaders: [
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
                    {
                        loader: 'style-loader'
                    },
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
                ]
            }
        ]
    }
};
