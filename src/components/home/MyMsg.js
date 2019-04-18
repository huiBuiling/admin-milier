import React,{Component} from 'react';
import DealtWithChat from './DealtWithChat';

/**
 * @author hui
 * @date 2019/4/18
 * @Description: 我的消息
*/
export default class MyMsg extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
            <div className="lee-home-msg">
                <h4><span>我的消息</span><a href="#">+ 更多</a></h4>
                <div>
                    <ul>
                        <li><em style={{background:'#FCC667'}}>&nbsp;</em>我的消费通知：家用电器28.79%¥ 2,544</li>
                        <li><em style={{background:'#BC8DEE'}}>&nbsp;</em>我的消费通知：食用酒水21.04%¥ 1,321</li>
                        <li><em style={{background:'#8693F3'}}>&nbsp;</em>我的消费通知：个护健康19.73%¥ 2,113</li>
                        <li><em>&nbsp;</em>我的消费通知：服饰箱包14.83%¥ 3,341</li>
                        <li><em>&nbsp;</em>我的消费通知：母婴产品0%¥  2,231</li>
                        <li><em>&nbsp;</em>我的消费通知：其他15.60%¥      1,231</li>
                        <li><em>&nbsp;</em>我的消费通知：服饰箱包14.83%¥ 3,341</li>
                        <li><em>&nbsp;</em>我的消费通知：母婴产品0%¥  2,231</li>
                        <li><em>&nbsp;</em>我的消费通知：其他15.60%¥      1,231</li>
                        <li><em>&nbsp;</em>我的消费通知：服饰箱包14.83%¥ 3,341</li>
                        <li><em>&nbsp;</em>我的消费通知：母婴产品0%¥  2,231</li>
                        <li><em>&nbsp;</em>我的消费通知：其他15.60%¥      1,231</li>
                    </ul>
                </div>
            </div>
			)
	}
}
