import React,{Component} from 'react'

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
			<div className="leave-header">
				<input type="checkbox" checked={this.props.isAllChecked} onChange={this.handlerAllState.bind(this)} />
				<span>{this.props.currentCount}已完成/{this.props.totalCount}</span>
				<button onClick={this.handlerClear.bind(this)} >清空已经完成的任务</button>
			</div>
			)
	}
}
export default LeaveFooter