import React, { Component } from 'react';
import './App.css'
//组件
import BottomBar from '../Bar/Bottom'
import Router from '../../components/router/Router';

//引入className库
import classNames from 'classnames'

class App extends Component {
	constructor(props) { 
		super(props);  
		this.state = {  
			mode: 'inline',
			toggle:''
		};
	}

	changeMode = (values) => {
		this.setState({
			mode: values ? 'inline':'vertical',
			toggle: values ? '' : 'app2'
		});
	}

	

	render() {
		var btnClass = classNames({
			'app': true,
			'app2': this.state.toggle
		});
		return(
			// <div className=cs('app',{this.state.toggle , app})>
			<div className={btnClass}>
                <Router changeMode={this.changeMode.bind(this)} mode={this.state.mode} />
                {/*<BottomBar />*/}
			</div>
			)
	}
}

export default App;
