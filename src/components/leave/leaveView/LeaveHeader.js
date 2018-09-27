import React,{Component} from 'react'
import { Input } from 'antd';
const { TextArea,Search } = Input;

class LeaveHeader extends Component {
	constructor(props){
		super(props);
		this.state={
            title:null,
            content:null
		}
	}

	// 键盘事件
	sendText = (value)=>{
		let title = value;   //input输入的值
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
		this.setState({
			content:e.target.value
		})
	}

	render() {
		return (
			<div className="lee-leave-header">
                <Search
                    placeholder="请输入您的可爱昵称"
                    enterButton="提交"
                    onSearch={this.sendText}
					style={{marginBottom:'10px'}}
                />
				<TextArea rows={4} placeholder="请输入您想说的话" onChange={this.onChange} />
			</div>
			)
	}
}
export default LeaveHeader