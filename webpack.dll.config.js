const webpack = require('webpack');
const path = require('path');

//判断开发 | 生产
const nodeEnv  = process.env.NODE_ENV || 'development';
const isDev = nodeEnv  === 'development';
console.log(nodeEnv + '---' + isDev)

const vendors = [
    'react',
    'react-dom',
    'react-router',
    'react-router-dom',
    'redux',
    'react-redux',
    'redux-thunk',
    'antd',
    'classnames',
    // 'echarts',
    // 'echarts-for-react',
    // 'echarts-liquidfill',
    'gsap',
    // 'snapsvg',
    'dragula',

    // ...其它库
];

module.exports = {
    // context:path.resolve(__dirname, 'src'),
    output: {
        path:path.join(__dirname, isDev ? 'public/dll' : 'dist/dll'),
        filename: 'dll.js',
        library: 'dll'
    },
    entry: {
        dll: vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            context:__dirname,
            path: path.join(__dirname, isDev ? 'public/dll/manifest.json' : 'dist/dll/manifest.json'),
            name: 'dll'
        })
    ],
};
