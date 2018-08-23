import React, {Component}from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Breadcrumb } from 'antd'

import TopBar from '../../containers/Bar/Top'
import LeaveWord from '../admin/LeaveWord'

import LeftBar from '../../containers/Bar/Left'
import Home from '../home/Home'
import Echat from '../component/Echats'
import Note from '../note/Note'

import {Switch } from 'antd';

class BasicExample extends Component{

  render(){
    // console.log(this.props.mode)
    return (
      <Router>
        <div className="app-all" > 
          <TopBar {...this.props}/> 
          <LeftBar  {...this.props}/>
          <hr/>
          <div className="right">
            <Breadcrumb className="crumb">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item><a href="">science</a></Breadcrumb.Item>
            </Breadcrumb>
            <Route exact path="/" component={Home}/>
            <Route path="/echat" component={Echat}/>
            <Route path="/note" component={Note}/>
            <Route path="/leave" component={LeaveWord}/>
          </div>              
        </div>
      </Router>
      )
  }
}


export default BasicExample