/**
 * 音乐
 */
import axios from 'axios';
import { getUrlFix } from '../common/util';
import { message } from 'antd';

const SONG_LIST = 'SONG_LIST';
const SEARCH = 'SEARCH';
const OLD_SONG_LIST = 'OLD_SONG_LIST';
const CURRENT_ITEM = 'CURRENT_ITEM';

let initState = {
	songList:[],      //当前选中歌单->歌曲列表
    liveList:[],      //喜欢歌曲列表
    playlistId:null,   //当前选中歌单
	total:0,           //当前选中歌单歌曲总数
    oldSongList:[],    //botBar 对应列表
    currentId:null,    //歌曲id
	currentIndex:0, //歌曲index
    currentUrl:null,   //歌曲地址
}

//reducer
export function player(state = initState, action){
	switch (action.type){
		case SONG_LIST:
			return {
				...state,
                songList:action.payload.songList,
                liveList:action.payload.liveList,
                playlistId:action.payload.playlistId,
                total:action.payload.total,
                oldSongList:action.payload.oldSongList
			}
		case SEARCH:
			return {
				...state,
                songList:action.songList
			}
		case OLD_SONG_LIST:
			return {
				...state,
				oldSongList:action.oldSongList
			}
		case CURRENT_ITEM:
			return {
				...state,
				currentId:action.item.currentId,
				currentIndex:action.item.currentIndex,
                currentUrl:action.item.currentUrl
			}
		default:
			return state;
	}
}

//action
//songsList
export function songsList(songList,liveList,oldSongList,playlistId,total,playNum) {
	return {type:SONG_LIST,payload:{songList,liveList,oldSongList,playlistId,total,playNum}};
}

export function getSongsList(flag,id) {
	return (dispatch,getState)=>{
        axios.get(`${getUrlFix}/playlist/detail?id=${id}`).then(res=>{
            if(res.status == 200) {
				if(res.data.code == 200) {
					let songList = [];
					let liveList = flag == 1 ? [] : getState().player.liveList;
					res.data.playlist.tracks.map(item => {
						let current = {};
						current.id = item.id;
						current.url = item.al.picUrl;  //照片
						current.title = item.name;  //音乐名
						current.singer = item.ar;  //歌手
						current.album = item.al.name;   //专辑
						if (flag == 1) {
							current.collect = true;
							liveList.push(item.id);
						}
						if (flag == 2) {
							liveList.filter(itemL => {
								if (itemL == item.id) {
									current.collect = true;
								}
							});
						}
						songList.push(current);
					});

					let oldSongList = flag == 1 ? songList : getState().player.oldSongList;

					dispatch(songsList(songList,liveList,oldSongList,id,res.data.playlist.trackCount));
				} else {
					message.warning(res.data.msg)
				}
            }
        })
    }
}

//search
export function search(songList) {
    return {type:SEARCH,songList};
}

export function getSearchList(currentSearchList) {
	return dispatch=>{
		return dispatch(search(currentSearchList));
	}
}

//播放列表
export function playerSongList(oldSongList) {
    return {type:OLD_SONG_LIST,oldSongList};
}

export function getOldSongList() {
    return (dispatch,getState) =>{
        const oldSongList = getState().player.songList;
        return dispatch(playerSongList(oldSongList));
    }
}

//当前选中
export function currentItem(item) {
	return {type:CURRENT_ITEM,item};
}

export function getCurrentItem(item) {
	return dispatch=>{
		return dispatch(currentItem(item));
	}
}

//获取之前的选中
export function getOldCurrentItem(flag) {
    return (dispatch,getState)=>{
        const { currentId, currentUrl} = getState().player;
    	let currentIndex = 0;
    	if(flag == 2){
            currentIndex = getState().player.currentIndex;
		}
    	const item = { currentId, currentIndex, currentUrl};
    	// console.log(currentId)
        return dispatch(currentItem(item));
    }
}