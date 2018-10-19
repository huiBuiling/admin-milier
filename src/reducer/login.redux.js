/**
 * 登录
 */
import axios from 'axios';

const LOGIN = 'LOGIN';

let initState = {
    accounts:'',      //帐号
    password:'',      //密码
    userName:'',      //用户名
    avatar:''         //头像
}

//reducer
export function login(state = initState, action){
	switch (action.type){
		case LOGIN:
			return {
				...state,
                accounts:action.payload.accounts,
                password:action.payload.password,
                userName:action.payload.userName,
                avatar:action.payload.avatar
			}
		default:
			return state;
	}
}

//action
//songsList
export function loginData(accounts,password,userName,avatar) {
	return {type:LOGIN,payload:{accounts,password,userName,avatar}};
}

export function getLoginData(accounts,password) {
	return (dispatch)=>{
        axios.get(`http://localhost:4000/login/cellphone?phone=${accounts}&password=${password}`).then(res=>{
            if(res.status == 200) {
				const userName = res.data.profile.nickname;
                const avatar = res.data.profile.avatarUrl;
                dispatch(loginData(accounts,password,userName,avatar));
            }
        })
    }
}
