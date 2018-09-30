import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'

import Home from "../../components/home/Home";
import HomeImage from '../../components/home/ImageMusic'
import Echat from "../../components/echat/Echats";
import Leave from "../../components/leave/Leave";
import Map from '../../components/echat/MapEchat'
import Conference from '../../components/conference/Conference'
import Tenement from '../../components/tenement/Tenement'
import PlayerList from '../../components/home/music/PlayerList'

export default class RightBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            route:[
                {exact:true, path:'/home', component:Home},
                {exact:true, path:'/home:image', component:HomeImage},
                {path:'/echat', component:Echat},
                {path:'/leave', component:Leave},
                {path:'/map', component:Map},
                {path:'/conference', component:Conference},
                {path:'/tenement', component:Tenement},
                {path:'/playerList', component:PlayerList},
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

