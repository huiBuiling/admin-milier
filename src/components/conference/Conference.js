import React,{Component} from 'react'
import { Icon } from 'antd';
import BarImg from '../../containers/Bar/RightTopBar';

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
		const { iconX } = this.state;
		return (
		    <div>
                <BarImg />
                <div className="lee-rbb-all">
                    <div className="lee-rbb-all-item">
                        <div className="lee-card">
                            <div className="lee-card-title">
                                <span>会议纪要</span>
                            </div>
                            <div className="lee-card-con">
                                <div className="lee-card-con-text">
                                    <div className="lee-card-con-text-title">
                                        <span><Icon type="notification" /></span>
                                        <div>
                                            <p>OA原型评审</p>
                                            <p>1号会议室，研发部全体成员</p>
                                            <p>请各位成员准时参与！</p>
                                        </div>
                                    </div>
                                    <div className="lee-card-con-text-li">
                                        <p><Icon type="calendar" />会议时间：2017年4月12日 14：00：16：00</p>
                                        <p><Icon type="environment" />会议地点：1号会议室</p>
                                        <p><Icon type="paper-clip" />会议主题：OA原型评审</p>
                                        <p><Icon type="user" />会议主持：阿牛</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lee-rbb-all-item">
                        <div className="lee-card">
                            <div className="lee-card-title">
                                <span>你的titlexxxxxxxxxxxx</span>
                                <span className="red lee-card-title-text">温馨提示：xxxxxxxxxxxxx</span>
                                <span className="lee-card-op-r" onClick={()=>{this.setState({iconX:!iconX})}}>
                                        {iconX ? '收缩':'展开'}<Icon type={iconX ? 'down':'up'}/>
                                </span>
                            </div>
                            <div className="lee-card-con">
                                <div className="stu-zcbd-con" style={{display:iconX ? 'block':'none'}}>
                                    {/*要放置的内容 eg:*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			)
	}
}
