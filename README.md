# admin-milier
antd + react 后台管理

###### 启动：yarn run dev
###### 安装：yarn
###### 访问：http://localhost:5201/

### topbar
> 获取网易云音乐中设置的用户名和用户头像
> 换肤（目前配色教丑）
> 瀑布流图片（支持音乐播放，下一首，上一首，喜欢未实现）
> 消息通知（未）

### leftbar
>首页
>图表
>记事
>地图
>会议
>物业
>仿网易云音乐

### 仿网易云音乐
```
使用网易云接口：git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git
运行：set PORT=4000 && node app.js

1. 用户登录：/login/cellphone?phone=xxx&password=xxx
2. 获取喜欢的音乐，收藏和创建的歌单：/user/playlist?uid=xxxxxxxxx
3. 对应歌单歌曲列表及根据喜欢列表设置喜欢：/playlist/detail?id=${id}
   getSongList(flag, id)

4. PLayerList:
   播放：this.play(index)     audio.play();
   停止：this.pause(index)    audio.pause();
   下一首：this.next(index)
   上一首：this.prev(index)
   总时长和播放时间：this.time(flag,audio);  歌曲总时长：audio.duration  播放时长：audio.currentTime
   结束当前播放：this.currentPause();   //每次播放新歌曲前都应该先结束当前
   获取当前音乐地址：this.getCurrentUrl(index,id)
   <audio
   //  controls   //显示原始样式
       src={this.props.songList ? currentUrl:item.musicUrl}
       ref={`audio${index}`}
       preload="true"
       className="lee-music-audio"
       onCanPlay={() => this.time(1,audio)}
       onTimeUpdate={(e) => this.time(2,audio)}
    />

5. PlayerBar:操作

6. 设置喜欢：/live?id=${id}
   移除喜欢：/fm_trash?id=${id}
   error:通知需要登录，但是已登录，尴尬

7. 播放地址和时间未更新，但是图片和歌曲名是更新后的
   设置为更新后，播放当前歌单列表的
   问题：
        获取歌曲时间未点击显示的还是上一曲的;
        获取歌曲时间初始获取为NAN，目前设置为00：00（囧）

8. 搜索：/search?keywords=${val}
   问题：切换歌单后第一次搜索点击列表未切换
   解决：Option key={item.id}

```

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
    喜欢及移除音乐 （暂未实现）

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

```
