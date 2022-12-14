const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {

    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader',
                        options: { 
                            minimize: false,
                            sources: false
                         }
                    }
                ]
            },
            {
                test: /\.css$/i,
                exclude: /styles.css/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /styles.css/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [

        new HtmlWebPackPlugin({
            title: 'My Webpack App',
            template: './src/index.html',
            // filename: './index.html'
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),

        new CopyPlugin({
            patterns: [
                {from: 'src/assets/', to: 'assets/'}
            ]
        })
    ]
}