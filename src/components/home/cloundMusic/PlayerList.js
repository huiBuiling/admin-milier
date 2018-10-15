import React,{Component} from 'react'
import { Icon } from 'antd';
import PlayerBar from './PlayerBar'
import axios from 'axios';
import { connect } from 'react-redux';
import { getOldSongList,getCurrentItem } from '../../../reducer/player.redux'

/**
 * PlayerList
 * 音乐列表
 */
@connect(
    state=>state.player,
    { getOldSongList,getCurrentItem }
)
export default class PlayerList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // currentId:null,        //歌曲id,
            // currentIndex:0,        //当前播放
            isPlay:false,          //是否播放状态
            allTime:'00：00',      //总时长
            currentTime:'00：00',  //播放时长
            currentUrl:null,       //当前url地址
        };
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

    // 点击播放
    playCurrent = (index,id)=>{
        this.props.getOldSongList(id);
        this.child.playerCurrent(id,index);
    }

    //获取歌曲MP3地址
    getCurrenturl = (currentId,currentIndex)=>{
        axios.get(`http://localhost:4000/music/url?id=${currentId}`).then(res=>{
            if(res.status == 200){
                const currentUrl = res.data.data[0].url;
                const item = {currentId,currentIndex,currentUrl};
                this.props.getCurrentItem(item);
            }
        });
    }

    componentDidMount(){
        //初始化获取第一条歌曲
        this.getCurrenturl(this.props.songList[0].id,0);
        this.setState({
            isPlay:false
        })
    }

    render() {
        let { songList,currentId,currentIndex } = this.props;
        let {isPlay} = this.state;
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
                        const active = currentIndex == index ? 'active' : null;
                        let collect = item.collect ? true :false;
                        return <div className="lee-player-item" key={index}>
                            <div className={`lee-player-item-music ${active}`}>
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
                    {songList.length && currentId != null && currentIndex != null && <PlayerBar
                        currentIndex={currentIndex}
                        currentId={currentId}
                        isPlay={isPlay}
                        getChildrenThis = {(ref) => { this.child = ref; }}
                    />}
                </div>
            </div>
        )
    }
}
