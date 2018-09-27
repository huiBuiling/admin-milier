import React,{Component} from 'react'
import { Icon } from 'antd';
import BarImg from '../../containers/Bar/RightTopBar';
import ConferenceFroms from './ConferenceFrom'

/**
 * 会议
 */
export default class Conference extends Component {

	constructor(props) {
		super(props);
		this.state = {
            iconX:true
		};
	}

	render() {
		return (
		    <div>
                <BarImg />
                <div className="lee-rbb-all" style={{width:'100%',margin: '0 auto'}}>
                    <div className="lee-hy">
                        <div className="lee-hy-item">
                            <div className="lee-hy-item-card">
                                <div className="lee-hy-item-card-title">
                                    <span>会议室申请记录</span>
                                </div>
                                <div className="lee-hy-item-card-con">
                                    <div className="lee-hy-item-card-con-text">
                                        <div className="lee-hy-item-card-con-text-title">
                                            <span><Icon type="reconciliation" theme="outlined" /></span>
                                            <div>
                                                <p>空闲会议室</p>
                                                <p><Icon type="environment" theme="outlined" />1号会议室-506室<span>申请人数：<em style={{color:'red'}}>0</em></span></p>
                                                <p><Icon type="environment" theme="outlined" />2号会议室-403室<span>申请人数：3</span></p>
                                                <p><Icon type="environment" theme="outlined" />5号会议室-302室<span>申请人数：5</span></p>
                                            </div>
                                        </div>
                                        <div className="lee-hy-item-card-con-text-li">
                                            <p><Icon type="calendar" />申请时间：2018-09-26</p>
                                            <p><Icon type="environment" />申请地点：3号会议室</p>
                                            <p><Icon type="user" />申请人：阿牛</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lee-hy-item">
                            <div className="lee-hy-item-card">
                                <div className="lee-hy-item-card-title">
                                    <span>会议纪要</span>
                                </div>
                                <div className="lee-hy-item-card-con">
                                    <div className="lee-hy-item-card-con-text">
                                        <div className="lee-hy-item-card-con-text-title">
                                            <span><Icon type="notification" /></span>
                                            <div>
                                                <p>OA 数据模型评审</p>
                                                <p>3号会议室，研发部全体成员</p>
                                                <p>请各位成员准时于6：00参与！</p>
                                            </div>
                                        </div>
                                        <div className="lee-hy-item-card-con-text-li">
                                            <p><Icon type="calendar" />会议时间：2018-09-27 14：00 - 16：00</p>
                                            <p><Icon type="environment" />会议地点：3号会议室</p>
                                            <p><Icon type="paper-clip" />会议主题：数据模型评审</p>
                                            <p><Icon type="user" />会议主持：阿牛</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lee-hy-item">
                            <div className="lee-hy-item-card">
                                <div className="lee-hy-item-card-title">
                                    <span>会议录入</span>
                                </div>
                                <div className="lee-hy-item-card-con">
                                    <div className="lee-hy-item-input">
                                        <ConferenceFroms />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			)
	}
}
