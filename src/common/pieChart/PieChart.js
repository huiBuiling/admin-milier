import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';

/**
 * @author hui
 * @date 2019/4/18
 * @Description: 饼状图
 * @param propsData:外层设置，可直接替换
 * @param grid:
 * @param tooltip:
 * @param xAxis:
 * @param xAxisData:
 * @param yAxis:
 * @param series:
 *
*/
export default class PieChart extends Component {

	constructor(props) {
		super(props);

		this.pieEchat = {};
	}

	componentWillMount(){
	    const {
	        propsData, tooltip,
            isLegend,legend,
            isSeries, series, seriesData,
            chatColor
	    } = this.props;

	    this.pieEchat = {
            backgroundColor: "rgba(255,255,255,1)",
            color:chatColor && chatColor.length > 0 ? chatColor :
                ["#BC8DEE", "#8693F3","#89C3F8","#F2A695","#FCC667","#AEB7F9","#748BFA"],
            legend: isLegend ? legend : {
                orient: "vertical",
                icon: "circle",
                x: "70%",
                y: "center",
                data: ['待办任务1', "待办任务2", "待办任务3", "待办任务4", '待办任务5'],
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
                ...legend
            },
            series: isSeries ? series : [
                {
                    type: 'pie',
                    clockwise: false, //饼图的扇区是否是顺时针排布
                    minAngle: 20,     //最小的扇区角度（0 ~ 360）
                    radius: ["30%", "58%"],
                    center: ["35%", "50%"],  //饼图的中心（圆心）坐标
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
                    data:  seriesData && seriesData.length > 0 ? seriesData : [
                        {
                            name: '待办任务1',
                            value: 13
                        },
                        {
                            name: '待办任务2',
                            value: 25
                        },
                        {
                            name: '待办任务3',
                            value: 27
                        },
                        {
                            name: '待办任务4',
                            value: 30
                        },
                        {
                            name: '待办任务5',
                            value: 20
                        }
                    ],
                    ...series
            }],
            ...propsData
        };
    }

	render() {
	    const { style,chatStyle } = this.props;
		return (
            <div style={{width:'100%',clear:'both',...style}}>
                <ReactEcharts
                    option={this.pieEchat}
                    style={{width: 'auto',height:'100%',...chatStyle}}
                />
            </div>
			)
	}
}
