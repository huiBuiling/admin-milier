import React,{Component} from 'react'
import { Icon } from 'antd';
import PlayerBar from './PlayerBar'
import axios from 'axios'

/**
 * PlayerList
 * 音乐列表
 */
export default class PlayerList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list: [
                    {
                        url:'img01',
                        title:'多喜欢你',
                        collect:true,
                        musicUrl:'http://mp3.9ku.com/hot/2011/12-13/461514.mp3',
                        singer:'小贱',
                        album:'未知'
                    },
                    {
                        url:'img02',
                        title:'等一分钟',
                        musicUrl:'http://mp3.9ku.com/m4a/79882.m4a',
                        singer:'徐誉滕',
                        album:'未知'
                    },
                    {
                        url:'img03',
                        title:'爱情里没有谁对谁错',
                        collect:true,
                        musicUrl:'http://mp3.9ku.com/m4a/88100.m4a',
                        singer:'郑源',
                        album:'未知'
                    },
                    {
                        url:'img04',
                        title:'陪你到终点',
                        collect:true,
                        musicUrl:'http://mp3.9ku.com/hot/2012/10-31/473195.mp3',
                        singer:'孙子涵',
                        album:'未知'
                    },
                    {
                        url:'img05',
                        title:'老地方的雨',
                        musicUrl:'http://ydown.smzy.com/yinpin/2018-8/smzy_2018082304.mp3',
                        singer:'陈瑞',
                        album:'未知'
                    },
                    {
                        url:'img06',
                        title:'没那么坚强',
                        musicUrl:'http://mp3.9ku.com/m4a/212762.m4a',
                        singer:'阿泱',
                        album:'未知'
                    },
                    {
                        url:'img07',
                        title:'三生三世十里桃花',
                        musicUrl:'http://8.isdown.com:82/g1219/music2013/20160525/n22.m4a',
                        singer:'萌萌哒天团',
                        album:'未知'
                    },
                    {
                        url:'img08',
                        title:'白芍花开',
                        musicUrl:'http://8.isdown.com:82/g1219/music2013/20150408/11.m4a',
                        singer:'张碧晨',
                        album:'未知'
                    },
                    {
                        url:'img09',
                        title:'在水中央(古筝)',
                        musicUrl:'http://8.isdown.com:82/g1219/qingyinyue/zgyy/66/6/1.mp3',
                        singer:'未知',
                        album:'未知'
                    },
                    {
                        url:'img10',
                        title:'小猫宝宝叫声',
                        musicUrl:'http://ydown.smzy.com/yinpin/2016-4/smzy_2016042602.mp3',
                        singer:'不知道',
                        album:'未知'
                    },
                    {
                        url:'img11',
                        title:'猫叫声',
                        musicUrl:'http://ydown.smzy.com/yinpin/2016-4/smzy_2016042603.mp3',
                        singer:'不知道',
                        album:'未知'
                    },
                    {
                        url:'img12',
                        title:'相思鸟叫声',
                        musicUrl:'http://ydown.smzy.com/yinpin/2016-5/smzy_2016051005.mp3',
                        singer:'不知道',
                        album:'未知'
                    },
                    {
                        url:'img11',
                        title:'清脆好听的鸟叫声',
                        musicUrl:'http://ydown.smzy.com/yinpin/2017-4/smzy_2017041003.mp3',
                        singer:'不知道',
                        album:'未知'
                    },
                    {
                        url:'img01',
                        title:'毛驴的叫声',
                        musicUrl:'http://ydown.smzy.com/yinpin/2017-3/smzy_2017032804.mp3',
                        singer:'不知道',
                        album:'未知'
                    }
                ],

            currentMusic:-1,  //当前播放
            isPlay:false,   //是否播放状态
            allTime:'00：00',  //总时长
            currentTime:'00：00',  //播放时长
            currentUrl:null   //当前url地址
		};
	}

	//结束当前播放
    currentPause = ()=>{
        let currentIndex = this.state.currentMusic;
        if(currentIndex != -1) {
            this.pause(currentIndex);
        }
    }

    //或是总时长和播放时间
    time = (flag,audio)=>{
	    if(audio != undefined) {
            //时长转换
            let time, minute, second = 0;
            if (flag == '1') {
                time = audio.duration;
                // console.log('currentTime:' + audio.duration)

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

            if (flag == '1') {
                this.setState({allTime: currentTime});
            } else if (flag == '2') {
                this.setState({currentTime});
            } else if (flag == '3') {
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
        this.time(1,audio);  //获取总时长
        this.time(2,audio);  //获取播放进度

        this.setState({ isPlay:true });
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
        this.setState({currentMusic:index});
    }

    //下一首
    next = (index)=>{
        if(index != (this.state.list.length - 1)){
        	if(index == -1){
                index += 2;
            }else{
        		index ++;
			}
			this.playCurrent(index,this.props.songList[index].id);
		}
	}

    //上一首
    prev = (index)=>{
        if(index > 0){
            index--;
            this.playCurrent(index,this.props.songList[index].id);
        }
    }

    componentDidMount(){
	    /*this.state.list.map((item,index)=>{
            const audio = this.refs[`audio${index}`];
            const {minute, second} = this.time(3,audio);
            item.minute = minute;
            item.second = second;
        });*/
	    // this.pause(this.state.currentMusic);  //切换歌单后需保持停止
    }

    //获取当前音乐地址
    getCurrentUrl = (index,id)=>{
        axios.get(`http://localhost:4000/music/url?id=${id}`).then(res=>{
            if(res.status == 200){
                this.setState({currentUrl:res.data.data[0].url});
                this.play(index);
            }
        })
    }

    // 喜欢音乐
    live = (id)=>{
	    /*axios.get(`/like?id=${id}`).then(res=>{
	      if(res.status == 200){
	          this.props.songList[id].collect = true;
          }
        })*/
    }

	render() {
        let list = this.props.songList ? this.props.songList : this.state.list;
		let {
            isPlay, currentMusic,currentUrl,
            allTime, currentTime
		} = this.state;
		currentMusic = currentMusic == '-1' ? 0 : currentMusic;
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
                            <span className="lee-player-item-time">时间</span>
                        </div>
                    </div>
                    {list.map((item,index)=>{
                        const active = currentMusic == index ? 'active' : null;
                        const audio = this.refs[`audio${index}`];
                        return <div className="lee-player-item" key={index}>
                                    <div className={`lee-player-item-music ${active}`} onClick={()=>this.playCurrent(index,item.id)}>
                                        <audio
											   // controls   //显示原始样式
                                               src={this.props.songList ? currentUrl:item.musicUrl}
                                               ref={`audio${index}`}
                                               preload="true"
                                               className="lee-music-audio"
                                               onCanPlay={() => this.time(1,audio)}
                                               onTimeUpdate={(e) => this.time(2,audio)}
                                        />
                                        <span className="lee-player-item-num">{index + 1}</span>
                                        {/*喜欢*/}
                                        <span>
                                            <Icon
                                                className="lee-player-item-heart" type="heart" theme={item.collect ? 'filled' : null}
                                                onClick={()=>this.live(item.id)}
                                            />
                                        </span>
                                        {/*歌名*/}
                                        <span className="lee-player-item-title">{item.title}</span>
                                        {/*歌手*/}
                                        <span className="lee-player-item-singer">
                                            {this.props.songList ?
                                                item.singer.map((itemS,index)=>{return <span key={index}>{itemS.name}</span>})
                                                :
                                                item.singer
                                            }
                                        </span>
                                        {/*专辑*/}
                                        <span className="lee-player-item-album">{item.album}</span>
                                        {/*时长*/}
                                        <span className="lee-player-item-time">{item.time}</span>
                                    </div>
                               </div>
                    })}
				</div>
                <div className="lee-music-bar">
                    {this.props.songList && <PlayerBar
                        list={this.props.songList ? this.props.songList : this.state.list}
                        img={this.props.img}
                        current={currentMusic}
                        isPlay={isPlay}
                        allTime={allTime}
                        currentTime={currentTime}

                        audio={this.refs[`audio${currentMusic}`]}

                        pause={()=>this.pause(currentMusic)}
                        play={()=>this.play(currentMusic)}
                        next={()=>this.next(currentMusic)}
                        prev={()=>this.prev(currentMusic)}
                    />}
                </div>
            </div>
        )
	}
}
