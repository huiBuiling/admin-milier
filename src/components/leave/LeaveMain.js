import React,{Component} from 'react'
import LeaveItem from './LeaveItem';

class LeaveMain extends Component {  
		
	render() {
		return (
				<ul className="todo-list">
	                {this.props.leaveList.map((todo, index) => {
	                    return <LeaveItem key={index} {...todo} index={index} {...this.props}/>
	                })}
	            </ul>
			)
	}
}
export default LeaveMain