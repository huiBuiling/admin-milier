import React,{Component} from 'react';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import 'echarts-liquidfill';

/**
 * 我的待办
 */
export default class DealtWithChat extends Component {

	constructor(props) {
		super(props);
	}

    option = {
        backgroundColor: "rgba(255,255,255,1)",
        color:["#BC8DEE", "#8693F3","#89C3F8","#F2A695","#FCC667","#AEB7F9","#748BFA"],
        legend: {
            orient: "vertical",
            icon: "circle",
            x: "70%",
            y: "center",
            data: ['工种1', "工种2", "工种3", "工种4", '工种5'],
            itemWidth: 20,
            itemHeight: 14,
            itemGap :15,
            formatter :function(name){
                return '   '+name
            },
            textStyle: {
                color: "#324889",
                fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: 14,
                padding: [2, 0, 0, 0],
            },
        },
        series: [{
            name: '违规次数',
            type: 'pie',
            clockwise: false, //饼图的扇区是否是顺时针排布
            minAngle: 20, //最小的扇区角度（0 ~ 360）
            radius: ["30%", "58%"],
            // center: ["35%", "50%"],
            avoidLabelOverlap: false,
            itemStyle: { //图形样式
                normal: {
                    borderColor: '#ffffff',
                    borderWidth: 10,
                },
            },
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    formatter: '{text|{b}}\n{value|{d}%}',
                    rich: {
                        text: {
                            color: "#666",
                            fontSize: 14,
                            align: 'center',
                            verticalAlign: 'middle',
                            padding: 5
                        },
                        value: {
                            color: "#8693F3",
                            fontSize: 24,
                            align: 'center',
                            verticalAlign: 'middle',
                        },
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: 46,
                    }
                }
            },
            data: [
                {
                    name: '工种1',
                    value: 13
                },
                {
                    name: '工种2',
                    value: 25
                },
                {
                    name: '工种3',
                    value: 27
                },
                {
                    name: '工种4',
                    value: 30
                },
                {
                    name: '工种5',
                    value: 20
                }
            ]
        }]
    };

	render() {
		return (
            <div style={{height: '380px', width: '100%',margin:'0 auto'}}>
                <ReactEcharts option={this.option} style={{height: '100%', width: '100%',margin:'0 auto'}}/>
            </div>
			)
	}
}
