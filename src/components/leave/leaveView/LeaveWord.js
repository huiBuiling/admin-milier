import React,{Component} from 'react'
import { Timeline } from 'antd';

import LeaveHeader from './LeaveHeader';
import LeaveItem from './LeaveItem';
import LeaveFooter from './LeaveFooter';

class LeaveWord extends Component {
	constructor(props) {
		super(props);
		this.state = {
			leaveList : [],
			isAllChecked:false  //是否选中
		};
	}

	//判断是否所有任务状态都已经完成,同步底部的全选框
	allChecked = ()=>{
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
	addLeave = (leaveItem)=>{
		this.state.leaveList.push(leaveItem);
		this.allChecked();
	}

	// 改变任务的状态，index是第几个，isDone是状态，isChangeAll是控制全部状态的,传递给TodoItem和Footer组件的方法
	changeLeaveState = (index, isDone, isChangeAll=false)=>{
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
    }

    //修改任务
    /*editLeave(index) {
        var isDone=this.state.leaveList[index].isDone;
        var value=prompt("请修改您的任务","第n条记录");

        var editItem={
            text: value,
            isDone:isDone
        }
        if(value){
            this.state.leaveList.splice(index,1,editItem);
            this.setState({leaveList:this.state.leaveList});
        }
    } */


	//清除已经完成任务，传递给Footer组件的方法
	cleanLeave = ()=>{
		let leaveList = this.state.leaveList.filter((todo) => !todo.isDone);  //过滤出选中的任务
		this.setState({
			leaveList:leaveList,
			isAllChecked:false
		})
	}

	//删除当前任务，传递给TodoItem的方法
	delateCurrentLeave = (index)=>{
		this.state.leaveList.splice(index, 1);
        this.setState({leaveList: this.state.leaveList});
	}
	
	render() {
		const { leaveList } = this.state;
		let props = {
			currentCount: (leaveList && leaveList.filter((todo) => todo.isDone)).length || 0,
			totalCount: leaveList.length || 0,
		}
		return (
			<div className="lee-leave-edit">
				<LeaveHeader addLeave={this.addLeave} />

                <Timeline pending={<a href="#">See more</a>} className="lee-leave-main">
                    {leaveList.map((todo, index) => {
                        return <LeaveItem
									key={index} {...todo}
									index={index}
                                    delateCurrentLeave={this.delateCurrentLeave}
                                    leaveList={leaveList}
                                    changeLeaveState={this.changeLeaveState}
								/>
                    })}

                </Timeline>
                )

				<LeaveFooter
					currentCount={(leaveList && leaveList.filter((todo) => todo.isDone)).length || 0}
					totalCount={leaveList.length || 0}
					changeLeaveState={this.changeLeaveState}
					cleanLeave={this.cleanLeave}
				/>
			</div>
		)
	}
}
export default LeaveWord