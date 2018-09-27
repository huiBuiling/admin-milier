import React,{ Component } from 'react';
import ReactEcharts from 'echarts-for-react'
import BarImg from '../../containers/Bar/RightTopBar';

export default class MapEchat extends Component {

    //小地图
    mapEchat = {
        tooltip: {},
        visualMap: {
            min: 0,
            max: 1500,
            left: 'left',
            top: 'bottom',
            text: ['High','Low'],
            seriesIndex: [1],
            inRange: {
                color: ['#e0ffff', '#006edd']
            },
            calculable : true
        },
        geo: {
            type: 'map',
            map: 'china',
            roam: true,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: 'rgba(0,0,0,0.4)'
                    }
                }
            },
            itemStyle: {
                normal:{
                    borderColor: 'rgba(0, 0, 0, 0.2)'
                },
                emphasis:{
                    areaColor: null,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        series : [
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                symbolSize: 20,
                symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
                symbolRotate: 35,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F06C00'
                    }
                }
            },
            {
                name: 'android',
                type: 'map',
                geoIndex: 0,
                // tooltip: {show: false},
                data:[
                    {name: '北京', value: 300},
                    {name: '天津', value: Math.round(Math.random()*1000)},
                    {name: '上海', value: Math.round(Math.random()*1000)},
                    {name: '重庆', value: Math.round(Math.random()*1000)},
                    {name: '河北', value: Math.round(Math.random()*1000)},
                    {name: '河南', value: Math.round(Math.random()*1000)},
                    {name: '云南', value: Math.round(Math.random()*1000)},
                    {name: '辽宁', value: Math.round(Math.random()*1000)},
                    {name: '黑龙江', value: Math.round(Math.random()*1000)},
                    {name: '湖南', value: Math.round(Math.random()*1000)},
                    {name: '安徽', value: Math.round(Math.random()*1000)},
                    {name: '山东', value: Math.round(Math.random()*1000)},
                    {name: '新疆', value: Math.round(Math.random()*1000)},
                    {name: '江苏', value: Math.round(Math.random()*1000)},
                    {name: '浙江', value: Math.round(Math.random()*1000)},
                    {name: '江西', value: Math.round(Math.random()*1000)},
                    {name: '湖北', value: Math.round(Math.random()*1000)},
                    {name: '广西', value: Math.round(Math.random()*1000)},
                    {name: '甘肃', value: Math.round(Math.random()*1000)},
                    {name: '山西', value: Math.round(Math.random()*1000)},
                    {name: '内蒙古', value: Math.round(Math.random()*1000)},
                    {name: '陕西', value: Math.round(Math.random()*1000)},
                    {name: '吉林', value: Math.round(Math.random()*1000)},
                    {name: '福建', value: Math.round(Math.random()*1000)},
                    {name: '贵州', value: Math.round(Math.random()*1000)},
                    {name: '广东', value: Math.round(Math.random()*1000)},
                    {name: '青海', value: Math.round(Math.random()*1000)},
                    {name: '西藏', value: Math.round(Math.random()*1000)},
                    {name: '四川', value: Math.round(Math.random()*1000)},
                    {name: '宁夏', value: Math.round(Math.random()*1000)},
                    {name: '海南', value: Math.round(Math.random()*1000)},
                    {name: '台湾', value: Math.round(Math.random()*1000)},
                    {name: '香港', value: Math.round(Math.random()*1000)},
                    {name: '澳门', value: Math.round(Math.random()*1000)}
                ]
            }
        ]
    };

    render() {
    return (
        <div>
              <BarImg />
              <ReactEcharts
                  style={{height: '600px', width: '100%'}}
                  option={this.mapEchat}
                  notMerge={true}
                  lazyUpdate={true} />
          </div>
    );
  }
}

