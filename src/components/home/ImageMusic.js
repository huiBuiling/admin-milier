import React,{Component} from 'react'
import { Icon } from 'antd';
import PlayerBar from './music/PlayerBar'

/**
 * Music
 */
export default class HomeMusic extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list:[
				{
					url:'img01',
					title:'清脆好听的钢琴声音',
                    collect:true,
                    musicUrl:'http://ydown.smzy.com/yinpin/2016-12/smzy_2016121308.mp3',
					desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
				},
                {
                    url:'img02',
                    title:'我的祖国红色',
                    musicUrl:'http://ydown.smzy.com/yinpin/2017-11/smzy_2017111611.mp3',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img03',
                    title:'节奏欢快的短乐器配乐声影视音效',
                    collect:true,
                    musicUrl:'http://ydown.smzy.com/yinpin/2017-09/smzy_2017093009.mp3',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img04',
                    title:'诙谐欢快的背景音乐',
                    collect:true,
                    musicUrl:'http://ydown.smzy.com/yinpin/2017-11/smzy_2017111608.mp3',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img05',
                    title:'古灵精怪幽默',
                    musicUrl:'http://ydown.smzy.com/yinpin/2018-8/smzy_2018082304.mp3',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img06',
                    title:'Deep Forest黑森林音乐',
                    musicUrl:'http://ydown.smzy.com/yinpin/2014-6/smzy_2014060504.mp3',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img07',
                    title:'欢快背景音乐',
                    musicUrl:'http://ydown.smzy.com/yinpin/2008-7/smzy_20087180352457.mp3',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img08',
                    title:'清晨鸟叫声',
                    musicUrl:'http://ydown.smzy.com/yinpin/2017-4/smzy_2017041003.mp3',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img09',
                    title:'小猫宝宝叫声',
                    musicUrl:'http://ydown.smzy.com/yinpin/2016-4/smzy_2016042602.mp3',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img10',
                    title:'抒情浪漫音乐',
                    musicUrl:'http://ydown.smzy.com/yinpin/2008-7/smzy_200871823712922.mp3',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img11',
                    title:'猫叫声',
                    musicUrl:'http://ydown.smzy.com/yinpin/2016-4/smzy_2016042603.mp3',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img12',
                    title:'相思鸟叫声',
                    musicUrl:'http://ydown.smzy.com/yinpin/2016-5/smzy_2016051005.mp3',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img11',
                    title:'清脆好听的鸟叫声',
                    musicUrl:'http://ydown.smzy.com/yinpin/2017-4/smzy_2017041003.mp3',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img01',
                    title:'毛驴的叫声',
                    musicUrl:'http://ydown.smzy.com/yinpin/2017-3/smzy_2017032804.mp3',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                }
			],

            currentMusic:-1,
            isPlay:false
		};
	}

    //结束当前播放
    currentPause = ()=>{
        let currentIndex = this.state.currentMusic;
        if(currentIndex != -1) {
            this.pause(currentIndex);
        }
    }

	//播放
	play = (index)=>{
	    this.currentPause();
        let refAudio = `audio${index}`;
        let audio = this.refs[refAudio];
        audio.play();
        this.setState({isPlay:true});
    }

    //暂停
    pause = (index)=>{
        let refAudio = `audio${index}`;
        let audio = this.refs[refAudio];
        audio.pause();
        this.setState({isPlay:false});
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
	}

    //上一首
    prev = (index)=>{
        if(index > 0){
            index--;
            this.setState({currentMusic:index});
            this.play(index);
        }
        this.play(index);
    }

    //点击播放
    handlerClick = (flag,index)=>{
	    if(flag){
	        //播放
            this.setState({currentMusic:index});
            this.play(index);
        }else{
	        //暂停
            this.setState({currentMusic:-1});
            this.pause(index);
        }
    }

	render() {
		const { list,currentMusic,isPlay } = this.state;
		return (
			<div className="lee-rbb-all">
				<div className="lee-image">
                    {list.map((item,index)=>{
                        return <div className="lee-image-item" key={index}>
                                   <img src={require(`../../assert/images/img/${item.url}.jpg`)} alt=""/>
                                   {/*歌名*/}
                                   <h4>{item.title}</h4>
                                   {/*歌词*/}
                                   <p>{item.desc}</p>
                                    {/*bar*/}
                                    <div className="lee-music">
                                        {/*ref={`${audio}${index}`}*/}
                                        <audio
											   // controls   //显示原始样式
                                               src={item.musicUrl}
                                               ref={`audio${index}`}
                                               preload="true"
                                               className="lee-music-audio"
                                        />
                                        <div className="lee-music-l">
											<Icon type="caret-left" theme="outlined" onClick={()=>this.prev(index)} className={index == 0 ? 'prev-no':null}/>
                                            {/*播放|暂停*/}
                                            {currentMusic == index ?
                                                <Icon type="pause-circle" theme="outlined" onClick={()=>this.handlerClick(false,index)}/>
                                                :
                                                <Icon type="play-circle" theme="outlined" onClick={()=>this.handlerClick(true,index)}/>
                                            }
                                            <Icon type="caret-right" theme="outlined" onClick={()=>this.next(index)} className={index == (list.length - 1)? 'next-no':null}/>
                                        </div>

                                        <div className="lee-music-r">
                                            <Icon type="heart" theme={item.collect ? 'twoTone' : null} twoToneColor="rgba(235,47,150,.95)" />
                                        </div>
                                    </div>
                               </div>
                    })}
				</div>
                {/*{currentMusic != '-1' ?
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
                    null}*/}
			</div>
			)
	}
}
