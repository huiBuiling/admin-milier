import React,{Component} from 'react';

import NavCom from './Nav';
import DealtWith from './DealtWith';
import Processed from './Processed';
import MyMsg from './MyMsg';
import MyConsumption from './MyConsumption';
import Matter from './Matter';

/**
 * @author hui
 * @date 2018/8/23
 * @Description: home
 * NavCom: 导航
 * MyMsg: 我的消息
 * Matter:申请事项
 * DealtWith：待办
 * Processed：已办
 * MyConsumption:我的消费
*/
export default class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		const imgList = this.state.imgList;
		return (
			<div className="lee-rbb-all">
				<div className="lee-home">
					<div className="lee-home-t">
						<div className="lee-home-card">
                            <NavCom />
						</div>
					</div>
                    <div className="lee-home-c">
						<div className="lee-home-c-l">
                            <div className="lee-home-card">
                                {/*我的消费*/}
                                <MyConsumption />
							</div>
						</div>
						<div className="lee-home-c-r">
                            <div className="lee-home-card">
                                {/*申请事项*/}
                                <Matter />
                            </div>
						</div>
                    </div>
                    <div className="lee-home-b">
                        <div className="lee-home-card" style={{width:'23%'}}>
                            {/*待办*/}
                            <DealtWith />
                        </div>
                        <div className="lee-home-card" style={{width:'23%'}}>
                            {/*已办*/}
                            <Processed />
                        </div>
                        <div className="lee-home-card">
                            {/*我的消息*/}
                            <MyMsg />
                        </div>
                    </div>
				</div>
			</div>
			)
	}
}
