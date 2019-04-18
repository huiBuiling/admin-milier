const webpack = require('webpack');
const path = require('path');

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
        path:path.join(__dirname, 'public/dll'),
        filename: 'dll.js',
        library: 'dll'
    },
    entry: {
        dll: vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            context:__dirname,
            path: path.join(__dirname,'public/dll/manifest.json'),
            name: 'dll'
        })
    ],
};
