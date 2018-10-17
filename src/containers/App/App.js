import React, { Component } from 'react';
import { Icon,Input,Badge,Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom'
import axios from 'axios'

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
			],

			name:null,
            avatar:null
		};
	}

	changeMode = (values) => {
		this.setState({
			mode: values ? 'inline':'vertical',
			toggle: values ? '' : 'app2'
		});
	}

	componentDidMount(){
		axios.get('http://localhost:4000/login/cellphone?phone=xxx&password=xxx').then(res=>{
            if(res.status == 200) {
                this.setState({
                    name: res.data.profile.nickname,
                    avatar: res.data.profile.avatarUrl
                })
            }
		})
	}

	

	render() {
        const Search = Input.Search;
        const {
        	search,showSkin,skinColor,skinColorList, skin,
            name, avatar
		} = this.state;
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
								<div>
									<Badge dot>
										<Icon type="bell" />
									</Badge>
								</div>
                                <div>
									<Dropdown overlay={menu} trigger={['click']}>
										<Icon type="skin" />
									</Dropdown>
								</div>
                                <div>
                                    <Badge dot>
										<Link to='/home:image'><Icon type="picture" theme="outlined" /></Link>
                                    </Badge>
                                </div>
                                <div className="user">
                                    {avatar == null ?
                                        <Icon type="user"/>
                                        :
                                        <img src={avatar} alt=""/>
                                    }
                                </div>
                                <div className="name">
                                    {name}
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
