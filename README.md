# admin-milier
antd + react 后台管理

> 部分前端设计效果均是参照可爱的设计小姐姐和小哥哥们的风格，仅个人学习使用哦

###### 启动：yarn run dev
###### 安装：yarn
###### 访问：http://localhost:5201/

 - 非常感谢提供的音乐接口（仅供学习使用，如有侵权请联系）
 - https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi

###### 体验音乐功能需
    - 下载：git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git
    - 运行: node app.js

### topbar
> 获取网易云音乐中设置的用户名和用户头像
> 换肤(默认夜间配色， 支持svg配色哦)
> 瀑布流图片（支持音乐播放，下一首，上一首，喜欢未实现）
> 消息通知（未）
> 登录，退出

### leftbar
- 首页
![image](https://github.com/huiBuiling/admin-milier/blob/master/result_img/1.png)
- 介绍
- 图表：气泡图，饼状图，雷达图（线性图，柱状图已做封装，见首页），水球图
    - 水球图：yarn add echarts-liquidfill
    
- 记事

    ```
        https://www.npmjs.com/package/localdb
        import LocalDb from "localDb";
        let Notes = new localdb('notes', 'Array', true);
        this.db.add(item);  //只能是对象，感觉和以前不一样了，弃用
    ```

- 地图

- 会议
![image](https://user-images.githubusercontent.com/20200628/98076231-dca3e680-1ea8-11eb-964f-f3cd76c19479.png)

- 物业
![image](https://github.com/huiBuiling/admin-milier/blob/master/result_img/3.png)

- 仿网易云音乐   
![image](https://github.com/huiBuiling/admin-milier/blob/master/result_img/4.png)

- 拖曳
    - [x] github:https://github.com/bevacqua/dragula
    - [x] npm install dragula --save
    - [x] 使用时拖动会复制出对应的 ，记得列表添加类名控制样式

- 动画
    ```
    yarn add animate.css --dev
    https://daneden.github.io/animate.css/
    https://github.com/daneden/animate.css
    ```

- svg皮肤背景色
    ```
    https://github.com/qrohlf/trianglify
    
    const canvas = Trianglify({
                width: 1920,
                height: 1080,
                cell_size: Math.random()*200 + 40,
                x_colors: 'random',
                variance: Math.random(),
            }).canvas();
    ```

- snap.svg
    ```
    https://www.npmjs.com/package/snapsvg
    yarn add snapsvg --dev
    
    官网：
    
    引入：import Snap from 'snapsvg';
    报错：Uncaught TypeError: Cannot read property 'on' of undefined
    解决：
        yarn add imports-loader
        1. 如此引用import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js'
        2. 或修改webpack配置
            module: {
                    rules: [
                        {
                            test: require.resolve('snapsvg'),
                            use: 'imports-loader?this=>window,fix=>module.exports=0',
                        }
                    ]
            }
    
    使用：
         var s = Snap("#svg");
         var bigCircle = s.circle(150, 150, 100);
    ```

- Elastic Progress
    ```
    
    ```

- TweenMax
    ```
    官网：http://greensock.com/
    Github:https://github.com/greensock/GreenSock-JS/
    
    yarn add gsap --dev
    
    引入：
    import { TweenMax } from "gsap/TweenMax";
    ```
