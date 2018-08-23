import React,{Component} from 'react'

class LeaveHeader extends Component {  
	
	//键盘事件
	handlerKeyUP(event){
		if(event.keyCode === 13){
			let value = event.target.value;   //input输入的值
			if(!value){
				return false;
			}
			let newleaveItem = {
				text: value,
				isDone:false
			};   //新任务
			event.target.value = '';
			this.props.addLeave(newleaveItem);  //添加到leaveList
		}
	}
	render() {
		return (
			<div className="leave-header">
				<input onKeyUp={this.handlerKeyUP.bind(this)} type="text" placeholder="请输入您想说的话"/>
			</div>
			)
	}
}
export default LeaveHeader