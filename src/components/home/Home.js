import React,{Component} from 'react'
import {  } from 'antd';


class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

    componentDidMount(){
        const randomNum = Math.random() * 10;
        this.setState({randomNum});
    }

	render() {
		return (
			<div className="lee-rbb-all" ref="all" style={{padding:0}}>
				<div className="lee-home">
				</div>
			</div>
			)
	}
}
export default Home