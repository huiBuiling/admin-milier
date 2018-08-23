import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { Timeline,Input,Button } from 'antd';
import ok from '../../assert/images/ok.png'
const { TextArea } = Input;


class LeaveItem extends Component {  
	// 处理任务是否完成状态
    handlerChange(){
        let isDone = !this.props.isDone;
        this.props.changeLeaveState(this.props.index, isDone);
    }

    // 鼠标移入
    handlerMouseOver(){
        // ReactDOM.findDOMNode(this._deleteBtn).style.display = "inline";  // ref={(deleteBtn) => {this._deleteBtn = deleteBtn}}
       ReactDOM.findDOMNode(this.refs.deleteBtn).style.display = "inline";
    }

    // 鼠标移出
    handlerMouseOut(){
        // ReactDOM.findDOMNode(this._deleteBtn).style.display = "none";
        ReactDOM.findDOMNode(this.refs.deleteBtn).style.display = "none";
    }

    // 删除当前任务
    handlerDelete(){
        this.props.delateCurrentLeave(this.props.index);
    } 

	render() {
		let doneStyle = this.props.isDone ? {display: 'inline'} : {display: 'none'};

        return (
            <Timeline.Item
                onMouseOver={this.handlerMouseOver.bind(this)}
                onMouseOut={this.handlerMouseOut.bind(this)}
            >
                <input type="checkbox" checked={this.props.isDone} onChange={this.handlerChange.bind(this)}/>
                <div >
                    <span className="title">{this.props.text}</span><span className="date">{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</span> 
                    <Button type="primary" shape="circle" icon="close" style={{'display': 'none'}} ref='deleteBtn' onClick={this.handlerDelete.bind(this)}  className="fr" />
                    <img src={ok} style={doneStyle}/>
                </div>
                <p>{this.props.content}</p>

            </Timeline.Item>
        )
	}
}
export default LeaveItem