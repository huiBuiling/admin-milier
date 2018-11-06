import React,{Component} from 'react'

/**
 * home
 * */
export default class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			imgList:[
				{name:'html',text:'Html'},
                {name:'bootstrap',text:'BootStrap'},
                {name:'js',text:'Javascript'},
                {name:'jquery',text:'jQuery'},
                {name:'angular',text:'Angular'},
                {name:'react',text:'React'},
                {name:'vue',text:'Vue'}
			]
		};
	}

    componentDidMount(){

    }


	render() {
		const imgList = this.state.imgList;
		return (
			<div className="lee-rbb-all">
				<div className="lee-home">
					<div className="lee-home-t">
						<div className="lee-home-card">
                            <h4><span>系统导航</span><a href="#">+ 更多</a></h4>
							<div className="lee-home-card-con">
								{imgList.map(item =>{
                                    	return <div key={item.name}><img src={require(`../../assert/images/home/${item.name}.jpg`)} alt=""/><p>{item.text}</p></div>
									})
								}
							</div>
						</div>
					</div>
                    <div className="lee-home-c">
						<div className="lee-home-c-l">
                            <div className="lee-home-card">
                                <h4><span>111111111111</span><a href="#">+ 更多</a></h4>
							</div>
						</div>
						<div className="lee-home-c-r">
                            <div className="lee-home-card">
                                <h4><span>申请事项</span><a href="#">+ 更多</a></h4>
                            </div>

                            <div className="lee-home-card">
                                <h4><span>合作事项</span><a href="#">+ 更多</a></h4>
                            </div>
						</div>
                    </div>
                    <div className="lee-home-b">
                        <div className="lee-home-card">
                            <h4><span>我的待办</span><a href="#">+ 更多</a></h4>
                        </div>
                        <div className="lee-home-card">
                            <h4><span>我的已办</span><a href="#">+ 更多</a></h4>
                        </div>
                        <div className="lee-home-card">
                            <h4><span>我的邮箱</span><a href="#">+ 更多</a></h4>
                        </div>
                    </div>
				</div>
			</div>
			)
	}
}
