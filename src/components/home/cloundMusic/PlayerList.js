import React,{Component} from 'react'
import { Icon } from 'antd';
import PlayerBar from './PlayerBar'
import axios from 'axios';
import { connect } from 'react-redux';

/**
 * PlayerList
 * 音乐列表
 */
@connect(
    state=>state
)
export default class PlayerList extends Component {

	constructor(props) {
		super(props);
		this.state = {
            // songList: this.props.player.songList,

            currentMusic:-1,  //当前播放
            isPlay:false,   //是否播放状态
            allTime:'00：00',  //总时长
            currentTime:'00：00',  //播放时长
            currentUrl:null   //当前url地址
		};
	}

    //获取当前音乐地址
    getCurrentUrl = (index,id)=>{
        axios.get(`http://localhost:4000/music/url?id=${id}`).then(res=>{
            if(res.status == 200){
                this.setState({
                    currentUrl:res.data.data[0].url,
                    currentMusic:index
                },()=>this.play(index));
            }
        })
    }

    // 喜欢音乐 （暂未实现）
    live = (collect,id)=>{
	    if(collect){   //移除live
            axios.get(`http://localhost:4000/fm_trash?id=${id}`).then(res=>{
              if(res.status == 200){
                  this.state.songList[id].collect = false;
              }
            })
        }else{  //设置live
            axios.get(`http://localhost:4000/like?id=${id}`).then(res=>{
              if(res.status == 200){
                  this.state.songList[id].collect = true;
              }
            })
        }
    }

	//结束当前播放
    currentPause = ()=>{
        let currentIndex = this.state.currentMusic;
        if(currentIndex != -1) {
            // this.pause(currentIndex);
            const audio = this.refs[`audio${currentIndex}`];
            audio.pause();
        }
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
                if (flag == '1') {
                    this.setState({allTime: currentTime});
                } else if (flag == '2') {
                    this.setState({currentTime});
                }
            }else {
                return currentTime;
            }
        }
    }

	//播放
	play = (index)=>{
        //结束当前播放
        this.currentPause();
        const audio = this.refs[`audio${index}`];
        audio.play();
        const allTime = this.time(1,audio,false);  //获取总时长
        const currentTime = this.time(2,audio,false);  //获取播放进度

        this.setState({
            isPlay:true,
            allTime,
            currentTime
        });
    }

    //暂停
    pause = (index)=>{
        const audio = this.refs[`audio${index}`];
        audio.pause();
        this.setState({isPlay:false})
    }

    // 播放
    playCurrent = (index,id)=>{
        this.getCurrentUrl(index,id);
    }

    //下一首
    next = (index)=>{
	    let { songList } = this.props.player;
        if(index != (songList.length - 1)){
        	if(index == -1){
                index += 2;
            }else{
        		index ++;
			}
			this.playCurrent(index,songList[index].id);
		}
	}

    //上一首
    prev = (index)=>{
        let { songList } = this.props.player;
        if(index > 0){
            index--;
            this.playCurrent(index,songList[index].id);
        }
    }

    componentWillReceiveProps(){
	    //切换歌单监听
        const { playerNum }  = this.props.player;
        if(playerNum != 0 && playerNum != undefined){
            const audio = this.refs[`audio0`];
            this.time(1,audio);  //获取总时长
            this.time(2,audio);  //获取播放进度
            this.setState({
                currentMusic:-1
            })
            if(this.state.currentMusic != -1){
                this.pause(this.state.currentMusic);  //切换歌单后需保持停止
            }
        }
    }

	render() {
	    const { songList } = this.props.player;
	    // console.log(this.props.player)
		let {
		    isPlay,
            currentMusic,currentUrl,
            allTime, currentTime
		} = this.state;
		currentMusic = currentMusic == '-1' ? 0 : currentMusic;
        // debugger
		return (
			<div className="lee-rbb-all" style={{height: 'calc(100% - 80px)',padding:0}}>
				<div className="lee-player">
                    <div className="lee-player-item">
                        <div className="lee-player-item-music lee-player-item-music-t">
                            <span className="lee-player-item-operation">操作</span>
                            {/*歌名*/}
                            <span className="lee-player-item-title">歌名</span>
                            {/*歌手*/}
                            <span className="lee-player-item-singer">歌手</span>
                            {/*专辑*/}
                            <span className="lee-player-item-album">专辑</span>
                            {/*时长*/}
                            {/*<span className="lee-player-item-time">时间</span>*/}
                        </div>
                    </div>
                    {songList.map((item,index)=>{
                        const active = currentMusic == index ? 'active' : null;
                        const audio = this.refs[`audio${index}`];
                        let collect = item.collect ? true :false;
                        return <div className="lee-player-item" key={index}>
                                    <div className={`lee-player-item-music ${active}`}>
                                        <audio
											   // controls   //显示原始样式
                                               src={currentUrl}
                                               ref={`audio${index}`}
                                               preload="true"
                                               className="lee-music-audio"
                                               onCanPlay={() => this.time(1,audio,true)}
                                               onTimeUpdate={() => this.time(2,audio,true)}
                                        />
                                        <span className="lee-player-item-num">{index + 1}</span>
                                        {/*喜欢*/}
                                        <span>
                                            <Icon
                                                className="lee-player-item-heart" type="heart" theme={item.collect ? 'filled' : null}
                                                // onClick={()=>this.live(collect,item.id)}
                                            />
                                        </span>
                                        {/*歌名*/}
                                        <span className="lee-player-item-title" onClick={()=>this.playCurrent(index,item.id)}>{item.title}</span>
                                        {/*歌手*/}
                                        <span className="lee-player-item-singer" onClick={()=>this.playCurrent(index,item.id)}>
                                            {item.singer.map((itemS,index)=>{
                                                return <span key={index}>{itemS.name}</span>
                                            })}
                                        </span>
                                        {/*专辑*/}
                                        <span className="lee-player-item-album" onClick={()=>this.playCurrent(index,item.id)}>{item.album}</span>
                                        {/*时长*/}
                                        {/*<span className="lee-player-item-time">{item.time}</span>*/}
                                    </div>
                               </div>
                    })}
				</div>
                <div className="lee-music-bar">
                    {songList.length > 0 && <PlayerBar
                        current={currentMusic}
                        audio={this.refs[`audio${currentMusic}`]}

                        isPlay={isPlay}
                        // allTime={this.time(1,currentMusic)}
                        // currentTime={this.time(2,currentMusic)}

                        allTime={allTime}
                        currentTime={currentTime}

                        play={()=>this.playCurrent(currentMusic,songList[currentMusic].id)}
                        pause={()=>this.pause(currentMusic)}
                        next={()=>this.next(currentMusic)}
                        prev={()=>this.prev(currentMusic)}
                    />}
                </div>
            </div>
        )
	}
}
