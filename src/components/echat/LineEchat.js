import React,{ Component } from 'react';
import ReactEcharts from 'echarts-for-react'

export default class LineEchat extends Component {

  //折线图
  lineEchat = {
        title: {
            text: '未来一周气温变化',
            textStyle:{
                color:'#aaa',
                fontStyle:'normal',
                fontWeight:'normal',
                fontSize:'16'
            },
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            right:'10%',
            data: [
                {
                    name: '最高气温',
                    icon: 'circle'
                },
                {
                    name: '最低气温',
                    icon: 'circle'
                }
            ]
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {type: ['line', 'bar']},
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} °C'
            }
        },
        series: [
            {
                name:'最高气温',
                type:'line',
                color: "#FC9DB2", //line tooltip color
                lineStyle: { //line color
                    color: "#FA5071"
                },
                smooth: true,
                data:[11, 11, 15, 13, 12, 13, 10],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'最低气温',
                type:'line',
                color: "#9DC4FA", //折线图颜色,搭配markArea为面积图
                lineStyle: { //折线的颜色
                    color: "#3B9DFC"
                },
                smooth: true, //平滑处理
                data:[1, -2, 2, 5, 3, 2, 0],
                markPoint: {
                    data: [
                        {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'},
                        [{
                            symbol: 'none',
                            x: '90%',
                            yAxis: 'max'
                        }, {
                            symbol: 'circle',
                            label: {
                                normal: {
                                    position: 'start',
                                    formatter: '最大值'
                                }
                            },
                            type: 'max',
                            name: '最高点'
                        }]
                    ]
                }
            }
        ]
    };

  render() {
    return (
      <div>
          <ReactEcharts
              style={{width:'100%',height:'350px'}}
              option={this.lineEchat}
              notMerge={true}
              lazyUpdate={true}
          />
      </div>
    );
  }
}

