var path = require('path')
//const { webpack } = require('webpack')
const webpack = require('webpack')
module.exports = {
    entry: ["@babel/polyfill", path.resolve(__dirname, './src/main.js')],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.js',
    },
    devServer: {
        static: './public',
        //contentBase: path.resolve(__dirname, './public'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
        }),
    ],
}