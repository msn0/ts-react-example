const path = require('path');
const { Loaders } = require('./webpack.loaders');

module.exports = {
    webpack: {
        loaders: [
            {
                test: /\.js$/,
                include: [ path.resolve(__dirname, 'src/') ],
                use: [ Loaders.babel ]
            },
            {
                test: /\.tsx?$/,
                include: [ path.resolve(__dirname, 'src/') ],
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
