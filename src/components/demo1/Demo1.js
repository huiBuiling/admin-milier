import React,{ Component } from 'react';
import { Icon,DatePicker } from 'antd';

import TablesResize from '../TablesResize';
import DemoTag from './DemoTag';
import DemoChart from './DemoChart';
const { RangePicker } = DatePicker;

/**
 * @author hui
 * @date 2018/12/18
 * @Description: Demo1
*/
export default class Demo1 extends Component {
    constructor(props){
        super(props);
        this.state={
            proData:[
                {
                    name:'dva-music',
                    src:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1311085666,1887597967&fm=26&gp=0.jpg',
                    desc:'一款手机端仿网易云音乐的播放器软件，可登录获取用户信息及用户歌单，享受音乐的视听盛宴。',
                    time:'两个月前'
                },
                {
                    name:'admin-milier',
                    src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1436261501,3228473846&fm=26&gp=0.jpg',
                    desc:'一款Pc端的后台管理模版，有图表，有音乐，机器人小人表演热舞哦，还有不同肤色的软件哈。',
                    time:'两个月前'
                },
                {
                    name:'recruitment',
                    src:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3595745109,2048014139&fm=26&gp=0.jpg',
                    desc:'一款手机端模拟招聘的软件，注册登录，撩有技术的晓哥哥，小姐姐哦，欢迎投稿哦。',
                    time:'两个月前'
                },
                {
                    name:'知问',
                    src:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2644233099,1930326732&fm=26&gp=0.jpg',
                    desc:'一款pc端社区网站，热门，关注及收藏，更有知心美腻大姐姐与你互动哦，快来看看吧。',
                    time:'两个月前'
                },
                {
                    name:'sina-hui',
                    src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3144584891,1669491080&fm=26&gp=0.jpg',
                    desc:'一款pc端仿微信的软件，使用angualr技术实现各种有趣好玩的功能哦，时不待人嘞。',
                    time:'两个月前'
                },{
                    name:'电影播播',
                    src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2032960235,623253201&fm=26&gp=0.jpg',
                    desc:'一款使用node+jade+mongo实现的电影查看软件，更多大片等你来看哦，不要错过嘞。',
                    time:'两个月前'
                }
            ]
        }
    }

    render() {
        const { proData } = this.state;
        const proSty = {
            width: '100%',
            overflow: 'hidden',
            margin: '-1px 0 0'
        }
        return (
              <div className="lee-rbb-all">
                    <div className="lee-home lee-demo1">
                        <div className="lee-demo1-l" style={{width:'calc(65% - 15px)'}}>
                            <div className="lee-demo1-card">
                                <h4>
                                    <span>访问量</span>
                                    <span className="span-r">
                                        <RangePicker renderExtraFooter={() => 'extra footer'} />
                                    </span>
                                </h4>
                                <div className="lee-demo1-card-con">
                                    <TablesResize />
                                </div>
                            </div>
                            <div className="lee-demo1-card">
                                <h4>
                                    <span>已有项目</span>
                                    <span className="span-r">
                                        <Icon type="appstore" />
                                    </span>
                                </h4>
                                <div className="lee-demo1-card-con" style={proSty}>
                                    <div className="lee-demo1-card-con-pro">
                                        <ul>
                                            {proData.map((item,index) =>{
                                                return <li key={index}>
                                                    <div>
                                                        <img src={item.src} alt={item.name} />
                                                        <span>{item.name}</span>
                                                    </div>
                                                    <p>{item.desc}</p>
                                                    <p>慧慧<span>{item.time}</span></p>
                                                </li>
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lee-demo1-r" style={{width:'35%'}}>
                            <div className="lee-demo1-card">
                                <h4>
                                    <span>快速开始 / 便捷导航</span>
                                </h4>
                                <div className="lee-demo1-card-con">
                                    <DemoTag />
                                </div>
                            </div>
                            <div className="lee-demo1-card">
                                <h4>
                                    <span>投票统计</span>
                                </h4>
                                <div className="lee-demo1-card-con" style={{width:'100%'}}>
                                    <DemoChart />
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
        );
  }
}
