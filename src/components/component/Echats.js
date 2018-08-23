import React,{ Component } from 'react';
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'
import { Breadcrumb } from 'antd';
import 'echarts/map/js/china.js'

//气泡图数据
var bubbledata = [
    [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
    [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
];

//小地图
var data = [
    {name: '海门', value: 9},
    {name: '鄂尔多斯', value: 12},
    {name: '招远', value: 12},
    {name: '舟山', value: 12},
    {name: '齐齐哈尔', value: 14},
    {name: '盐城', value: 15},
    {name: '赤峰', value: 16},
    {name: '青岛', value: 18},
    {name: '乳山', value: 18},
    {name: '金昌', value: 19},
    {name: '泉州', value: 21},
    {name: '南通', value: 23},
    {name: '拉萨', value: 24},
    {name: '云浮', value: 24},
    {name: '上海', value: 25},
    {name: '攀枝花', value: 25},
    {name: '承德', value: 25},
    {name: '汕尾', value: 26},
    {name: '丹东', value: 27},
    {name: '瓦房店', value: 30},
    {name: '延安', value: 38},
    {name: '咸阳', value: 43},
    {name: '南昌', value: 54},
    {name: '柳州', value: 54},
    {name: '三亚', value: 54},
    {name: '泸州', value: 57},
    {name: '克拉玛依', value: 72}
];

var geoCoordMap = {
   '海门':[121.15,31.89],
   '鄂尔多斯':[109.781327,39.608266],
   '招远':[120.38,37.35],
   '舟山':[122.207216,29.985295],
   '齐齐哈尔':[123.97,47.33],
   '盐城':[120.13,33.38],
   '赤峰':[118.87,42.28],
   '青岛':[120.33,36.07],
   '乳山':[121.52,36.89],
   '金昌':[102.188043,38.520089],
   '泉州':[118.58,24.93],
   '莱西':[120.53,36.86],
   '日照':[119.46,35.42],
   '胶南':[119.97,35.88],
   '南通':[121.05,32.08],
   '拉萨':[91.11,29.97],
   '云浮':[112.02,22.93],
   '梅州':[116.1,24.55],
   '文登':[122.05,37.2],
   '上海':[121.48,31.22],
   '攀枝花':[101.718637,26.582347],
   '威海':[122.1,37.5],
   '承德':[117.93,40.97],
   '厦门':[118.1,24.46],
   '汕尾':[115.375279,22.786211],
   '潮州':[116.63,23.68],
   '丹东':[124.37,40.13],
   '太仓':[121.1,31.45],
   '曲靖':[103.79,25.51],
   '烟台':[121.39,37.52],
   '福州':[119.3,26.08],
   '瓦房店':[121.979603,39.627114],
   '即墨':[120.45,36.38],
   '抚顺':[123.97,41.97],
   '玉溪':[102.52,24.35],
   '张家口':[114.87,40.82],
   '阳泉':[113.57,37.85],
   '莱州':[119.942327,37.177017],
   '湖州':[120.1,30.86],
   '汕头':[116.69,23.39],
   '昆山':[120.95,31.39],
   '宁波':[121.56,29.86],
   '湛江':[110.359377,21.270708],
   '揭阳':[116.35,23.55],
   '荣成':[122.41,37.16],
   '连云港':[119.16,34.59],
   '葫芦岛':[120.836932,40.711052],
   '常熟':[120.74,31.64],
   '东莞':[113.75,23.04],
   '河源':[114.68,23.73],
   '淮安':[119.15,33.5],
   '泰州':[119.9,32.49],
   '南宁':[108.33,22.84],
   '营口':[122.18,40.65],
   '惠州':[114.4,23.09],
   '江阴':[120.26,31.91],
   '蓬莱':[120.75,37.8],
   '韶关':[113.62,24.84],
   '嘉峪关':[98.289152,39.77313],
   '广州':[113.23,23.16],
   '延安':[109.47,36.6],
   '太原':[112.53,37.87],
   '清远':[113.01,23.7],
   '中山':[113.38,22.52],
   '昆明':[102.73,25.04],
   '寿光':[118.73,36.86],
   '盘锦':[122.070714,41.119997],
   '长治':[113.08,36.18],
   '深圳':[114.07,22.62],
   '珠海':[113.52,22.3],
   '宿迁':[118.3,33.96],
   '咸阳':[108.72,34.36],
   '铜川':[109.11,35.09],
   '平度':[119.97,36.77],
   '佛山':[113.11,23.05],
   '海口':[110.35,20.02],
   '江门':[113.06,22.61],
   '章丘':[117.53,36.72],
   '肇庆':[112.44,23.05],
   '大连':[121.62,38.92],
   '临汾':[111.5,36.08],
   '吴江':[120.63,31.16],
   '石嘴山':[106.39,39.04],
   '沈阳':[123.38,41.8],
   '苏州':[120.62,31.32],
   '茂名':[110.88,21.68],
   '嘉兴':[120.76,30.77],
   '长春':[125.35,43.88],
   '胶州':[120.03336,36.264622],
   '银川':[106.27,38.47],
   '张家港':[120.555821,31.875428],
   '三门峡':[111.19,34.76],
   '锦州':[121.15,41.13],
   '南昌':[115.89,28.68],
   '柳州':[109.4,24.33],
   '三亚':[109.511909,18.252847],
   '自贡':[104.778442,29.33903],
   '吉林':[126.57,43.87],
   '阳江':[111.95,21.85],
   '泸州':[105.39,28.91],
   '西宁':[101.74,36.56],
   '宜宾':[104.56,29.77],
   '呼和浩特':[111.65,40.82],
   '成都':[104.06,30.67],
   '大同':[113.3,40.12],
   '镇江':[119.44,32.2],
   '桂林':[110.28,25.29],
   '张家界':[110.479191,29.117096],
   '宜兴':[119.82,31.36],
   '北海':[109.12,21.49],
   '西安':[108.95,34.27],
   '金坛':[119.56,31.74],
   '东营':[118.49,37.46],
   '牡丹江':[129.58,44.6],
   '遵义':[106.9,27.7],
   '绍兴':[120.58,30.01],
   '扬州':[119.42,32.39],
   '常州':[119.95,31.79],
   '潍坊':[119.1,36.62],
   '重庆':[106.54,29.59],
   '台州':[121.420757,28.656386],
   '南京':[118.78,32.04],
   '滨州':[118.03,37.36],
   '贵阳':[106.71,26.57],
   '无锡':[120.29,31.59],
   '本溪':[123.73,41.3],
   '克拉玛依':[84.77,45.59],
   '渭南':[109.5,34.52],
   '马鞍山':[118.48,31.56],
   '宝鸡':[107.15,34.38],
   '焦作':[113.21,35.24],
   '句容':[119.16,31.95],
   '北京':[116.46,39.92],
   '徐州':[117.2,34.26],
   '衡水':[115.72,37.72],
   '包头':[110,40.58],
   '绵阳':[104.73,31.48],
   '乌鲁木齐':[87.68,43.77],
   '枣庄':[117.57,34.86],
   '杭州':[120.19,30.26],
   '淄博':[118.05,36.78],
   '鞍山':[122.85,41.12],
   '溧阳':[119.48,31.43],
   '库尔勒':[86.06,41.68],
   '安阳':[114.35,36.1],
   '开封':[114.35,34.79],
   '济南':[117,36.65],
   '德阳':[104.37,31.13],
   '温州':[120.65,28.01],
   '九江':[115.97,29.71],
   '邯郸':[114.47,36.6],
   '临安':[119.72,30.23],
   '兰州':[103.73,36.03],
   '沧州':[116.83,38.33],
   '临沂':[118.35,35.05],
   '南充':[106.110698,30.837793],
   '天津':[117.2,39.13],
   '富阳':[119.95,30.07],
   '泰安':[117.13,36.18],
   '诸暨':[120.23,29.71],
   '郑州':[113.65,34.76],
   '哈尔滨':[126.63,45.75],
   '聊城':[115.97,36.45],
   '芜湖':[118.38,31.33],
   '唐山':[118.02,39.63],
   '平顶山':[113.29,33.75],
   '邢台':[114.48,37.05],
   '德州':[116.29,37.45],
   '济宁':[116.59,35.38],
   '荆州':[112.239741,30.335165],
   '宜昌':[111.3,30.7],
   '义乌':[120.06,29.32],
   '丽水':[119.92,28.45],
   '洛阳':[112.44,34.7],
   '秦皇岛':[119.57,39.95],
   '株洲':[113.16,27.83],
   '石家庄':[114.48,38.03],
   '莱芜':[117.67,36.19],
   '常德':[111.69,29.05],
   '保定':[115.48,38.85],
   '湘潭':[112.91,27.87],
   '金华':[119.64,29.12],
   '岳阳':[113.09,29.37],
   '长沙':[113,28.21],
   '衢州':[118.88,28.97],
   '廊坊':[116.7,39.53],
   '菏泽':[115.480656,35.23375],
   '合肥':[117.27,31.86],
   '武汉':[114.31,30.52],
   '大庆':[125.03,46.58]
};

function convertData(data) {
   var res = [];
   for (var i = 0; i < data.length; i++) {
       var geoCoord = geoCoordMap[data[i].name];
       if (geoCoord) {
           res.push({
               name: data[i].name,
               value: geoCoord.concat(data[i].value)
           });
       }
   }
   return res;
};

function randomValue() {
    return Math.round(Math.random()*1000);
}



class Echat extends Component {

  //气泡图
  bubbleEchat = {
    backgroundColor: new echarts.graphic.RadialGradient(1, 1, 0.8, [{
        offset: 0,
        color: '#fff'
    }, {
        offset: 1,
        color: '#fff'
    }]),
    title: {
        text: '1990 与 2015 年各国家人均寿命与 GDP'
    },
    legend: {
        right: 10,
        data: ['1990', '2015']
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    series: [{
        name: '1990',
        data: bubbledata[0],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.bubbledata[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                }])
            }
        }
    }, {
        name: '2015',
        data: bubbledata[1],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(bubbledata[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.bubbledata[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                }])
            }
        }
    }]
  }

  //折线图
  lineEchat = {
    title: {
        text: '未来一周气温变化',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['最高气温','最低气温']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
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

  //柱状图
  columnarEchat = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'邮件营销',
            type:'bar',
            stack: '广告',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'bar',
            stack: '广告',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'bar',
            stack: '广告',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'搜索引擎',
            type:'bar',
            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            }
        },
        {
            name:'百度',
            type:'bar',
            barWidth : 5,
            stack: '搜索引擎',
            data:[620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name:'谷歌',
            type:'bar',
            stack: '搜索引擎',
            data:[120, 132, 101, 134, 290, 230, 220]
        },
        {
            name:'必应',
            type:'bar',
            stack: '搜索引擎',
            data:[60, 72, 71, 74, 190, 130, 110]
        },
        {
            name:'其他',
            type:'bar',
            stack: '搜索引擎',
            data:[62, 82, 91, 84, 109, 110, 120]
        }
    ]
  };

  //饼状图
  pieEchat = {
    title : {
        // text: '南丁格尔玫瑰图',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'半径模式',
            type:'pie',
            radius : [20, 110],
            center : ['25%', '50%'],
            roseType : 'radius',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:10, name:'rose1'},
                {value:5, name:'rose2'},
                {value:15, name:'rose3'},
                {value:25, name:'rose4'},
                {value:20, name:'rose5'},
                {value:35, name:'rose6'},
                {value:30, name:'rose7'},
                {value:40, name:'rose8'}
            ]
        },
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['75%', '50%'],
            roseType : 'area',
            data:[
                {value:10, name:'rose1'},
                {value:5, name:'rose2'},
                {value:15, name:'rose3'},
                {value:25, name:'rose4'},
                {value:20, name:'rose5'},
                {value:35, name:'rose6'},
                {value:30, name:'rose7'},
                {value:40, name:'rose8'}
            ]
        }
    ]
  };

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
           data: convertData(data),
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
            name: 'categoryA',
            type: 'map',
            geoIndex: 0,
            // tooltip: {show: false},
            data:[
                {name: '北京', value: randomValue()},
                {name: '天津', value: randomValue()},
                {name: '上海', value: randomValue()},
                {name: '重庆', value: randomValue()},
                {name: '河北', value: randomValue()},
                {name: '河南', value: randomValue()},
                {name: '云南', value: randomValue()},
                {name: '辽宁', value: randomValue()},
                {name: '黑龙江', value: randomValue()},
                {name: '湖南', value: randomValue()},
                {name: '安徽', value: randomValue()},
                {name: '山东', value: randomValue()},
                {name: '新疆', value: randomValue()},
                {name: '江苏', value: randomValue()},
                {name: '浙江', value: randomValue()},
                {name: '江西', value: randomValue()},
                {name: '湖北', value: randomValue()},
                {name: '广西', value: randomValue()},
                {name: '甘肃', value: randomValue()},
                {name: '山西', value: randomValue()},
                {name: '内蒙古', value: randomValue()},
                {name: '陕西', value: randomValue()},
                {name: '吉林', value: randomValue()},
                {name: '福建', value: randomValue()},
                {name: '贵州', value: randomValue()},
                {name: '广东', value: randomValue()},
                {name: '青海', value: randomValue()},
                {name: '西藏', value: randomValue()},
                {name: '四川', value: randomValue()},
                {name: '宁夏', value: randomValue()},
                {name: '海南', value: randomValue()},
                {name: '台湾', value: randomValue()},
                {name: '香港', value: randomValue()},
                {name: '澳门', value: randomValue()}
            ]
        }
    ]
  };

  //雷达图
  radarEchat = {
    title: {
        // text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
        // shape: 'circle',
        indicator: [
           { name: '销售', max: 6500},
           { name: '管理', max: 16000},
           { name: '信息技术', max: 30000},
           { name: '客服', max: 38000},
           { name: '研发', max: 52000},
           { name: '市场', max: 25000}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '预算分配（Allocated Budget）'
            },
             {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : '实际开销（Actual Spending）'
            }
        ]
    }]
  };



  render() {
    return (
      <div className="content">
        <Breadcrumb className="crumb">
        <Breadcrumb.Item>Components</Breadcrumb.Item>
        <Breadcrumb.Item><a href="">echats</a></Breadcrumb.Item>
        </Breadcrumb>
        <div className="echat">
      	  <ul>
            <li>
              <h3>气泡图</h3>
              <ReactEcharts option={this.bubbleEchat} notMerge={true} lazyUpdate={true} />
            </li>
            <li>
              <h3>折线图</h3>
              <ReactEcharts option={this.lineEchat} notMerge={true} lazyUpdate={true} />
            </li>
            <li>
              <h3>柱状图</h3>
              <ReactEcharts option={this.columnarEchat} notMerge={true} lazyUpdate={true} />
            </li>
            <li>
              <h3>饼状图</h3>
              <ReactEcharts option={this.pieEchat} notMerge={true} lazyUpdate={true} />
            </li>
            <li>
              <h3>小地图</h3>
              <ReactEcharts option={this.mapEchat} notMerge={true} lazyUpdate={true} />
            </li>
            <li>
              <h3>雷达图</h3>
              <ReactEcharts option={this.radarEchat} notMerge={true} lazyUpdate={true} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Echat;
