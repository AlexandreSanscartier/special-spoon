const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        filename: "bundle.js",
        publicPath: '/',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".js"],
        modules: [
            path.resolve(`${__dirname}/src`),
            path.resolve(`${__dirname}/node_modules`),
          ],
    },
    module: {
        rules: [
            {
                test: /\.ts$/, 
                loader: "ts-loader",
                exclude: /node_modules/,
            }   
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './index.html' 
        })
    ]
}
