import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';

/**
 * @author hui
 * @date 2019/4/18
 * @Description: 柱状图
 * @param propsData:外层设置，可直接替换
 * @param grid:
 * @param tooltip:
 * @param xAxis:
 * @param xAxisData:
 * @param yAxis:
 * @param series:
 *
*/
export default class BarChart extends Component {

	constructor(props) {
		super(props);

		this.barEchat = {};
	}

	componentWillMount(){
	    const {
	        propsData,grid,tooltip,
            isXAxis, xAxis,xAxisData,
            isYAxis, yAxis,
            isSeries, series, seriesData,
            chatColor
	    } = this.props;

	    this.barEchat = {
            //背景
            backgroundColor: '#FFF',
            //显示位置
            grid: grid !== undefined ? grid :{
                top: '9%',
                bottom: '19%',
                left: '6%',
                right: '4%'
            },
            //提示
            tooltip: tooltip !== undefined ? tooltip :{
                trigger: 'axis',  //触发类型
                label: {
                    show: true
                },
                axisPointer: {
                    type: 'none'  //指示器类型 line shadow
                },
                backgroundColor:'rgba(255,255,255,.9)',  //浮层背景色
                borderWidth:1,
                // borderColor:chatColor !== undefined ? `rgb(${chatColor})` : 'rgb(245,250,254)',  //浮层边框色
                borderColor:'rgba(255,255,255,.9)',
                extraCssText: 'box-shadow: 0 0 10px rgb(174,174,174)',   //浮层阴影色
                padding:[5],
                textStyle:{
                    //文字样式
                    color:'rgba(87,87,87)',
                    widht:200
                },
                // formatter: '{b} : {c}',
                formatter: function( data ) {
                    let html = '';
                    html += '<style>p{margin:0;}em{background:' + data[0].color + '}';
                    html += 'em{width: 10px;height: 10px;display: inline-block;vertical-align: -5px;margin-right: 8px;border-radius: 50%;}</style>';
                    html += '<p><em>&nbsp;</em>' + data[0].name + ' : ' + data[0].data + '</p>';
                    return html;
                }
            },
            xAxis: isXAxis ? xAxis : {
                boundaryGap: true, //默认，坐标轴留白策略
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false,
                    alignWithLabel: true
                },
                data: xAxisData && xAxisData.length > 0 ? xAxisData : ['aa','bb','cc'],
                ...xAxis
            },
            yAxis: isYAxis ? yAxis : {
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        //有坐标轴
                        type: 'dashed',  //背景线条类型
                        color: chatColor !== undefined ? `rgba(${chatColor},.2)` : 'rgba(33,148,246,.2)'   //背景线条颜色
                    }
                },
                axisTick: {
                    show: false
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        //有坐标轴
                        color: chatColor !== undefined ? `rgb(${chatColor})` : 'rgb(245,250,254)' //背景颜色
                    }
                },
                ...yAxis
            },
            //数据
            series: isSeries ? series : [{
                type: 'bar',
                barWidth:20,     //柱条的宽度
                barGap:'13%',    //不同系列的柱间距离
                symbol: 'circle',
                symbolSize: 4,
                areaStyle: {
                    color:chatColor !== undefined ? `rgba(${chatColor},.4)` : 'rgba(33,148,246,.4)'  //线条下面积颜色，不设置默认为线条颜色
                },
                lineStyle: {
                    color: chatColor !== undefined ? `rgb(${chatColor})` : 'rgb(33,148,246)',   //线条颜色
                    shadowBlur: 12,
                    shadowColor: chatColor !== undefined ? `rgba(${chatColor},.9)` : 'rgba(33,148,246,.9)', //外层面积阴影背景色
                    shadowOffsetX: 1,
                    shadowOffsetY: 1
                },
                itemStyle: {
                    color: chatColor !== undefined ? `rgb(${chatColor})` : 'rgb(33,148,246)',  //圆点颜色
                    borderWidth: 1,
                    borderColor: '#FFF'
                },
                data: seriesData && seriesData.length > 0 ? seriesData :['300','400','500'],
                ...series
            }],
            ...propsData,
        };
    }

	render() {
	    const { style,chatStyle } = this.props;
		return (
            <div style={{width:'100%',clear:'both',...style}}>
                <ReactEcharts
                    option={this.barEchat}
                    style={{width: 'auto',height:'100%',...chatStyle}}
                />
            </div>
			)
	}
}
