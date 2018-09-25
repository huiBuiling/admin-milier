const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',  //入口
    output: {   //输出
        path: path.resolve(__dirname, '/dist'),
        publicPath:'/',
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, //js文件处理
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react','es2015','stage-0'],
                        plugins: ["transform-decorators-legacy"]
                    }
                }
            },{
                test: /\.css$/,  //css文件处理
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            /*{
                test: /\.scss$/, //sass文件处理
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader','sass-loader']
                })
            },*/
            {
                test: /\.less$/,  //less文件处理
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader','less-loader']
                })
            },{
                test: /\.(png|jpg|gif)$/,  //图片的配置
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            },{
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,  // 字体图标的配置
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'font/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // new ExtractTextPlugin('./[name].css'),  //独立css
        new ExtractTextPlugin('assert/style.css'),
    ],
    devServer: {
        port:'5201',
        // contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true
    },
};