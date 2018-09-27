import React,{Component} from 'react'
import LeaveItem from './LeaveItem';
import { Timeline } from 'antd';

class LeaveMain extends Component {  

	render() {
		return (
			<Timeline pending={<a href="#">See more</a>} className="lee-leave-main">
				{this.props.leaveList.map((todo, index) => {
					return <LeaveItem key={index} {...todo} index={index} {...this.props}/>
				})}

			</Timeline>
			)
	}
}
export default LeaveMain