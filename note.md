# admin-milier
## antd + react 后台管理

- dll 引入
```
    new HtmlWebpackPlugin({
            title: isDev ? 'public' : 'dist',
    }

    <script type="text/javascript" src="<%=htmlWebpackPlugin.options.base.href %>"></script>
```

- 图片压缩
```
    npm install --save-dev image-webpack-loader
    注意使用yarn会卡死，建议使用cnpm

    {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000,
              name: utils.assetsPath("img/[name].[hash:5].[ext]")
            }
          },
          {
            loader: 'image-webpack-loader', // 压缩图片
            options: {
                bypassOnDebug: true,
            }
          }
        ]
    },
```