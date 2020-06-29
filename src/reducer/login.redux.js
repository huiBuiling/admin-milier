/**
 * 登录
 */
import axios from 'axios';
import { getUrlFix, getItem, setItem } from '../common/util';
import { message } from 'antd';

const LOGIN = 'LOGIN';
const userData =  JSON.parse(getItem('userData'));
console.log(userData);

let initState = {
    // accounts:'',      //帐号
    // password:'',      //密码
    userName:'',      //用户名
    avatar:'',         //头像
    ...userData,
}

//reducer
export function login(state = initState, action){
	switch (action.type){
		case LOGIN:
			return {
				...state,
                // accounts:action.payload.accounts,
                // password:action.payload.password,
                userName:action.payload.userName,
                avatar:action.payload.avatar
			}
		default:
			return state;
	}
}

//action
//songsList
export function loginData(userName,avatar) {
    // return {type:LOGIN,payload:{accounts,password,userName,avatar}};
	return {type:LOGIN,payload:{userName,avatar}};
}

export function setLoginData(userName,avatar) {
    return (dispatch)=>{
        dispatch(loginData(userName,avatar));
    }
}

export function getLoginData(accounts,password) {
	return (dispatch)=>{
        axios.get(`${getUrlFix}/login/cellphone?phone=${accounts}&password=${password}`).then(res=>{
            if(res.status == 200) {
                if(res.data.code == 200) {
                    const userName = res.data.profile.nickname;
                    const avatar = res.data.profile.avatarUrl;
                    setItem('userData', {
                        userName,avatar
                    })
                    dispatch(loginData(userName,avatar));
                    window.location.pathname = '/home'
                } else {
                    message.warning(res.data.msg)
                }
            }
        }).catch(err => {
            message.warning('账号或密码错误, 请重新输入');
        })
    }
}
