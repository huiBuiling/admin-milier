import React, { Component } from 'react';
import { Icon } from 'antd';

import barImg from '../../assert/images/bar.jpg';

export default class RightTopBar extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="barimg">
                <img src={barImg} alt=""/>
                <div className="address">
                    <Icon type="environment" />中国，广东，广州
                </div>
                <div className="block">
                    <Icon type="user" />
                    <p>hui</p>
                </div>
                <div className="block block2">
                    <Icon type="user" />
                    <p>lee</p>
                </div>
            </div>
        );
  }
}

