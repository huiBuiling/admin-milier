import React, { Component } from 'react';
import { Route,Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';

export default class LeftBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            links:[
                { path:'/home', icon:'home', title:'首页'},
                { path:'/echat', icon:'dot-chart', title:'图表'},
                { path:'/leave', icon:'pushpin', title:'记事'},
                { path:'/zanding', icon:'paper-clip', title:'暂定'},
                { path:'/zanding', icon:'paper-clip', title:'暂定'},
            ],
            active:1,
        }
    }

    render() {
        const { active,links } = this.state;
        return (
            <div className="lee-leftBar">
                <div className="lee-leftBar-top">
                    <div className="lee-leftBar-logo">LEE Admin</div>
                </div>
                <div className="lee-leftBar-bot">
                    <div className="lee-leftBar-list">
                        <ul>
                            {
                                links.map((item, index)=>{
                                        return <li className={active == index ? "active":null} key={index}>
                                                    <Link to={item.path} onClick={()=>this.setState({active:index})}><Icon type={item.icon} />{item.title}</Link>
                                               </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
  }
}

