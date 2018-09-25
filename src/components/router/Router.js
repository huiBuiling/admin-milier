import React, {Component}from 'react'
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import { Icon, Breadcrumb } from 'antd'

import TopBar from '../../containers/Bar/Top'
import LeaveWord from '../leave/leaveView/LeaveWord'

import LeftBar from '../../containers/Bar/Left'
import Home from '../home/Home'
import Echat from '../echat/Echats'
import Leave from '../leave/Leave'

@withRouter
export default class Routers extends Component{
    constructor(props){
        super(props);
        this.state={
            route:[
                {exact:true, path:'/', component:Home},
                {path:'/components/echat', component:Echat},
                {path:'/leave', component:Leave},
                {path:'/leave:view', component:LeaveWord}
            ],
            breadcrumbNameMap:{
                '/components':'components',
                '/components/echat': 'echat',
                '/leave': 'leave',
                '/leave:view': 'view'
            }
        }
    }

    render(){
        const { location } = this.props;
        const pathSnippets = location.pathname.split('/').filter(i => i);
        const extraBreadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            const text = this.state.breadcrumbNameMap[url];
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}>
                        {text}
                    </Link>
                </Breadcrumb.Item>
            );
        });
        const breadcrumbItems = [(
            <Breadcrumb.Item key="home">
                <Link to="/"><Icon type="home" /></Link>
            </Breadcrumb.Item>
        )].concat(extraBreadcrumbItems);

        return (
            <div className="app-all" >
                  <TopBar {...this.props}/>
                  <LeftBar  {...this.props}/>
                  <hr/>
                  <div className="right">
                      {/*<Breadcrumb className="crumb">
                          <Breadcrumb.Item>Home</Breadcrumb.Item>
                          <Breadcrumb.Item><a href="">science</a></Breadcrumb.Item>
                      </Breadcrumb>*/}

                      <Breadcrumb className="crumb">
                          {breadcrumbItems}
                      </Breadcrumb>
                      {
                          this.state.route.map(item=>{
                              return <Route key={item.path} exact={item.exact ? true:false} path={item.path} component={item.component}/>
                          })
                      }
                  </div>
            </div>
        )
    }
}
