import React,{ Component } from 'react';
import {Breadcrumb} from 'antd'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'
import 'echarts/map/js/china.js'

import BubbleEchat from './BubbleEchat'
import LineEchat from './LineEchat'
import ColumnarEchat from './ColumnarEchat'
import PieEchat from './PieEchat'

import MapEchat from './MapEchat'
import RadarEchat from './RadarEchat'

/**
 * echats
 * 1. 气泡图 bubble
 * 2. 折线图 line
 * 3. 柱状图 columnar
 * 4. 饼状图 pie
 * 5. 雷达图 radar
 * 6. 小地图 map
 */
export default class Echat extends Component {
    constructor(props){
        super(props);
        this.state={
            component:[
                {type:BubbleEchat,name:'气泡图'},
                {type:LineEchat,name:'折线图'},
                {type:ColumnarEchat,name:'柱状图'},
                {type:PieEchat,name:'饼状图'},
                {type:RadarEchat,name:'雷达图'},
                {type:MapEchat,name:'小地图',isAll:true}
            ]
        }
    }

    render() {
        const { component } = this.state;
        return (
              <div className="lee-rbb-all">
                    <div className="echat">
                          <ul>
                              {component.map(item =>{
                                  let Component = item.type;
                                  if(item.isAll){
                                      return (
                                          <li key={item.type} style={{width:'100%',margin:0}}>
                                              <div className="lee-card">
                                                  <h3 className="lee-card-title">{item.name}</h3>
                                                  <div className="lee-card-con">
                                                      <Component/>
                                                  </div>
                                              </div>
                                          </li>
                                      )
                                  }else {
                                      return (
                                          <li key={item.type}>
                                              <div className="lee-card">
                                                  <h3 className="lee-card-title">{item.name}</h3>
                                                  <div className="lee-card-con">
                                                      <Component/>
                                                  </div>
                                              </div>
                                          </li>
                                      )
                                  }})
                              }
                          </ul>
                    </div>
              </div>
        );
  }
}
