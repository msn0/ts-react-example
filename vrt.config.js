const { Loaders } = require('./webpack.loaders');

module.exports = {
    webpack: {
        loaders: [
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
                    'style-loader',
                    Loaders.cssTypescript,
                    Loaders.cssModules,
                    Loaders.postcss
                ]
            }
        ]
    }
};
