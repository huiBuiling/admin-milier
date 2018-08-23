import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import '../../assert/index.css';
import { Menu, Icon } from 'antd';
import admin from '../../assert/images/admin.jpg'

const SubMenu = Menu.SubMenu;

class LeftBar extends Component {
  state = {
    current: '1',
    openKeys: []
  }

  handleClick = (e) => {
    console.log('Clicked: ', e);
    this.setState({ current: e.key });
  }

  onOpenChange = (openKeys) => {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  }

  getAncestorKeys = (key) => {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  }

  render() {
    return (
      <div className="leftbar">
        <div className="introduce">
          <img src={admin} alt="头像"/>
          <h3>米粒儿</h3>
        </div>

        <Menu theme="dark" mode={this.props.mode}
        openKeys={this.state.openKeys} selectedKeys={[this.state.current]} style={{ width: 240 }} onOpenChange={this.onOpenChange} onClick={this.handleClick}>

        <Menu.Item key="1" className="intro">
            <Link to="/"><span><Icon type="home" />介绍</span></Link>
        </Menu.Item>

        <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>组件</span></span>}>
          <Menu.Item key="2"><Link to="/echat">Echat</Link></Menu.Item>
          <Menu.Item key="3">Table</Menu.Item>
          <Menu.Item key="4">Tree</Menu.Item>
        </SubMenu>        
        <SubMenu key="sub2" disabled title={<span><Icon type="tag-o" /><span>项目</span></span>}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        </SubMenu>
        
        <Menu.Item key="9" className="intro">
            <Link to="/note"><span><Icon type="edit" />笔记</span></Link>
        </Menu.Item>
        <SubMenu key="sub4" disabled title={<span><Icon type="tag-o" /><span>论坛</span></span>}>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" disabled title={<span><Icon type="usergroup-add" /><span>兴趣</span></span>}>
          <Menu.Item key="13">Option 9</Menu.Item>
          <Menu.Item key="14">Option 10</Menu.Item>
          <Menu.Item key="15">Option 11</Menu.Item>
          <Menu.Item key="16">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
      </div>
    );
  }
}

export default LeftBar;
