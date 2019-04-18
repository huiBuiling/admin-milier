import React,{Component} from 'react';
import DealtWithChat from './DealtWithChat';

/**
 * @author hui
 * @date 2019/4/18
 * @Description: 我的待办
*/
export default class DealtWith extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
            <div className="lee-home-deal">
                <h4><span>我的待办</span><a href="#">+ 更多</a></h4>
                <div>
                    <DealtWithChat />
                </div>
            </div>
			)
	}
}
