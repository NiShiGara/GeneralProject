const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const resolve = require("resolve");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin()],
    mode: 'production',

};
resolve.fallback = { "buffer": false }

