import React, { Component } from 'react';
import { Icon,Input,Button,Modal } from 'antd';
import { connect } from 'react-redux';
import { getLoginData } from '../../reducer/login.redux'

import login from '../../assert/images/login1.png';
import login3 from '../../assert/images/login3.png';

const confirm = Modal.confirm;

@connect(
    state=>state.login,
    { getLoginData }
)
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            accounts:'',
            passpword:'',
            randomNum:0
        }
    }

    componentDidMount(){
        const randomNum = Math.random() * 10;
        // console.log(randomNum)
        this.setState({randomNum});
    }

    //登录
    login = ()=>{
        const { accounts,passpword } = this.state;
        this.props.getLoginData(accounts,passpword);
        this.props.history.push('/home')
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
        const bgStyle = {backgroundImage: `url(${login})`};
        const bgStyle3 = {backgroundImage: `url(${login3})`};
        return (
            <div className="lee-login">
                 <div className="lee-login-bg" style={randomNum < 5 ? bgStyle : bgStyle3}>
                     <div className="lee-login-con" style={randomNum < 5 ? {left: '7%'} : {right: '7%'}}>
                         <div className="lee-login-con-l">

                         </div>
                         <div className="lee-login-con-r">
                             <h3>米粒儿</h3>
                             <h4>MILIER</h4>
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

