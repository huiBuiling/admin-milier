import React,{Component} from 'react'
import {Input,Button } from 'antd';
const { TextArea } = Input;

class LeaveHeader extends Component {
	constructor(props){
		super(props);
		this.state={
            title:null,
            content:null
		}
	}

	// 键盘事件
	sendText = ()=>{
		let title = this.state.title;   //input输入的值
		let content = this.state.content; //textarea 输入的值
		if(!title && !content){
			return false;
		}
		let newleaveItem = {
            title: title,
			content:content,
			isDone:false
		};   //新任务
		this.props.addLeave(newleaveItem);  //添加到leaveList
	}

    onChange = (e)=>{
		if(e.target.nodeName == 'INPUT'){
            this.setState({
                title:e.target.value
            })
		}else{
            this.setState({
                content:e.target.value
            })
		}

	}

	render() {
		return (
			<div className="leave-header">
				<Input placeholder="请输入您的可爱昵称" onChange={this.onChange} />
				<Button type="primary" className="sendBtn" onClick={this.sendText}>提交</Button>
				<TextArea rows={4} placeholder="请输入您想说的话" onChange={this.onChange} />
			</div>
			)
	}
}
export default LeaveHeader