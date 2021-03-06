import React, { Component } from 'react';
import { Icon,Input,Button,Modal, message } from 'antd';
import { connect } from 'react-redux';
import { getLoginData } from '../../reducer/login.redux'

import login from '../../assert/images/login/login1.png';
import login3 from '../../assert/images/login/login3.png';

import logo2 from '../../assert/images/logo/logo2.png'
import logo3 from '../../assert/images/logo/logo3.png'
import { setItem } from '../../common/util';

const confirm = Modal.confirm;

@connect(
    state=>state.login,
    { getLoginData }
)
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            accounts: '',
            passpword: '',
            randomNum: Math.random() * 10
        }
    }

    componentDidMount() {
        setItem('userData', {})
    }

    //登录
    login = ()=>{
        const { accounts,passpword } = this.state;
        if(accounts && passpword) {
            this.props.getLoginData(accounts,passpword);
            // this.props.history.push('/home')
        } else {
            message.warning('账号或密码错误');
        }
        
    }

    moment = ()=>{
        const self = this;
        confirm({
            title: '提示',
            content: <div style={{color:'red'}}>不登录无法享受音乐功能哦！！！</div>,
            okText: '确定',
            cancelText: '取消',
            onOk () {
                self.props.history.push('/home');
            },
            onCancel() {
                // console.log('Cancel');
            },
        });
    }

    render() {
        const { accounts,passpword,randomNum } = this.state;
        const bg = randomNum < 5 ? randomNum < 2.5 ? login : login : login3;

        const logoImg = randomNum < 5 ? logo2 : logo3;
        return (
            <div className="lee-login" style={{background: randomNum < 5 ? '#090437':'#0c2034'}}>
                 <div className="lee-login-bg" style={{backgroundImage: `url(${bg})`}}>
                     <div className={`lee-login-con ${randomNum < 5 ? '' : 'lee-logo-g'}`} style={randomNum < 5 ? {left: '7%'} : {right: '7%'}}>
                         <div className="lee-login-con-l">
                             <img src={logoImg} alt="" style={{marginTop:randomNum < 5 ? 0:50}}/>
                          </div>
                         <div className="lee-login-con-r">
                             <h3>米粒儿</h3>
                             <h4>MILIER</h4>
                             <p style={{textAlign: 'center'}}>请使用网易云音乐账号登录哟！</p>
                             <Input
                                 placeholder="Enter your username"
                                 prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                 value={accounts}
                                 onChange={(e) => this.setState({ accounts: e.target.value })}
                             />
                             <Input
                                 placeholder="Enter your password"
                                 prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                 value={passpword}
                                 onChange={(e) => this.setState({ passpword: e.target.value })}
                             />
                             <Button type="primary" onClick={this.login}>登录</Button>
                             <p onClick={this.moment}>暂时不登录</p>
                         </div>
                     </div>
                 </div>
            </div>
        );
  }
}

