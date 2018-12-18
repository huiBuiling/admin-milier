const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//判断开发 | 生产
let WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
const isLocal = WEBPACK_ENV === 'dev';

const comPlugInCss = new ExtractTextPlugin('css/comPlugInCss.css'); //插件css
const styleCss = new ExtractTextPlugin('css/style.css'); //插件css

module.exports = {
    context:path.resolve(__dirname, 'src'),
    devtool: isLocal ? 'cheap-module-source-map' : 'none',  //设置本地源代码
    entry: './index.js',  //入口
    output: {   //输出
        path: path.join(__dirname, 'dist'),
        publicPath: isLocal ? '/dist/' : '/dist/',
        filename: 'js/bundle.js',
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
            },
            {
                test: /\.css$/,  //antd,animate css文件处理
                include: /node_modules/,
                use: comPlugInCss.extract({
                    fallback: "style-loader",   //让打包后的css可以写入html文件中的<style>
                    use: "css-loader"           //webpack把index.js 引入的css文件作为模块打包
                })
            },
            {
                test: /\.less$/,  //less文件处理
                use: styleCss.extract({
                    fallback: "style-loader",
                    use: ['css-loader','less-loader']
                })
            },
            {
                test: /\.(png|jpg|gif)$/,  //图片的配置
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,  // 字体图标的配置
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'font/[name].[ext]'
                        }
                    }
                ]
            },
            /*{
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: ['url-loader?limit=10000&name=assets/images/[md5:hash:base64:10].[ext]']
            },*/
            {
                //snap.svg
                // test: require.resolve('snapsvg'),
                test: require.resolve('snapsvg/dist/snap.svg.js'),
                use: 'imports-loader?this=>window,fix=>module.exports=0',
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './src')
        ],
        // alias是配置全局的路径入口名称，只要涉及到下面配置的文件路径，可以直接用定义的单个字母表示整个路径
        alias: {
            snapsvg: 'snapsvg/dist/snap.svg.js',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        // new ExtractTextPlugin('./[name].css'),  //独立css
        comPlugInCss,
        styleCss,

        new webpack.DllReferencePlugin({
            context:__dirname,
            manifest: require('./dist/dll/manifest.json'),
            name: 'dll'
        }),
    ],
    devServer: {
        port:'5201',
        // contentBase: path.resolve(__dirname, 'dist'),
        // historyApiFallback: true
        historyApiFallback: {
            index: 'src/index.html'
        }
    },
};