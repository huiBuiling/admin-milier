import React, { Component } from 'react';
import { Route,Link,withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd';

@withRouter
export default class LeftBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            links:[
                { path:'/home', icon:'home', title:'首页'},
                { path:'/echat', icon:'dot-chart', title:'图表'},
                { path:'/leave', icon:'pushpin', title:'记事'},
                { path:'/map', icon:'global', title:'地图'},
                { path:'/conference', icon:'team', title:'会议'},
                { path:'/tenement', icon:'cluster', title:'物业'},
                { path:'/playerList', icon:'customer-service', title:'音乐'},
                { path:'/zanding', icon:'paper-clip', title:'暂定'},
                { path:'/zanding', icon:'paper-clip', title:'暂定'},
            ],
        }
    }

    render() {
        const { pathname } = this.props.location;
        const { links } = this.state;
        return (
            <div className="lee-leftBar">
                <div className="lee-leftBar-top">
                    <div className="lee-leftBar-logo">LEE Admin</div>
                </div>
                <div className="lee-leftBar-bot">
                    <div className="lee-leftBar-list">
                        <ul>
                            {links.map((item, index)=>{
                                return <li className={pathname == item.path ? "active":null} key={index}>
                                            <Link to={item.path} onClick={()=>this.setState({active:index})}><Icon type={item.icon} />{item.title}</Link>
                                       </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
  }
}

