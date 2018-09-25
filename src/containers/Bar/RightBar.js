import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'

import Home from "../../components/index";
import Echat from "../../components/echat/Echats";
import Leave from "../../components/leave/Leave";

export default class RightBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            route:[
                {exact:true, path:'/home', component:Home},
                {path:'/echat', component:Echat},
                {path:'/leave', component:Leave},
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

