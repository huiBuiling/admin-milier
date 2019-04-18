import React,{Component} from 'react';
import DealtWithChat from './DealtWithChat';

/**
 * @author hui
 * @date 2019/4/18
 * @Description: 我的消费
*/
export default class MyConsumption extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
            <div className="lee-home-consum">
                <h4><span>我的消费</span><a href="#">+ 更多</a></h4>
                <div>
                    <ul>
                        <li><em style={{background:'#FCC667'}}></em><span className="deal-l">家用电器</span> 28.79%¥ <span className="deal-r">2,544</span></li>
                        <li><em style={{background:'#BC8DEE'}}></em><span className="deal-l">食用酒水</span> 21.04%¥ <span className="deal-r">1,321</span></li>
                        <li><em style={{background:'#8693F3'}}></em><span className="deal-l">个护健康</span> 19.73%¥ <span className="deal-r">2,113</span></li>
                        <li><em></em><span className="deal-l">服饰箱包</span> 14.83%¥ <span className="deal-r">3,341</span></li>
                        <li><em></em><span className="deal-l">母婴产品</span> 0%¥  <span className="deal-r">2,231</span></li>
                        <li><em></em><span className="deal-l">其他</span> 15.60%¥      <span className="deal-r">1,231</span></li>
                    </ul>
                </div>
            </div>
			)
	}
}
