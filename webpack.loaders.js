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
};

module.exports.Loaders = Loaders;