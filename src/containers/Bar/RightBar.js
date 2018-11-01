import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import Login from '../../containers/login/login'
import Home from "../../components/home/Home";
import HomeImage from '../../components/home/ImageMusic';
import Intro from '../../components/intro/Intro';
import Echat from "../../components/echat/Echats";
import Leave from "../../components/leave/Leave";
import Map from '../../components/echat/MapEchat';
import Conference from '../../components/conference/Conference';
import Tenement from '../../components/tenement/Tenement';
import CloundPlayerList from '../../components/cloundMusic/CloundPlayerList';

export default class RightBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            route:[
                {exact:true, path:'/login', component:Login},
                {path:'/home', component:Home},
                {path:'/home:image', component:HomeImage},
                {path:'/intro', component:Intro},
                {path:'/echat', component:Echat},
                {path:'/leave', component:Leave},
                {path:'/map', component:Map},
                {path:'/conference', component:Conference},
                {path:'/tenement', component:Tenement},
                {path:'/cloundPlayerList', component:CloundPlayerList},
            ]
        }
    }

    render() {
        return (
            <div className="lee-rightBar-bot">
                <div className="lee-rightBar-bot-bot" >
                    {
                        this.state.route.map(item=>{
                            return <Route key={item.path} exact={item.exact ? true:false} path={item.path} component={item.component}/>
                        })
                    }
                </div>
            </div>
        );
  }
}

