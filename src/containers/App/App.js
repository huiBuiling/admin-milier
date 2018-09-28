import React, { Component } from 'react';
import { Icon,Input,Badge,Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom'

import LeftBar from '../Bar/LeftBar'
import RightBar from '../Bar/RightBar'

class App extends Component {
	constructor(props) { 
		super(props);  
		this.state = {  
			mode: 'inline',
			toggle:'',

			search:false,   //搜索
            showSkin:false,  //皮肤
            skinColor:'black',
            skinColorList:{
                purple:'themsPurple',
                purpleH:'themsPurpleGHOST',
                green:'themsGreen',
                greenH:'themsGreenGHOST',
                pink:'themsPink',
                black:'themsBlack',
			},
			skin:[
				{ bgColor:'rgb(88,104,217)',color:'purple',name:'紫'},
				{ bgColor:'rgb(88,104,217)',color:'purpleH',name:'紫',ghost:true},
				{ bgColor:'rgb(70,212,186)',color:'green',name:'绿'},
				{ bgColor:'rgb(70,212,186)',color:'greenH',name:'绿',ghost:true},
				{ bgColor:'rgb(250,155,193)',color:'pink',name:'粉'},
                { bgColor:'rgb(67,66,69)',color:'black',name:'夜'}
			]
		};
	}

	changeMode = (values) => {
		this.setState({
			mode: values ? 'inline':'vertical',
			toggle: values ? '' : 'app2'
		});
	}

	

	render() {
        const Search = Input.Search;
        const { search,showSkin,skinColor,skinColorList, skin } = this.state;
        const currentSkinColor = skinColorList[skinColor];

        const menu = (
            <Menu className="lee-skin">
                {
                    skin.map((item,index)=>{
                        if(item.ghost){
                            return <Menu.Item key={index}
                                      style={{
                                          border:`1px solid ${item.bgColor}`,
                                          color:item.bgColor
                                      }}
                                      onClick={()=>this.setState({skinColor:item.color})}
                            >
                                <span>{item.name}</span>
                            </Menu.Item>
                        }else if(item.ghost == undefined && !item.ghost){
                            return <Menu.Item key={index}
                                      style={{background: item.bgColor}}
                                      onClick={() => this.setState({skinColor: item.color})}
                            >
                                <span>{item.name}</span>
                            </Menu.Item>
                        }
                    })
                }
            </Menu>
        );
		return(
			<div className="lee-admin">
				<div className={`thems ${currentSkinColor}`}>
                    <LeftBar />
					<div className="lee-rightBar">
						<div className="lee-rightBar-top">
							<div className="lee-rightBar-search">
								<Search
									style={{display:search ? null:'none'}}
									placeholder="input search text"
									onSearch={value => console.log(value)}
								/>
								<span>
									<Icon
										type="search"
										onClick={()=>this.setState({search:!search})}
									/>
									搜索
								</span>
							</div>
							<div className="lee-rightBar-top-r">
								<div className="user">
									<Icon type="user" />
								</div>
								<div className="span">
									慧慧
								</div>
								<div className="span">
									<Badge dot>
										<Icon type="bell" />
									</Badge>
								</div>
                                <div className="span">
									<Dropdown overlay={menu} trigger={['click']}>
										<Icon type="skin" />
									</Dropdown>
								</div>
                                <div className="span">
                                    <Badge dot>
										<Link to='/home:image'><Icon type="picture" theme="outlined" /></Link>
                                    </Badge>
                                </div>
							</div>
						</div>
                        <RightBar />
					</div>
				</div>
			</div>
			)
	}
}

export default App;
