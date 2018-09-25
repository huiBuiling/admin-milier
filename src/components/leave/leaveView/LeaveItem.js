import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { Timeline,Input,Button } from 'antd';
import ok from '../../../assert/images/ok.png'
const { TextArea } = Input;


class LeaveItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display:false
        };
    }

	// 处理任务是否完成状态
    handlerChange = ()=>{
        let isDone = !this.props.isDone;
        this.props.changeLeaveState(this.props.index, isDone);
    }

    // 删除当前任务
    handlerDelete = ()=>{
        this.props.delateCurrentLeave(this.props.index);
    } 

	render() {
        const { display } = this.state;
        let doneStyle = this.props.isDone ? {display: 'inline'} : {display: 'none'};
        return (
            <Timeline.Item
                onMouseOver={()=>this.setState({display:true})}
                onMouseOut={()=>this.setState({display:false})}
            >
                <input type="checkbox" checked={this.props.isDone} onChange={this.handlerChange}/>
                <div>
                    <span className="title">{this.props.title}</span>
                    <span className="date">{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</span>
                    <Button
                        type="primary"
                        shape="circle"
                        icon="close"
                        style={{'display':display ? 'inline':'none'}}
                        onClick={this.handlerDelete}
                        className="fr"
                    />
                    <img src={ok} style={doneStyle}/>
                </div>
                <p>{this.props.content}</p>

            </Timeline.Item>
        )
	}
}
export default LeaveItem