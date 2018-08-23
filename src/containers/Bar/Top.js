import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import logo from '../../assert/images/logo.png'
import { Icon,Avatar, Badge,Switch } from 'antd';

class Top extends Component {

  handlerMode(value){
    this.props.changeMode(!value);
   console.log('aaaaaaaa')
 }
 render() {
  return (
    <div className="top">
      <div className="logo">
        <img src={logo}/>      
        <Switch onChange={this.handlerMode.bind(this)}/><Icon type="menu-fold" />		
      </div>
      <div className="menu">
        <span>Dashboard</span>
        <span>User</span>
        <span>Settings</span>
      </div>
      <div className="setting">
        <span className="mail">
        <Badge count={1}><Icon type="mail" /></Badge>
        </span>
        <Icon type="like-o" />
        <Icon type="search" />
        <span className="user">
        <Link to="/leave"><Badge dot><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Badge></Link>
        </span>			
        <Icon type="menu-unfold" />
      </div> 
    </div>
    );
}
}

export default Top;
