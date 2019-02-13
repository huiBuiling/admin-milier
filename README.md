# admin-milier
antd + react 后台管理

> 部分前端设计效果均是参照可爱的设计小姐姐和小哥哥们的风格，仅个人学习使用哦

###### 启动：yarn run dev
###### 安装：yarn
###### 访问：http://localhost:5201/

部分效果图：
![image](https://github.com/huiBuiling/admin-milier/blob/master/result_img/1.png)

### topbar
> 获取网易云音乐中设置的用户名和用户头像
> 换肤（目前配色教丑）
> 瀑布流图片（支持音乐播放，下一首，上一首，喜欢未实现）
> 消息通知（未）
> 登录，退出

### leftbar
>首页
>介绍
>图表
>记事
```
    https://www.npmjs.com/package/localdb
    import LocalDb from "localDb";
    let Notes = new localdb('notes', 'Array', true);
    this.db.add(item);  //只能是对象，感觉和以前不一样了，弃用
```

>地图
>会议
>物业
>仿网易云音乐

### 仿网易云音乐（redux版）
```
1.使用redux
     yarn add redux --dev
     yarn add redux-thunk --dev
     yarn add react-redux --dev

     import { Provider } from 'react-redux'
     import { createStore, applyMiddleware, compose } from 'redux';
     import  thunk  from 'redux-thunk'
     import { BrowserRouter,Switch } from 'react-router-dom';
     import reducer from './reducer/reducers'

     const store = createStore(reducer,compose(
         applyMiddleware(thunk),
         window.devToolsExtension ? window.devToolsExtension():f=>f
     ))
     ReactDOM.render(
         <Provider store={store}>
             <BrowserRouter>
                 <Switch>
                     <App />
                 </Switch>
             </BrowserRouter>
         </Provider>
     	, document.getElementById('root')
     );

 2. 思路：
        设置播放列表
        初次播放列表push,当前歌单歌曲列表第一个，
        切换歌单时播放
            是
                保持playerBar不变，设置getOldCurrentItem即获取getState状态值
                歌曲资源从播放列表中获取

        播放列表组成：点击后听过的歌曲 + 点击后当前对应歌单内所有的歌曲列表 (注：已经存在的则不添加)

 3. CloundPlayerList
    player.redux: { getSongsList,getSearchList,getOldCurrentItem }
    搜索: onSearch
    获取歌曲: onChange
    切换歌单:checkPlayer --> 切换歌单时保持playerBar不变，设置getOldCur rentItem即获取getState状态值


 4. PlayerList
    喜欢及移除音乐

 5. PlayerBar
    player.redux： { getCurrentItem }

 6. player.redux
    歌单列表：getSongsList
    搜索：getSearchList
    播放列表：getOldSongList
    当前选中：getCurrentItem
    获取之前的选中：getOldCurrentItem

 7. 部分歌曲点击未播放或播放之前的歌曲：MP3地址url获取失败

 8. 下一首，上一首
    对应 ? 当前歌单列表:播放列表
    标志 ? 列表循环 （默认）
        是->songList (currentIndex)
        否->oldSongList
    切换歌单
        播放歌单列表
            点击下一首和上一首，则设置播放当前歌单第一首
            同时要加入播放列表
            下一首按钮控制对应 list.length
        播放列表
            写一首，上一首，对应歌单列表

    歌曲切换时，没有立即加载到url报错，
    需做初始加载控制
    点击上一首或下一首可能播放歌曲会出现偏差

 9. 调整
    点击歌单
        播放列表不变
            点击单曲，播放列表变为当前歌单对应歌曲
            切换操作（上一首，下一首）
                播放列表对应歌曲所在列表，即播放列表

```
音乐效果图：
![image](https://github.com/huiBuiling/admin-milier/blob/master/result_img/2.png)

> 拖曳
- [x] github:https://github.com/bevacqua/dragula
- [x] npm install dragula --save
- [x] 使用时拖动会复制出对应的 ，记得列表添加类名控制样式
```

```

> 动画
```
yarn add animate.css --dev
https://daneden.github.io/animate.css/
https://github.com/daneden/animate.css
```

> svg皮肤背景色
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

> snap.svg
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

> Elastic Progress
```

```

> TweenMax
```
官网：http://greensock.com/
Github:https://github.com/greensock/GreenSock-JS/

yarn add gsap --dev

引入：
import { TweenMax } from "gsap/TweenMax";
```
