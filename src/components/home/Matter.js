import React,{Component} from 'react';
import {Icon} from 'antd';

import LoadMoreList from './MatterList';
import LineChat from '../../common/lineChart/LineChat';
import BarChart from '../../common/barChart/BarChart';

// D:\toolUs\Microsoft VS Code\bin;D:\MongoDB\bin;D:\tools\cmder\cmder;C:\Users\Administrator\AppData\Roaming\npm
/**
 * @author hui
 * @date 2019/4/18
 * @Description: 申请事项
*/
export default class Matter extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
                <div className="lee-home-matter">
                    <h4><span>申请事项</span><a href="#">+ 更多</a></h4>
                    <div>
                        <div className="lee-home-matter-t">
                            <div className="lee-home-matter-t-i">
                                <div className="lee-home-matter-t-i-t">
                                    <p>已结事项<Icon type="info-circle" /></p>
                                    <p>1,000 <span></span></p>
                                </div>
                                <LineChat
                                    chatColor = {'137,75,222'}
                                    style={{height:50,width:350}}
                                    xAxis={{show :false}}
                                    yAxis={{show :false}}
                                    grid={{
                                        top: '9%',
                                        bottom: '2%',
                                        left: '0',
                                        right: '2%'
                                    }}

                                    xAxisData = {['绩效奖金','月入2万', '年终分红', '定期旅游', '周末双休','零食丰富','每周羽毛球','周末双休','零食丰富','每周羽毛球']}
                                    seriesData = {[0,80, 40, 200, 40,123,200, 40,123,0]}
                                    series = {
                                        {
                                            showSymbol:false,
                                            areaStyle: {
                                                color:'rgb(137,75,222)'  //线条下面积颜色
                                            }
                                        }
                                    }
                                />
                            </div>

                            <div className="lee-home-matter-t-i">
                                <div className="lee-home-matter-t-i-t">
                                    <p>待确认事项<Icon type="info-circle" /></p>
                                    <p>23 <span></span></p>
                                </div>
                                <BarChart
                                    style={{height:50,width:350}}
                                    xAxis={{show :false}}
                                    yAxis={{show :false}}
                                    grid={{
                                        top: '9%',
                                        bottom: '2%',
                                        left: '0',
                                        right: '2%'
                                    }}

                                    xAxisData = {['node','webchat', 'vue', 'vuex', 'elementUi','mongo', 'vue', 'vuex', 'elementUi','mongo','jade']}
                                    seriesData = {[0,500, 400, 200, 400,100, 400, 200, 400,100,0]}
                                    series = {{showSymbol:false}}
                                />
                            </div>
                        </div>

                        <div style={{clear:'both',paddingTop:20}}>
                            <LoadMoreList />
                        </div>
                    </div>
                </div>
			)
	}
}
