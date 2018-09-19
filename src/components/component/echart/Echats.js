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
            component:{
                bubble:BubbleEchat,
                line:LineEchat,
                columnar:ColumnarEchat,
                pie:PieEchat,
                radar:RadarEchat,
                map:MapEchat
            }
        }
    }

    render() {
    return (
      <div className="content">
        <Breadcrumb className="crumb">
            <Breadcrumb.Item>Components</Breadcrumb.Item>
            <Breadcrumb.Item><a href="">echats</a></Breadcrumb.Item>
        </Breadcrumb>

        <div className="echat">
      	  <ul>
              {
                  Object.values(this.state.component).map(item =>{
                      let Component = item;
                      return (
                          <li key={item}>
                              <Component />
                          </li>
                      )

                  })
              }
            {/*<li>
                <BubbleEchat />
            </li>
            <li>
                <LineEchat />
            </li>
            <li>
                <ColumnarEchat />
            </li>
            <li>
                <PieEchat />
            </li>
            <li>
                <RadarEchat />
            </li>*/}
            <li>
              {/*<h3>雷达图</h3>*/}
              {/*<ReactEcharts option={this.radarEchat} notMerge={true} lazyUpdate={true} />*/}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
