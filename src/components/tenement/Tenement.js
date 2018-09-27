import React,{Component} from 'react'
import { Icon,Progress } from 'antd';
import LineEchat from '../../components/echat/LineEchat'

/**
 * 物业
 */
export default class Tenement extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
		    <div>
                <div className="lee-rbb-all">
                    <div className="lee-wy">
                        <div className="lee-wy-top">
                            <div className="lee-wy-top-item">
                                <div className="lee-wy-top-item-l fl wy-color">
                                    <Icon type="user-add" theme="outlined"></Icon>
                                </div>
                                <div className="lee-wy-top-item-r fr">
                                    <h3>新增业主（人）</h3>
                                    <p className="wy-color">+5</p>
                                </div>
                            </div>
                            <div className="lee-wy-top-item">
                                <div className="lee-wy-top-item-l fl wy-color2">
                                    <Icon type="car" theme="outlined" />
                                </div>
                                <div className="lee-wy-top-item-r fr">
                                    <h3>剩余停车位</h3>
                                    <p className="wy-color2">500</p>
                                </div>
                            </div>
                            <div className="lee-wy-top-item">
                                <div className="lee-wy-top-item-l fl wy-color3">
                                    <Icon type="pay-circle" theme="outlined" />
                                </div>
                                <div className="lee-wy-top-item-r fr">
                                    <h3>剩余没交费业主</h3>
                                    <p className="wy-color3">500</p>
                                </div>
                            </div>
                            <div className="lee-wy-top-item">
                                <div className="lee-wy-top-item-l fl wy-color4">
                                    <Icon type="alert" theme="outlined" />
                                </div>
                                <div className="lee-wy-top-item-r fr">
                                    <h3>今日报警求助</h3>
                                    <p className="wy-color4">500</p>
                                </div>
                            </div>
                        </div>
                        <div className="lee-wy-con">
                            <div className="lee-wy-con-l">
                                <LineEchat />
                            </div>
                            <div className="lee-wy-con-r">
                                <h4>人员变化</h4>
                                <div>
                                    <Progress
                                        strokeLinecap="square"
                                        type="circle"
                                        width={180}
                                        strokeWidth={4}
                                        percent={75}
                                        format={percent => {return <div className="lee-wy-con-r-pro"><p style={{color:'#BFCEDD',fontSize:'15px'}}>全部事件</p><p>{percent}</p></div>}}
                                    />
                                </div>
                                <p className="lee-wy-con-r-title">
                                    <span><em style={{background:'#BFCEDD'}}></em>事件一</span>
                                    <span><em></em>事件二</span>
                                </p>
                            </div>
                        </div>
                        <div className="lee-wy-bot">
                            <div className="lee-wy-bot-item">
                                <h4>求助记录</h4>
                                <ul>
                                    <li className="pending"><span>2018-09-27</span><span>张三 B区604</span><span>下水道堵塞</span><span>待处理</span></li>
                                    <li className="active"><span>2018-09-27</span><span>李四 B区604</span><span>下水道堵塞</span><span>处理中</span></li>
                                    <li><span>2018-09-27</span><span>王丽 B区604</span><span>下水道堵塞</span><span>已处理</span></li>
                                    <li><span>2018-09-27</span><span>王五 B区604</span><span>下水道堵塞</span><span>已处理</span></li>
                                    <li><span>2018-09-27</span><span>王丽 B区604</span><span>下水道堵塞</span><span>已处理</span></li>
                                    <li><span>2018-09-27</span><span>王五 B区604</span><span>下水道堵塞</span><span>已处理</span></li>
                                </ul>
                            </div>
                            <div className="lee-wy-bot-item">
                                <h4>开门记录</h4>
                                <ul>
                                    <li className="pending"><span>2018-09-27</span><span>张三 B区604</span><span>门房锁损坏</span><span>待处理</span></li>
                                    <li className="active"><span>2018-09-27</span><span>李四 B区604</span><span>忘记带钥匙</span><span>处理中</span></li>
                                    <li className="pending"><span>2018-09-27</span><span>张三 B区604</span><span>门房锁损坏</span><span>待处理</span></li>
                                    <li className="active"><span>2018-09-27</span><span>李四 B区604</span><span>忘记带钥匙</span><span>处理中</span></li>
                                    <li><span>2018-09-27</span><span>王丽 B区604</span><span>门房锁损坏</span><span>已处理</span></li>
                                    <li><span>2018-09-27</span><span>王五 B区604</span><span>门房锁损坏</span><span>已处理</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			)
	}
}
