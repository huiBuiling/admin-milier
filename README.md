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

7. 播放地址和时间未更新，但是图片和歌曲名是更新后的
   设置为更新后，播放当前歌单列表的

```
