import React,{Component} from 'react';
import DealtWithChat from './DealtWithChat';
import PieChart from '../../common/pieChart/PieChart';

/**
 * @author hui
 * @date 2019/4/18
 * @Description: 我的已办
*/
export default class Processed extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
            <div className="lee-home-deal">
                <h4><span>我的已办</span><a href="#">+ 更多</a></h4>
                <div>
                    <PieChart
                        chatColor={ ["#F2A695","#FCC667","#AEB7F9"]}
                        seriesData={[
                            {
                                name: '已办任务1',
                                value: 13
                            },
                            {
                                name: '已办任务2',
                                value: 25
                            },
                            {
                                name: '已办任务3',
                                value: 27
                            }
                        ]}
                        legend={{data:['已办任务1','已办任务2','已办任务3']}}
                        style={{height:300}}
                    />
                </div>
            </div>
			)
	}
}
