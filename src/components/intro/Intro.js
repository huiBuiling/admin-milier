import React,{Component} from 'react'
import { Icon } from 'antd';
import adminImg from '../../assert/images/admin.jpg'
import introBg from '../../assert/images/intro/intro_bg.jpg'
import introBg2 from '../../assert/images/intro/intro_bg2.jpg'
import introBg3 from '../../assert/images/intro/intro_bg3.jpg'
import introBg4 from '../../assert/images/intro/intro_bg4.jpg'
import introBg5 from '../../assert/images/intro/intro_bg5.jpg'
import introBg6 from '../../assert/images/intro/intro_bg6.jpg'

/**
 * 介绍
 */
export default class Intro extends Component {

	constructor(props) {
		super(props);
		this.state = {
            currentImg:3,
        }
	}

	render() {
	    const { currentImg } = this.state;
		return (
		    <div>
                <div className="lee-rbb-all">
                    <div className="lee-intro">
                        <div className="lee-intro-con">
                            <div className="lee-intro-con-l">
                                <div className="lee-intro-con-l-t">
                                    <img src={adminImg} alt=""/>
                                    <div className="lee-intro-con-l-msg">
                                        <h4>milier<Icon type="woman" theme="outlined" /></h4>
                                        <p><Icon type="idcard" theme="outlined" />web development</p>
                                        <p><Icon type="coffee" theme="outlined" />The little girl likes to boast</p>
                                        <p><Icon type="heart" theme="outlined" />Like music, programming, my family xiaoniu</p>
                                    </div>
                                </div>
                                <div className="lee-intro-con-l-b">
                                    <div><p>23</p><p>Age</p></div>
                                    <div><p>56</p><p>Weight</p></div>
                                    <div><p>157</p><p>Height</p></div>
                                    <div><p>137******53</p><p>Tel</p></div>
                                    <div><p>10.10%</p><p>Fat</p></div>
                                </div>
                            </div>
                            <div className="lee-intro-con-r">

                            </div>
                        </div>

                        <div className="lee-intro-bot">
                            <div className="lee-intro-bot-opera">
                                <span onClick={()=>this.setState({currentImg:1})}></span>
                                <span onClick={()=>this.setState({currentImg:2})}></span>
                                <span onClick={()=>this.setState({currentImg:3})}></span>
                            </div>
                            <figure className="lee-intro-bot-img" style={{display:currentImg == 1 ? 'block':'none'}}>
                                <img src={introBg} alt=""/>
                                <figcaption>
                                    <h2>落日余晖 </h2>
                                </figcaption>
                            </figure>
                            <div className="lee-intro-bot-img2" style={{display:currentImg == 2 ? 'block':'none'}}>
                                <img src={introBg2} alt=""/>
                                <img src={introBg3} alt=""/>
                                <img src={introBg4} alt=""/>
                                <img src={introBg5} alt=""/>
                            </div>
                            <div className="lee-intro-bot-img3" style={{display:currentImg == 3 ? 'block':'none'}}>
                                <figure>
                                    <img src={introBg} alt=""/>
                                    <figcaption>
                                        <h2>落日余晖 </h2>
                                        <p>这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍</p>
                                    </figcaption>
                                </figure>
                                <img src={introBg6} alt=""/>
                            </div>
                        </div>

                        <div className="lee-intro-top">
                            <div className="lee-intro-top-item">
                                <div className="lee-intro-t-l"><Icon type="area-chart" theme="outlined" /></div>
                                <div className="lee-intro-t-r">
                                    <div>33.14%</div>
                                    <div>项目</div>
                                </div>
                            </div>
                            <div className="lee-intro-top-item">
                                <div className="lee-intro-t-l"><Icon type="pie-chart" theme="outlined" /></div>
                                <div className="lee-intro-t-r">
                                    <div>10.88%</div>
                                    <div>设计</div>
                                </div>
                            </div>
                            <div className="lee-intro-top-item">
                                <div className="lee-intro-t-l"><Icon type="bar-chart" theme="outlined" /></div>
                                <div className="lee-intro-t-r">
                                    <div>41.44%</div>
                                    <div>技术</div>
                                </div>
                            </div>
                            <div className="lee-intro-top-item">
                                <div className="lee-intro-t-l"><Icon type="dot-chart" theme="outlined" /></div>
                                <div className="lee-intro-t-r">
                                    <div>13.54%</div>
                                    <div>业绩</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			)
	}
}
