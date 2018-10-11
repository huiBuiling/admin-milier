/**
 * 音乐
 */
import axios from 'axios';
const SONG_LIST = 'SONG_LIST';
const SEARCH = 'SEARCH';

let initState = {
	songList:[],      //当前选中歌单->歌曲列表
    liveList:[],      //喜欢歌曲列表
	currentId:null,   //当前选中歌单
	total:0,           //当前选中歌单歌曲总数
    playNum:0,         //歌单切换标识
}

//reducer
export function player(state = initState, action){
	switch (action.type){
		case SONG_LIST:
			return {
				...state,
                songList:action.payload.songList,
                liveList:action.payload.liveList,
                currentId:action.payload.currentId,
                total:action.payload.total,
                playNum:action.payload.playNum
			}
		case SEARCH:
			return {
				...state,
                songList:action.songList
			}
		default:
			return state;
	}
}

//action
//songsList
export function songsList(songList,liveList,currentId,total,playNum) {
	return {type:SONG_LIST,payload:{songList,liveList,currentId,total,playNum}};
}

export function getSongsList(flag,id) {
	return (dispatch,getState)=>{
        axios.get(`http://localhost:4000/playlist/detail?id=${id}`).then(res=>{
            console.log(id);
            if(res.status == 200) {
                let songList = [];
                let liveList = flag == 1 ? [] : getState().player.liveList;
                let playNum = getState().player.liveList ++;
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

                dispatch(songsList(songList,liveList,id,res.data.playlist.trackCount,playNum));
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