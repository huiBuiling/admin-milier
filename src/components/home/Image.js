import React,{Component} from 'react'
import { Progress,Timeline,Tag, Input, Tooltip, Button } from 'antd';

/**
 * image
 */
export default class HomeImage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list:[
				{
					url:'img01',
					title:'Post an image with animation',
					desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
				},
                {
                    url:'img02',
                    title:'Another post',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img03',
                    title:'Post an image with animation',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img04',
                    title:'Another post',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img05',
                    title:'Post an image with animation',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img06',
                    title:'Post an image with animation',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img07',
                    title:'Another post',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img08',
                    title:'Post an image with animation',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img09',
                    title:'Post an image with animation',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img10',
                    title:'Another post',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img11',
                    title:'Another post',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img12',
                    title:'Another post',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img11',
                    title:'Another post',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                },
                {
                    url:'img01',
                    title:'Another post',
                    desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                }
			]
		};
	}

	render() {
		const { list } = this.state;
		return (
			<div className="lee-rbb-all">
				<div className="lee-image">
                    {list.map((item,index)=>{
                        return <div className="lee-image-item" key={index}>
                                   <img src={require(`../../assert/images/img/${item.url}.jpg`)} alt=""/>
                                   <h4>{item.title}</h4>
                                   <p>{item.desc}</p>
                               </div>
                    })}

				</div>
			</div>
			)
	}
}
