import React,{Component} from 'react'
import Robot from './Robot'

export default class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

    componentDidMount(){

    }


	render() {
		return (
			<div className="lee-rbb-all" ref="all" style={{padding:0}}>
				<div className="lee-home">
                    <div className="switch"  style={{display:'none'}}>
                        <input type="checkbox" name="toggle" />
						<label>
							<i className="bulb">
								<span className="bulb-center"></span>
								<span className="filament-1"></span>
								<span className="filament-2"></span>
								<span className="reflections">
								<span></span>
							  </span>
							  <span className="sparks">
								<i className="spark1"></i>
								<i className="spark2"></i>
								<i className="spark3"></i>
								<i className="spark4"></i>
							  </span>
							</i>
						</label>
                    </div>

                    <Robot />
				</div>
			</div>
			)
	}
}
