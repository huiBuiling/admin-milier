import React,{Component} from 'react';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import 'echarts-liquidfill';

/**
 * 介绍图表
 */
export default class IntroChart extends Component {

	constructor(props) {
		super(props);
	}

    ballEchat = {
        title: {
            text: 'CPU使用率',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 17,
                color: 'rgb(97, 142, 205)'
            }
        },
        series: [{
            type: 'liquidFill',
            radius: '80%',
            center : ['50%', '70%'],
            data: [{
                name: 'First Data',
                value: 0.6
            }, 0.5, 0.4, 0.3],
            backgroundStyle: {
                borderWidth: 5
            },
            label: {
                normal: {
                    formatter: 0.25 * 100 + '%',
                    textStyle: {
                        fontSize: 50
                    }
                }
            }
        }]
    }

	render() {
		return (
            <div>
                <ReactEcharts option={this.ballEchat} style={{height: '240px', width: '80%',margin:'0 auto'}}/>
            </div>
			)
	}
}
