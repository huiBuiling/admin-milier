import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import '../../assert/index.css';
import { Menu, Icon } from 'antd';
import admin from '../../assert/images/admin.jpg'

const SubMenu = Menu.SubMenu;

export default class LeftBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            current: '1',
            openKeys: [],
            menu:[
                {
                   isMenu:false,
                   icon:'home',
                    title:'介绍',
                   path:'/'
                },
                {
                    icon:'appstore',
                    title:'组件',
                    children:[
                        {path:'/echat',text:'Echat'},
                        {path:'/',text:'Table'},
                        {path:'/',text:'Tree'}
                    ]
                },
                {
                    icon:'edit',
                    title:'笔记',
                    path:'/note'
                }
            ]
        }
    }


    handleClick = (e) => {
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

                <Menu
                    theme="dark"
                    mode={this.props.mode}
                    openKeys={this.state.openKeys}
                    selectedKeys={[this.state.current]}
                    style={{ width: 240 }}
                    onOpenChange={this.onOpenChange}
                    onClick={this.handleClick}
                >
                    {
                        this.state.menu.map((item,index) =>{
                            if(item.children){
                                let children = item.children.map((itemC,indexC) =>{
                                    return <Menu.Item key={`sub${index}-${indexC}`}><Link to={itemC.path}>{itemC.text}</Link></Menu.Item>
                                })
                                return <SubMenu key={`sub${index}`} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>{children}</SubMenu>
                            }else{
                                return <Menu.Item key={`sub${index}`}>
                                            <Link to={item.path}><span><Icon type={item.icon} />{item.title}</span></Link>
                                       </Menu.Item>
                            }
                        })
                    }
                </Menu>
          </div>
        );
  }
}

