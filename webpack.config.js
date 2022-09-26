'use strict';

const path = require('path');

module.exports = {
    entry: './src/js/app',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].bundle.js',
        publicPath: 'pathOrUrlWhenProductionBuild'
    },
    module: {
        rules: [
        ]
    },
    resolve: {
    },
    devtool: 'source-map',
    plugins: [
    ],
    mode: 'production'
};
