import React, { Component } from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom'
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
            <BrowserRouter>
				<div className={btnClass}>
					<Router changeMode={this.changeMode.bind(this)} mode={this.state.mode} />
					{/*<BottomBar />*/}
				</div>
			</BrowserRouter>
			)
	}
}

export default App;
