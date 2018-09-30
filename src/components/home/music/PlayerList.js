import React,{Component} from 'react'
import { Icon } from 'antd';
import PlayerBar from './PlayerBar'

/**
 * PlayerList
 * 音乐列表
 */
export default class PlayerList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list:[
				{
					url:'img01',
					title:'清脆好听的钢琴声音',
                    collect:true,
                    musicUrl:'http://ydown.smzy.com/yinpin/2016-12/smzy_2016121308.mp3',
					singer:'不知道',
                    time:'04:23'
				},
                {
                    url:'img02',
                    title:'我的祖国红色',
                    musicUrl:'http://ydown.smzy.com/yinpin/2017-11/smzy_2017111611.mp3',
                    singer:'不知道',
                    time:'04:23'
                },
                {
                    url:'img03',
                    title:'节奏欢快的短乐器配乐声影视音效',
                    collect:true,
                    musicUrl:'http://ydown.smzy.com/yinpin/2017-09/smzy_2017093009.mp3',
                    singer:'不知道',
                    time:'04:23'
                },
                {
                    url:'img04',
                    title:'诙谐欢快的背景音乐',
                    collect:true,
                    musicUrl:'http://ydown.smzy.com/yinpin/2017-11/smzy_2017111608.mp3',
                    singer:'不知道',
                    time:'04:23'
                },
                {
                    url:'img05',
                    title:'古灵精怪幽默',
                    musicUrl:'http://ydown.smzy.com/yinpin/2018-8/smzy_2018082304.mp3',
                    singer:'不知道',
                    time:'04:23'
                },
                {
                    url:'img06',
                    title:'Deep Forest黑森林音乐',
                    musicUrl:'http://ydown.smzy.com/yinpin/2014-6/smzy_2014060504.mp3',
                    singer:'不知道'
                },
                {
                    url:'img07',
                    title:'欢快背景音乐',
                    musicUrl:'http://ydown.smzy.com/yinpin/2008-7/smzy_20087180352457.mp3',
                    singer:'不知道',
                    time:'04:23'
                },
                {
                    url:'img08',
                    title:'清晨鸟叫声',
                    musicUrl:'http://ydown.smzy.com/yinpin/2017-4/smzy_2017041003.mp3',
                    singer:'不知道',
                    time:'04:23'
                },
                {
                    url:'img09',
                    title:'小猫宝宝叫声',
                    musicUrl:'http://ydown.smzy.com/yinpin/2016-4/smzy_2016042602.mp3',
                    singer:'不知道',
                    time:'04:23'
                },
                {
                    url:'img10',
                    title:'抒情浪漫音乐',
                    musicUrl:'http://ydown.smzy.com/yinpin/2008-7/smzy_200871823712922.mp3',
                    singer:'不知道',
                    time:'04:23'
                },
                {
                    url:'img11',
                    title:'猫叫声',
                    musicUrl:'http://ydown.smzy.com/yinpin/2016-4/smzy_2016042603.mp3',
                    singer:'不知道',
                    time:'04:23'
                },
                {
                    url:'img12',
                    title:'相思鸟叫声',
                    musicUrl:'http://ydown.smzy.com/yinpin/2016-5/smzy_2016051005.mp3',
                    singer:'不知道'
                },
                {
                    url:'img11',
                    title:'清脆好听的鸟叫声',
                    musicUrl:'http://ydown.smzy.com/yinpin/2017-4/smzy_2017041003.mp3',
                    singer:'不知道',
                    time:'04:23'
                },
                {
                    url:'img01',
                    title:'毛驴的叫声',
                    musicUrl:'http://ydown.smzy.com/yinpin/2017-3/smzy_2017032804.mp3',
                    singer:'不知道',
                    time:'04:23'
                }
			],

            currentMusic:-1,
            isPlay:false
		};
	}

	//结束当前播放
    currentPause = ()=>{
        let currentIndex = this.state.currentMusic;
        console.log('1. 结束当前播放: ' + currentIndex);

        if(currentIndex != -1) {
            this.pause(currentIndex);
        }
    }

	//播放
	play = (index)=>{
        //结束当前播放
        this.currentPause();

        let refAudio = `audio${index}`;
        let audio = this.refs[refAudio];
        audio.play();
        this.setState({isPlay:true});

        console.log('1. 播放: ' + index);
    }

    //暂停
    pause = (index)=>{
        console.log('2. 暂停: ' + index);

        let refAudio = `audio${index}`;
        let audio = this.refs[refAudio];
        audio.pause();
        this.setState({isPlay:false})
    }

    // 播放
    playCurrent = (index)=>{
        console.log('2. 点击播放: ' + index);

        this.play(index);
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
            this.setState({currentMusic:index});
            this.play(index);
		}

        console.log('下一首: ' + index);
	}

    //上一首
    prev = (index)=>{
        if(index > 0){
            index--;
            this.setState({currentMusic:index});
            this.play(index);
        }

        console.log('上一首: ' + index);
    }

	render() {
		const { list,currentMusic,isPlay } = this.state;
		return (
			<div className="lee-rbb-all" style={{padding:0}}>
				<div className="lee-player">
                    <div className="lee-player-item">
                        <div className="lee-player-item-music lee-player-item-music-t">
                            <span className="lee-player-item-operation">操作</span>
                            {/*歌名*/}
                            <span className="lee-player-item-title">歌名</span>
                            {/*歌手*/}
                            <span className="lee-player-item-singer">歌手</span>
                            {/*时长*/}
                            <span className="lee-player-item-time">时间</span>
                        </div>
                    </div>
                    {list.map((item,index)=>{
                        const active = currentMusic == index ? 'active' : null;
                        return <div className="lee-player-item" key={index}>
                                    <div className={`lee-player-item-music ${active}`} onClick={()=>this.playCurrent(index)}>
                                        <audio
											   // controls   //显示原始样式
                                               src={item.musicUrl}
                                               ref={`audio${index}`}
                                               preload="true"
                                               className="lee-music-audio"
                                        />
                                        <span className="lee-player-item-num">{index + 1}</span>
                                        {/*喜欢*/}
                                        <Icon className="lee-player-item-heart" type="heart" theme={item.collect ? 'filled' : null} />
                                        {/*歌名*/}
                                        <span className="lee-player-item-title">{item.title}</span>
                                        {/*歌手*/}
                                        <span className="lee-player-item-singer">{item.singer}</span>
                                        {/*时长*/}
                                        <span className="lee-player-item-time">{item.time}</span>
                                    </div>
                               </div>
                    })}
				</div>
                {currentMusic != '-1' ?
                    <div className="lee-music-bar">
                            <PlayerBar
                                list={list}
                                current={currentMusic}
                                isPlay={isPlay}

                                pause={()=>this.pause(currentMusic)}
                                play={()=>this.play(currentMusic)}
                                next={()=>this.next(currentMusic)}
                                prev={()=>this.prev(currentMusic)}
                            />
                        </div>
                    :
                    null}
            </div>
        )
	}
}
