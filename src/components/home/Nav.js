import React,{Component} from 'react';

import NavChat from '../../common/lineChart/LineChat';

/**
 * @author hui
 * @date 2019/4/18
 * @Description: 系统导航
*/
export default class Nav extends Component {

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

	render() {
		const imgList = this.state.imgList;
		return (
                <div className="lee-home-nav">
                    <h4><span>系统导航</span><a href="#">+ 更多</a></h4>
                    <div className="lee-home-card-con">
                        {imgList.map(item =>{
                                return <div key={item.name} className="lee-home-card-con-i">
                                        <img src={require(`../../assert/images/home/${item.name}.jpg`)} alt=""/>
                                    <p>{item.text}</p>
                                </div>
                            })
                        }
                    </div>

                    <NavChat
                        style={{height:200}}
                        xAxisData = {[
                            'Css', 'Html', 'Js',
                                'Css3', 'H5', 'Animation', 'Swiper',
                                'jquery', 'EasyUI', 'Bootstrap',
                                'Vue', 'Vuex', 'elementUI',
                                'angular', '小程序',
                                'React', 'React-router', 'React-redux', 'Dva',
                                'Node', 'Jade', 'Mongo'
                            ]}
                        seriesData = {[
                            4500, 4900, 4200,
                            4000, 4200, 3400,3000,
                            4400, 3000, 4800,
                            1900, 1900, 1900,
                            2600, 0,
                            4800, 4700, 4000, 4700,
                            3500, 1800,1900
                        ]}
                    />
                </div>
			)
	}
}
