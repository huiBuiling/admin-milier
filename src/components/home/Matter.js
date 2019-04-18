import React,{Component} from 'react';
import {Icon} from 'antd';

import LoadMoreList from './MatterList';
import NavChat from '../../common/lineChart/LineChat';

/**
 * @author hui
 * @date 2019/4/18
 * @Description: 申请事项
*/
export default class Matter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			imgList:[
				{name:'html',text:'Html'},
                {name:'bootstrap',text:'BootStrap'},
                {name:'js',text:'Javascript'},
                {name:'jquery',text:'jQuery'},
                {name:'angular',text:'Angular'},
                {name:'react',text:'React'},
                {name:'vue',text:'Vue'}
			]
		};
	}

	render() {
		const imgList = this.state.imgList;
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
                                <NavChat
                                    style={{height:50,width:400}}
                                    xAxis={{show :false}}
                                    yAxis={{show :false}}
                                    grid={{
                                        top: '2%',
                                        bottom: '2%',
                                        left: '0',
                                        right: '2%'
                                    }}

                                    xAxisData = {['','月入2万', '年终分红', '定期旅游', '周末双休','']}
                                    seriesData = {[0,500, 400, 200, 400,0]}
                                />
                            </div>

                            <div className="lee-home-matter-t-i">
                                <div className="lee-home-matter-t-i-t">
                                    <p>待确认事项<Icon type="info-circle" /></p>
                                    <p>23 <span></span></p>
                                </div>
                                <NavChat
                                    style={{height:50,width:400}}
                                    xAxis={{show :false}}
                                    yAxis={{show :false}}
                                    grid={{
                                        top: '2%',
                                        bottom: '2%',
                                        left: '0',
                                        right: '2%'
                                    }}

                                    xAxisData = {['','月入2万', '年终分红', '定期旅游', '周末双休','']}
                                    seriesData = {[0,500, 400, 200, 400,0]}
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
