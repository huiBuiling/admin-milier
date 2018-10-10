import React,{Component} from 'react'
import { Icon,Input } from 'antd';
import PlayerList from  '../music/PlayerList'
import axios from 'axios'

/**
 * PlayerList
 * 音乐列表
 */
export default class CloundPlayerList extends Component {

	constructor(props) {
		super(props);
		this.state = {
            playlistIcon:true,  //创建歌单
            playlistIcon2:true,  //收藏歌单
		    player:false,       //是否播放中
		    list:[],            //歌单列表
            songList:[],        //对应歌单歌曲列表
            musicUrlList:[],    //对应歌单列表MP3地址
            liveList:[],        //喜欢的音乐列表
            current:null,       //当前选中歌单
            total:0,            //歌单数量
            liveId:0,
            playerNum:0         //判断切换歌单是否重置
		};
	}

    componentDidMount(){
        axios.get('http://localhost:4000/user/playlist?uid=262606203').then(res=>{
            this.setState({
                list:res.data.playlist,
                liveId:res.data.playlist[0].id
            });
            this.getSongList(1, res.data.playlist[0].id);
        });
    }

    //获取歌单列表，及根据喜欢列表设置喜欢
    getSongList = (flag, id)=>{
	    console.log(id);
        axios.get(`http://localhost:4000/playlist/detail?id=${id}`).then(res=>{
            if(res.status == 200) {
                let songList = [];
                let liveList = flag == 1 ? [] : this.state.liveList;
                res.data.playlist.tracks.map(item => {
                    let current = {};
                    current.id = item.id;
                    current.url = item.al.picUrl;  //照片
                    current.title = item.name;  //音乐名
                    current.singer = item.ar;  //歌手
                    current.album = item.al.name;   //专辑
                    if(flag == 1) {
                        current.collect = true;
                        liveList.push(item.id);
                    }
                    if(flag == 2) {
                        liveList.filter(itemL=>{
                            if(itemL == item.id){
                                current.collect = true;
                            }
                        });
                    }
                    songList.push(current);
                });

                if(flag == 1) {
                    //获取音乐列表
                    this.setState({
                        liveList: liveList,
                        playerNum:0
                    },()=>this.setState({playerNum:0}));
                }
                this.setState({
                    songList: songList,
                    current:id,  //当前选中
                    total:res.data.playlist.trackCount,
                    player:true,
                    playerNum:2
                },()=>this.setState({playerNum:2}));
            }
        })
    }

	render(){
	    const Search = Input.Search;
		const { list, songList, liveId, total, player, playerNum, current,playlistIcon, playlistIcon2 } = this.state;
		return (
			<div className="lee-rbb-all" style={{padding:0}}>
				<div className="lee-clound">
                    <div className="lee-clound-l">
                        <Search
                            placeholder="input search text"
                            onSearch={this.search}
                        />

                        <h4 onClick={()=>this.setState({playlistIcon:!playlistIcon})}>创建的歌单<Icon type={playlistIcon ? 'down':'right'} /></h4>
                        <div style={{display:playlistIcon ? 'block':'none'}}>
                            {list.filter(item => {return item.creator.province == 140000}).map((item,index)=>{
                                    let flag = item.id == liveId ? 1:2;
                                    return <p
                                            className={current == item.id ? 'active':null}
                                            key={index}
                                            onClick={()=>this.getSongList(flag,item.id)}>
                                            <i className="icon-swticonyinle2" />{item.name}
                                        </p>
                                }
                            )}
                        </div>
                        <h4 onClick={()=>this.setState({playlistIcon2:!playlistIcon2})}>收藏的歌单<Icon type={playlistIcon2 ? 'down':'right'} /></h4>
                        <div style={{display:playlistIcon2 ? 'block':'none'}}>
                            {list.filter(item => {return item.creator.province != 140000}).map((item,index)=>{
                                return <p
                                        className={`lee-clound-live-player ${current == item.id ? ' active':''}`}
                                        key={index}
                                        onClick={()=>this.getSongList(2,item.id)}>
                                        <i className="icon-vynil" />{item.name}
                                    </p>
                                }
                            )}
                        </div>
                    </div>
                    <div className="lee-clound-r">
                        <div className="lee-clound-r-song">

                        </div>
                        <h5 className="lee-clound-r-t">歌曲列表<span>歌曲数{total}</span></h5>
                        {player ?<PlayerList
                                    songList={songList}
                                    playerNum={playerNum}
                                />:null}
                    </div>
                </div>
            </div>
        )
	}
}
