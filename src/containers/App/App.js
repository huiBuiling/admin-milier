import React, { Component } from 'react';
import { Icon,Input,Badge,Menu, Dropdown,Divider, message } from 'antd';
import Trianglify from 'Trianglify';   //svg背景
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import LeftBar from '../Bar/LeftBar';
import RightBar from '../Bar/RightBar';
import adminImg from '../../assert/images/admin.jpg';

import axios from 'axios';
import { getSongsList,getCurrentItem } from "../../reducer/player.redux";
import { setLoginData } from "../../reducer/login.redux";
import { getUrlFix, setItem } from '../../common/util';

@withRouter
	@connect(
		state => state,
		{ getSongsList, getCurrentItem, setLoginData }
	)
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height:document.getElementById('root').offsetHeight,

            toggle: false,
            avatarDefault: adminImg,
            search: false,   //搜索
            showSkin: false,  //皮肤
            skinColor: 'themsBlack',
            skinNormal: [
                {color: 'themsBlack', name: '夜间'},
            ],
            skinSvg: [
                {color: 'themsSVGL', name: '蓝色'},
                // {color: 'themsSVGLF', name: '蓝粉色'},
                {color: 'themsSVGLFH', name: '蓝粉色'},
                {color: 'themsSVGLFZ', name: '蓝粉紫色'},
                {color: 'themsSVGF', name: '粉色'},
                {color: 'themsSVGFZ', name: '粉紫色'},
                {color: 'themsSVGGF', name: '橘粉色'},
            ],

			skinSvgColorList:{
                '蓝色':["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
                // '蓝粉色':["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
                '蓝粉色':["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
                '蓝粉紫色':["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],

                '粉色':["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
                '粉紫色':["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
                '橘粉色':["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],


                '橘色':["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
                '灰白色':["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],

            },
            showMusic: false,       //是否可拥有音乐功能
            isPlay: false           //是否播放状态
        };
    }

    componentDidMount() {
        if(this.state.skinColor != 'themsBlack') {
            const canvas = Trianglify({
                width: 2920,
                height: this.state.height,
                // cell_size: Math.random()*200 + 40,
                // variance:0.98,
                x_colors: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"]
            });
            document.getElementById('root').appendChild(canvas.canvas());
            // console.log(canvas.opts.x_colors);
        }
    }

    //获取歌曲MP3地址
    getCurrenturl = (currentIndex) => {
        const {currentId} = this.props.player;
        if (currentId != null && currentId !== undefined) {
            axios.get(`${getUrlFix}/music/url?id=${currentId}`).then(res => {
                if (res.status == 200) {
                    if(res.code == 200) {
                        const currentUrl = res.data.data[0].url;
                        const item = {currentId, currentIndex, currentUrl};
                        this.props.getCurrentItem(item);
                        // console.log(currentId + " :: " + currentUrl);
                    } else {
                        message.warning(res.data.msg);
                    }
                    
                }
            });
        } else {
            console.log(currentId)
        }
    }

    //展示操作按钮
    player = () => {
        //判断是否登录
        const {userName} = this.props.login;
        /*if(!this.state.showMusic){
            // if(userName !== ''){
                //已登录
                //获取歌单列表
                axios.get(`${getUrlFix}/user/playlist?uid=262606203`).then(res=>{
                    //获取第一个歌单列表歌曲
                    this.props.getSongsList(1, res.data.playlist[0].id);

                    //初始化获取第一条歌曲
                    this.getCurrenturl(0);


                });
            // }else{
            //     console.log('您未登录')
            // }
		}*/
        this.setState({showMusic: !this.state.showMusic});
    }

    //播放
    play = () => {
        const audio = this.refs.audio;
        this.setState({isPlay: true});
        audio.play();
    }

    //暂停
    pause = () => {
        const audio = this.refs.audio;
        audio.pause();
        this.setState({isPlay: false, showMusic: false});
    }

    //更改皮肤svg
	setSkin = (item)=>{
        this.setState({skinColor: item.color});
    	//是svg背景
        let oldCanvas = document.getElementById('root').children[1];
        if(oldCanvas) {
            document.getElementById('root').removeChild(oldCanvas);
        }
        const canvas = Trianglify({
            width: 2920,
            height: this.state.height,
            x_colors: this.state.skinSvgColorList[item.name]
        });
        document.getElementById('root').appendChild(canvas.canvas())
	}

    signOut = () => {
        setItem('userData', {});
        this.props.setLoginData('', '')
        this.props.history.push('/login');
    }

	render() {
        const Search = Input.Search;
        const { userName, avatar } = this.props.login;
        let { currentUrl } = this.props.player;

        const {
        	avatarDefault, search,toggle,
            skinColor, skinNormal, skinSvg,
            showMusic,isPlay
        } = this.state;

        const menu  =
            <Menu>
                <Menu.SubMenu title="基础色皮肤">
                    {skinNormal.map((item,index)=> {
                        return <Menu.Item key={`n-${index}`} onClick={()=>this.setState({skinColor: item.color})}>{item.name}</Menu.Item>
                    })}
                </Menu.SubMenu>
                <Menu.SubMenu title="svg格式皮肤">
                    {skinSvg.map((item,index)=> {
                        return <Menu.Item key={`s-${index}`} onClick={()=>this.setSkin(item)}>{item.name}</Menu.Item>
                    })}
                </Menu.SubMenu>
            </Menu>;

        const logins = (
            <Menu>
                {userName == '' && avatar == '' ?
                    <Menu.Item><div className="login-in"  onClick={()=>this.props.history.push('/login')}><Icon type="smile" />登录</div></Menu.Item>
                    :
                    <Menu.Item><div className="login-out" onClick={this.signOut}><Icon type="poweroff" />退出</div></Menu.Item>
                }
            </Menu>
        );
		return(
			<div className="lee-admin" style={{position:'absolute'}}>
				<div className={`thems ${skinColor} ${toggle ? 'lee-in':''}`}>
                    <LeftBar toggle={toggle}/>
					<div className="lee-rightBar">
						<div className="lee-rightBar-top">
                            <div className="lee-rightBar-toogle" onClick={()=>{this.setState({toggle:!toggle})}}><Icon type={toggle ? 'menu-unfold':'menu-fold'} theme="outlined" /></div>
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
									<Dropdown overlay={menu} trigger={['click']} placement='bottomRight'>
										<span><Icon type="skin" style={{fontSize:20}} /></span>
									</Dropdown>
								</div>
                                <div>
                                    <Badge dot>
										<Link to='/home:image'><Icon type="picture" theme="outlined" /></Link>
                                    </Badge>
                                </div>
                                <Divider type="vertical" />
                                <div className="user">
                                    <Dropdown overlay={logins} overlayClassName="login-opera">
                                        <a className="ant-dropdown-link" href="#">
                                            <img src={avatar == '' ? avatarDefault : avatar} alt=""/>
                                        </a>
                                    </Dropdown>
                                </div>
                                <div className="name">
                                    {userName}
                                </div>
							</div>
						</div>
                        <RightBar/>
                        {/*animated infinite rubberBand jello*/}
						{/* <div className="lee-music-opera" onClick={this.player}>
							<div className={`${showMusic ? 'lee-music-animate':'in'}`}>
								<Icon
									type="customer-service" theme="outlined"
									className={`animated ${showMusic ? 'bounce uninfinite':'infinite pulse'}`}
									style={showMusic ? {borderRadius: '50%',padding:10}:null}
								/>
							</div>
						</div> */}

						{/* <div className="lee-music-opera2" style={{display:showMusic ? 'block':'none'}}>
							<audio
								src={currentUrl}
								ref='audio'
								preload="true"
								className="lee-music-audio"
							/>
							<div className="lee-music-opera2-bar">
									<Icon
										type="caret-left"
										theme="outlined"
                                        className="animated bounceInLeft delay-2s"
										onClick={this.prev}
									/>
									{isPlay ?
										<Icon type="pause-circle" theme="outlined" className="animated jello delay-1s" onClick={this.pause}/>
										:
										<Icon type="play-circle" theme="outlined" className="animated bounceInUp delay-1s" onClick={this.play}/>
									}
									<Icon
										type="caret-right"
										theme="outlined"
                                        className="animated bounceInRight"
										onClick={this.next}
									/>
							</div>
						</div> */}
					</div>
				</div>
			</div>
			)
	}
}

export default App;
