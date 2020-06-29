import React,{Component} from 'react'
import { Icon,Progress,Slider } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import { getCurrentItem } from '../../reducer/player.redux';
import { getUrlFix } from '../../common/util';

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
        this.state = {
            isPlay:props.isPlay,             //是否播放状态
            percentDuration:0,               //歌曲总时长
            allTime:'00:00',                 //歌曲总时间
            currentTime:'00:00',             //歌曲进度时间
            percentCurrentTime:0,            //歌曲进度时长
            profile:false,                   //显示播放列表
            volume:50,                        //音量
            showVolume:false,                //显示音量进度
        };
    }

    componentWillMount(){
        //将组件this传递给父组件
        this.props.getChildrenThis(this);
    }

    //获取歌曲MP3地址
    getCurrenturl = (currentId,currentIndex)=>{
        axios.get(`${getUrlFix}/song/url?id=${currentId}`).then(res=>{
            if(res.status == 200){
                const currentUrl = res.data.data[0].url;
                // console.log(currentId + ":" + currentUrl);
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
        // audio.load();  //重新加载音频元素。
        const allTime = this.time(1,audio,false);  //获取总时长
        const currentTime = this.time(2,audio,false);  //获取播放进度
        audio.volume = (this.state.volume / 100);
        // console.log(audio.volume);
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
    next = ()=>{
        let { oldSongList,currentIndex } = this.props;
        if(currentIndex != (oldSongList.length - 1)){
            currentIndex ++;
            this.playerCurrent(oldSongList[currentIndex].id,currentIndex);
		}
	}

    //上一首
    prev = ()=>{
        let { oldSongList,currentIndex } = this.props;
        if(currentIndex > 0){
            currentIndex--;
            this.playerCurrent(oldSongList[currentIndex].id,currentIndex);
        }
    }

    setVolume = (val)=>{
        const audio = this.refs.audio;
        audio.volume = (val/ 100);
    }

    render() {
        let {
            isPlay,
            allTime,currentTime,percentDuration,percentCurrentTime,
            profile,showVolume,volume
        } = this.state;

        let { oldSongList, currentId, currentIndex, currentUrl } = this.props;

        //获取对应某一项
        let playerItem = oldSongList[currentIndex];

        //进度
        const percent = (percentCurrentTime / percentDuration) * 100;

        //是否播放
        const pauseCurrent = isPlay ? (percent == 100 ? false : true) : false;

        return (
            <div className="lee-rbb-all">
                <div className="lee-music-bar">
                    <div className="lee-image-item">
                        <img src={playerItem != undefined && playerItem.url} alt=""/>
                        <div className="lee-music">
                            <div className="lee-music-l">
                                <audio
                                    // controls   //显示原始样式
                                    src={currentUrl}
                                    ref='audio'
                                    preload="true"
                                    className="lee-music-audio"
                                    // defaultMuted={false}  //设置或返回音频默认是否静音。
                                    loop={true}  //循环播放
                                    onVolumeChange={()=>console.log('改变')}
                                    onCanPlay={() => this.time(1, this.refs.audio, true)}
                                    onTimeUpdate={() => this.time(2, this.refs.audio, true)}
                                />
                                <div className="lee-music-l-bot">
                                    <Icon
                                        type="caret-left"
                                        theme="outlined"
                                        className={currentIndex == 0 ? 'prev-no' : null}
                                        onClick={this.prev}
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
                                        onClick={this.next}
                                    />

                                    <div style={{width: 250, display: 'inline-block'}}>
                                        {/*歌名*/}
                                        <h4 className="lee-music-l-top">{playerItem != undefined && playerItem.title}</h4>
                                        <Progress
                                            style={{width:'75%'}}
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
                                <span><Icon type="sound" theme="outlined" onClick={()=>this.setState({showVolume:!showVolume})} /></span>
                                <span><Icon type="heart" theme={playerItem.collect ? 'filled' : null}/></span>
                                <span className="lee-music-num">
                                    <Icon type="profile" theme="outlined"
                                          onClick={() => this.setState({profile: !profile})}/>
                                    <span>{oldSongList.length}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="lee-music-volume" style={{display:showVolume ? 'block':'none'}}>
                    <Slider 
                        vertical 
                        defaultValue={volume} 
                        max={100}
                        min={0}
                        onChange={(val)=>{
                            // console.log(val);
                            this.setState({volume:val});
                            this.setVolume(val);
                        }}
                    />
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
                    <div className="lee-music-profile-list">
                    {oldSongList.length > 0 && oldSongList.map((item,index)=>{
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
            </div>
        )
    }
}
