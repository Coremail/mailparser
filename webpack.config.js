/* global require, module */

const path = require('path');

module.exports = {
    entry: './lib/index.js',
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    node: {
        fs: 'empty'
    },
    module: {
        rules: [
            {
                /** babel */
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', {
                                modules: false
                            }]
                        ]
                    }
                }
            }
        ]
    }
};
