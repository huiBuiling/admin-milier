import React,{Component} from 'react'
import html from '../../assert/images/html.jpg'
import { Breadcrumb,Timeline} from 'antd';

import LocalDb from 'localDB';
import LeaveHeader from './LeaveHeader';
import LeaveMain from './LeaveMain';
import LeaveFooter from './LeaveFooter';

import css from './leave.css'

class LeaveWord extends Component {  //定义 组件，继承父类
	constructor(props) {  //定义App类的构造函数
		super(props);  //调用父类的构造函数
		this.db =  new LocalDb('React-Todos');
		this.state = {  //定义组件状态
			leaveList : [],  //定义列表
			isAllChecked:false  //是否选中
		};
	}

	//判断是否所有任务状态都已经完成,同步底部的全选框
	allChecked(){
		let isAllChecked = false;
		if(this.state.leaveList.every((todo) => todo.isDone)){
			isAllChecked = true;
		}
		this.setState({
			leaveList:this.state.leaveList,
			isAllChecked
		})
	}

	//添加任务，传递给Header组件的方法
	addLeave(leaveItem){
		this.state.leaveList.push(leaveItem);
		this.allChecked();
		// this.db.set("leaveList",this.state.leaveList);
	}

	// 改变任务的状态，index是第几个，isDone是状态，isChangeAll是控制全部状态的,传递给TodoItem和Footer组件的方法
	changeLeaveState(index, isDone, isChangeAll=false){
        if(isChangeAll){
            this.setState({
                leaveList: this.state.leaveList.map((todo) => {
                    todo.isDone = isDone;
                    return todo;
                }),
                isAllChecked: isDone
            })
        }else{
            this.state.leaveList[index].isDone = isDone;
            this.allChecked();
        }
        // this.db.set('leaveList', this.state.leaveList);
    }

	//清除已经完成任务，传递给Footer组件的方法
	cleanLeave(){
		let leaveList = this.state.leaveList.filter((todo) => !todo.isDone);  //过滤出选中的任务
		this.setState({
			leaveList:leaveList,
			isAllChecked:false
		})
		// this.db.set("leaveList",leaveList);
	}



	//删除当前任务，传递给TodoItem的方法
	delateCurrentLeave(index){
		this.state.leaveList.splice(index, 1);
        this.setStWSate({leaveList: this.state.leaveList});
        this.db.set('leaveList', this.state.leaveList);
	}
	
	render() {
		var props = {
			currentCount: (this.state.leaveList && this.state.leaveList.filter((todo) => todo.isDone)).length || 0,
			totalCount: this.state.leaveList.length || 0,
		}
		return (
			<div className="content">
				<LeaveHeader addLeave={this.addLeave.bind(this)} />
				<LeaveMain delateCurrentLeave={this.delateCurrentLeave.bind(this)} leaveList={this.state.leaveList} changeLeaveState={this.changeLeaveState.bind(this)} />
				{/*<LeaveFooter {...props} /> */}
				{/*// spread操作符*/}
				<LeaveFooter currentCount={props.currentCount} totalCount={props.totalCount} changeLeaveState={this.changeLeaveState.bind(this)} cleanLeave={this.cleanLeave.bind(this)}/>
			</div>
			)
	}
}
export default LeaveWord