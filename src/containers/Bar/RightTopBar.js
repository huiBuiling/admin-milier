import React, { Component } from 'react';
import { Icon } from 'antd';

import barImg from '../../assert/images/bar.jpg';

export default class RightTopBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            len :[],
        }
    }

    componentDidMount(){
        const width = this.refs.barimg.offsetWidth;
        let len = [];
        for(let i = 0;i < width / 32; i++){
            len.push(i);
        }
        this.setState({len});
    }

    render() {
        const len = this.state.len;
        return (
            <div className="barimg" ref="barimg">
                <img src={barImg} alt=""/>
                <div className="address">
                    <Icon type="environment" />中国，广东，广州
                </div>
                <div className="barimg-r">
                    {len.map(index =>{
                        return <div className="barimg-r-t" key={index} style={{right:60*index}}>
                            <div className="block"></div>
                            <div className="block"></div>
                            <div className="block"></div>
                            <div className="block"></div>
                            <div className="block"></div>
                        </div>
                    })}
                    {len.map(index =>{
                        return <div className="barimg-r-t barimg-r-t2" key={index} style={{right:60*index}}>
                            <div className="block"></div>
                            <div className="block"></div>
                            <div className="block"></div>
                            <div className="block"></div>
                            <div className="block"></div>
                        </div>
                    })}
                </div>
            </div>
        );
  }
}

