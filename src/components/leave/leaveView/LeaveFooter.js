import React,{Component} from 'react'
import { Button, Radio, Icon,Input } from 'antd';

class LeaveFooter extends Component {
	//处理全选与全不选状态
	handlerAllState(event){
		this.props.changeLeaveState(null, event.target.checked, true);
	}

	//绑定全部清除事件
	handlerClear(){
		this.props.cleanLeave();
	}
	render() {
		return (
			<div className="lee-leave-footer">
				<input type="checkbox" checked={this.props.isAllChecked} onChange={this.handlerAllState.bind(this)} />
				<span>{this.props.currentCount}已读/{this.props.totalCount}</span>
				<Button onClick={this.handlerClear.bind(this)} >清空已读留言</Button>
			</div>
			)
	}
}
export default LeaveFooter