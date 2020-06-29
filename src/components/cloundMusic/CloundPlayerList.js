import React,{Component} from 'react'
import { Icon, Select, message } from 'antd';
import PlayerList from './PlayerList'
import axios from 'axios';
import { connect } from 'react-redux';
import { getSongsList,getSearchList,getOldCurrentItem } from "../../reducer/player.redux";
import { getUrlFix } from '../../common/util';
/**
 * PlayerList
 * 音乐列表
 */
@connect(
    state=>state,
    { getSongsList,getSearchList,getOldCurrentItem }
)
export default class CloundPlayerList extends Component {

	constructor(props) {
		super(props);
		this.state = {
            playlistIcon:true,  //创建歌单
            playlistIcon2:true,  //收藏歌单
            playlist:[],            //歌单列表
            musicUrlList:[],    //对应歌单列表MP3地址
            searchList:[],      //搜索列表
            current:null,       //当前选中歌单
            total:0,            //歌单数量
            liveId:0,
		};
	}

    componentDidMount(){
        this.isLogin();
    }


    // 判断是否登录
    isLogin = () => {
        const { userName } = this.props.login;
        if(userName) {
            this.getInitSongList();
        } else {
            message.warning('此功能需要使用网易云音乐账号登录');
            this.props.history.push('/login');
        }
    }

    // 获取歌单列表
    getInitSongList = () => {
        axios.get(`${getUrlFix}/user/playlist?uid=262606203`).then(res=>{
            this.setState({
                playlist:res.data.playlist,
                liveId:res.data.playlist[0].id
            });
            this.props.getSongsList(1, res.data.playlist[0].id);
        });
    }

    //获取歌曲
    onChange=(val)=>{
        let currentSearchList = [];
        let searchList = this.state.searchList;
        searchList.map(item=>{
            let current = {};
            let liveList = this.props.player.liveList;
            current.id = item.id;
            current.url = item.artists[0].img1v1Url;  //照片
            current.title = item.name;  //音乐名
            current.singer = [];  //歌手
            item.artists.map(itemA =>{
                current.singer.push({name:itemA.name});
            })
            current.album = item.album.name;   //专辑
            liveList.filter(itemL=>{
                if(itemL == item.id){
                    current.collect = true;
                }
            });
            currentSearchList.push(current);
        })
        this.props.getSearchList(currentSearchList);
        this.setState({searchVal:val});
    }

    //搜索歌曲
    onSearch=(val)=>{
        axios.get(`${getUrlFix}/search?keywords=${val}`).then(res=>{
            if(res.data.code == 200){
                this.setState({
                    searchList:res.data.result.songs
                })
            }
        })
    }

    //切换歌单
    checkPlayer = (flag,id)=>{
        // this.props.getOldCurrentItem(1);
        //设置当前播放音乐及其他不变
        this.props.getOldCurrentItem(2);
	    //获取当前选中歌单列表
        this.props.getSongsList(flag,id);
    }

	render(){
        const Option = Select.Option;
        const { songList, total, playlistId } = this.props.player;
		const {
		    playlist, searchList,
            liveId,
            playlistIcon, playlistIcon2
		} = this.state;
		return (
			<div className="lee-rbb-all" style={{padding:0}}>
				<div className="lee-clound">
                    <div className="lee-clound-l">
                        <Select
                            showSearch
                            placeholder="请输入内容"
                            optionFilterProp="children"
                            onChange={(val)=>this.onChange(val)}
                            onSearch={(val)=>this.onSearch(val)}
                        >
                            {searchList.map(item=>{
                                    return <Option key={item.id}>{item.name}</Option>
                                })
                            }
                        </Select>

                        <h4 onClick={()=>this.setState({playlistIcon:!playlistIcon})}>创建的歌单<Icon type={playlistIcon ? 'down':'right'} /></h4>
                        <div style={{display:playlistIcon ? 'block':'none'}}>
                            {playlist.filter(item => {return item.creator.province == 140000}).map((item,index)=>{
                                    let flag = item.id == liveId ? 1:2;
                                    return <p
                                            className={playlistId == item.id ? 'active':null}
                                            key={index}
                                            onClick={()=>this.checkPlayer(flag,item.id)}>
                                            <i className="icon-swticonyinle2" />{item.name}
                                        </p>
                                }
                            )}
                        </div>
                        <h4 onClick={()=>this.setState({playlistIcon2:!playlistIcon2})}>收藏的歌单<Icon type={playlistIcon2 ? 'down':'right'} /></h4>
                        <div style={{display:playlistIcon2 ? 'block':'none'}}>
                            {playlist.filter(item => {return item.creator.province != 140000}).map((item,index)=>{
                                return <p
                                        className={`lee-clound-live-player ${playlistId == item.id ? ' active':''}`}
                                        key={index}
                                        onClick={()=>this.checkPlayer(2,item.id)}>
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
                        {songList.length && <PlayerList />}
                    </div>
                </div>
            </div>
        )
	}
}
