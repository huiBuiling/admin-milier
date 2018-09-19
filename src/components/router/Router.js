import React, {Component}from 'react'
import {Route,Link,Switch} from 'react-router-dom'
import { Breadcrumb } from 'antd'

import TopBar from '../../containers/Bar/Top'
import LeaveWord from '../admin/LeaveWord'

import LeftBar from '../../containers/Bar/Left'
import Home from '../home/Home'
import Echat from '../component/echart/Echats'
import Note from '../note/Note'

class BasicExample extends Component{

    render(){
        return (
            <div className="app-all" >
                  <TopBar {...this.props}/>
                  <LeftBar  {...this.props}/>
                  <hr/>
                  <div className="right">
                      <Breadcrumb className="crumb">
                          <Breadcrumb.Item>Home</Breadcrumb.Item>
                          <Breadcrumb.Item><a href="">science</a></Breadcrumb.Item>
                      </Breadcrumb>
                      {/*<Switch>*/}
                        <Route exact path="/" component={Home}/>
                        <Route path="/echat" component={Echat}/>
                        <Route path="/note" component={Note}/>
                        <Route path="/leave" component={LeaveWord}/>
                      {/*</Switch>*/}
                  </div>
            </div>
        )
    }
}


export default BasicExample