import React,{Component} from 'react'
import { Icon } from 'antd';
import BarImg from '../../containers/Bar/RightTopBar';

/*home*/
export default class Index extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
		    <div>
                <BarImg />
                <div className="lee-rbb-all">
                    <div className="lee-index">

                    </div>
                </div>
            </div>
			)
	}
}
