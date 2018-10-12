import React,{Component} from 'react'
import { Icon,Progress } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import { getCurrentItem } from '../../../reducer/player.redux';

/**
 * 底部音乐
 */
@connect(
    state=>state.player,
    { getCurrentItem }
)
export default class PlayerBar extends Component {

    constructor(props) {
        super(props);
        // debugger
        this.state = {
            // currentIndex:props.currentIndex,     //当前列表第几个播放
            // currentId:props.currentId,       //歌曲id
            // currentUrl:null,                 //MP3地址
            isPlay:props.isPlay,             //是否播放状态
            percentDuration:0,               //歌曲总时长
            allTime:'00:00',                 //歌曲总时间
            currentTime:'00:00',             //歌曲进度时间
            percentCurrentTime:0,            //歌曲进度时长
            profile:false,                   //显示播放列表
        };
    }

    componentWillMount(){
        //将组件this传递给父组件
        this.props.getChildrenThis(this);
    }

    //获取总时长和播放时间
    time = (flag,audio,isSet)=>{
        if(audio != undefined) {
            //时长转换
            let time, minute, second = 0;
            if (flag == '1') {
                time = audio.duration;
            } else if (flag == '2') {
                time = audio.currentTime;
            }

            minute = parseInt(time / 60);
            second = Math.round(time % 60);

            if (minute < 10) {
                minute = "0" + minute;
            }
            if (second < 10) {
                second = "0" + second;
            }

            let currentTime = `${minute} : ${second}`;
            if(isSet){
                if(flag == 1){
                    this.setState({
                        allTime:currentTime,
                        percentDuration:time
                    });
                }else if(flag == 2){
                    this.setState({
                        currentTime,
                        percentCurrentTime:time
                    });
                }
            }
            return currentTime;
        }
    }

    //播放
    play = ()=>{
        const audio = this.refs.audio;
        console.log(audio.src)
        // audio.load();  //重新加载音频元素。

        const allTime = this.time(1,audio,false);  //获取总时长
        const currentTime = this.time(2,audio,false);  //获取播放进度

        this.setState({
            isPlay:true,
            allTime, currentTime
        });

        audio.play();
    }

    //暂停
    pause = ()=>{
        const audio = this.refs.audio;
        audio.pause();
        this.setState({isPlay:false})
    }

    //下一首
    /*next = (index)=>{
        const { isPlay, oldPlay } = this.state;
        const { player } = this.props;
        let songList = isPlay && oldPlay ? player.oldSongList : player.songList;

        if(index != (songList.length - 1)){
        	if(index == -1){
                index += 2;
            }else{
        		index ++;
			}
			this.playCurrent(index,songList[index].id);
		}
	}*/

    //上一首
    /*prev = (index)=>{
	    const { isPlay, oldPlay } = this.state;
        const { player } = this.props;
        let songList = isPlay && oldPlay ? player.oldSongList : player.songList;
        if(index > 0){
            index--;
            this.playCurrent(index,songList[index].id);
        }
    }*/

    //获取歌曲MP3地址
    getCurrenturl = (currentId,currentIndex)=>{
        axios.get(`http://localhost:4000/music/url?id=${currentId}`).then(res=>{
            if(res.status == 200){
                const currentUrl = res.data.data[0].url;
                const item = {currentId,currentIndex,currentUrl};
                this.props.getCurrentItem(item);
                this.play();
            }
        });
    }

    //点击播放列表播放
    playerCurrent = (id,index)=>{
        this.getCurrenturl(id,index);
    }

    render() {
        let {
            isPlay,
            allTime,currentTime,percentDuration,percentCurrentTime,
            profile
        } = this.state;

        let { songList, oldSongList, currentId, currentIndex, currentUrl } = this.props;

        //初始设置判断是否未播放且播放列表为空
        /*if(!isPlay && oldSongList.length < 1){
            debugger
            oldSongList = songList[0];
        }*/

        //获取对应某一项
        let playerItem = songList[currentIndex];

        //代表已经切换歌单，但是音乐还在播放
        if(isPlay && currentIndex == '-1'){
            console.log(oldSongList)
            oldSongList.filter(item => {
                if (item.id == currentId) {
                    playerItem = item;
                    console.log('yes' + currentId);
                    console.log(playerItem);
                }
            });
        }

        //进度
        const percent = (percentCurrentTime / percentDuration) * 100;

        //是否播放
        const pauseCurrent = isPlay ? (percent == 100 ? false : true) : false;
        return (
            <div className="lee-rbb-all">
                <div className="lee-music-bar">
                    <div className="lee-image-item">
                        <img src={playerItem.url} alt=""/>
                        <div className="lee-music">
                            <div className="lee-music-l">
                                <audio
                                    // controls   //显示原始样式
                                    src={currentUrl}
                                    ref='audio'
                                    preload="true"
                                    className="lee-music-audio"
                                    onCanPlay={() => this.time(1, this.refs.audio, true)}
                                    onTimeUpdate={() => this.time(2, this.refs.audio, true)}
                                />
                                <div className="lee-music-l-bot">
                                    <Icon
                                        type="caret-left"
                                        theme="outlined"
                                        className={currentIndex == 0 ? 'prev-no' : null}
                                        // onClick={prev}
                                    />

                                    {/*播放|暂停*/}
                                    {pauseCurrent ?
                                        <Icon type="pause-circle" theme="outlined" onClick={() => {
                                            this.pause(currentIndex)
                                        }}/>
                                        :
                                        <Icon type="play-circle" theme="outlined"
                                              onClick={() => this.play(currentIndex)}/>
                                    }
                                    <Icon
                                        type="caret-right"
                                        theme="outlined"
                                        className={currentIndex == (oldSongList.length - 1) ? 'next-no' : null}
                                        // onClick={next}
                                    />

                                    <div style={{width: 250, display: 'inline-block'}}>
                                        {/*歌名*/}
                                        <h4 className="lee-music-l-top">{playerItem.title}</h4>
                                        <Progress
                                            percent={percent}
                                            format={percent => `${currentTime} / ${allTime}`}
                                            size="small" status={percent == 100 ? 'success' : 'active'}
                                            successPercent
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="lee-music-r">
                                {/*<span>列表循环</span>*/}
                                <span><Icon type="heart" theme={playerItem.collect ? 'filled' : null}/></span>
                                <span className="lee-music-num">
                                    <Icon type="profile" theme="outlined"
                                          onClick={() => this.setState({profile: !profile})}/>
                                    <span>{oldSongList.length == undefined ? 0 : oldSongList.length}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lee-music-profile" style={{display:profile ? 'block':'none'}}>
                    <p className="lee-music-profile-title">
                        播放列表
                        <Icon type="close" onClick={()=>this.setState({profile:!profile})} />
                    </p>
                    <p className="lee-music-profile-opera">
                        <span>共{oldSongList.length}首歌曲</span>
                        <span>清空<i className="icon-del1" /></span>
                    </p>
                    {
                        oldSongList.length > 0 && oldSongList.map((item,index)=>{
                            return <div key={index} onClick={()=>this.playerCurrent(item.id,index)}>
                                <span className="lee-music-profile-status">
                                    {currentId == item.id ? <Icon type={isPlay ? 'caret-right':'pause'} /> : null}
                                </span>
                                <span className="lee-music-profile-name">{item.title}</span>
                                <span className="lee-music-profile-singer">
                                    {item.singer.map((itemS,index)=>{
                                        return <span key={index}>{itemS.name}</span>
                                    })}
                                </span>
                                {/*<span className="lee-music-profile-del"><i className="icon-del1" /></span>*/}
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
