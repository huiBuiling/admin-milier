import React,{Component} from 'react'
import { Progress,Timeline,Tag, Input, Tooltip, Button } from 'antd';

import html from '../../assert/images/home/html.jpg'
import jquery from '../../assert/images/home/jquery.jpg'
import bootstrap from '../../assert/images/home/bootstrap.jpg'
import vue from '../../assert/images/home/vue.jpg'
import react from '../../assert/images/home/react.jpg'
import angular from '../../assert/images/home/angular.jpg'


// table列表
const scienceList = [
	{
      imgs: <img src={html} />,
      science: 'html+css',
      deep: <div className="progress"><Progress percent={80} strokeWidth={7} status="active" /></div>,
      ability:'jquery'
    }, {
      imgs: <img src={jquery} />,
      science: 'jquery',
      deep: <div className="progress"><Progress percent={70} strokeWidth={7} status="active" /></div>,
      ability:'jquery+jqueryUI'
    }, {
      imgs: <img src={bootstrap} />,
      science: 'bootstrap',
      deep: <div className="progress"><Progress percent={80} strokeWidth={7} status="active" /></div>,
      ability:'bootstrap'
    },{
      imgs: <img src={vue} />,
      science: 'vue',
      deep: <div className="progress"><Progress percent={30} strokeWidth={7} status="active" /></div>,
      ability:'vue+vuex'
    },{
      imgs: <img src={react} />,
      science: 'react',
      deep: <div className="progress"><Progress percent={10} strokeWidth={7} status="active" /></div>,
      ability:'react+antd'
    },{
      imgs: <img src={angular} />,
      science: 'angular',
      deep: <div className="progress"><Progress percent={30} strokeWidth={7} status="active" /></div>,
      ability:'angular'
    }
];

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tags: ['react', 'react-router', 'antdesign'],
		    inputVisible: false,
		    inputValue: ''
		};
	}

	// tabs
	handleClose = (removedTag) => {
	  const tags = this.state.tags.filter(tag => tag !== removedTag);
	  console.log(tags);
	  this.setState({ tags });
	}

	showInput = () => {
	  this.setState({ inputVisible: true }, () => this.input.focus());
	}

	handleInputChange = (e) => {
	  this.setState({ inputValue: e.target.value });
	}

  handleInputConfirm = () => {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  }

  saveInputRef = input => this.input = input

	render() {
		//tabs
		const { tags, inputVisible, inputValue } = this.state;
		return (
			<div className="lee-rbb-all">
				<div className="lee-home">
					<div className="lee-home-card">
						<h4>当前学习知识点进度</h4>
						<div className="lee-home-times">
							<Timeline pending={<a href="#">See more</a>}>
							  <Timeline.Item>react-router+react-router-dom 路由操作</Timeline.Item>
							  <Timeline.Item>react+antd 页面布局</Timeline.Item>
							  <Timeline.Item>react基础知识</Timeline.Item>
							</Timeline>
						</div>
                    </div>

                    <div className="lee-home-card">
						<h4>当前学习知识点tabs</h4>
						<div className="lee-home-tabs">
							<span className="lee-home-tab-title">tabs：</span>
							<div className="lee-home-tab-r">
								{tags.map((tag, index) => {
									const isLongTag = tag.length > 20;
									const tagElem = (
										<Tag key={tag} closable={index !== 0} afterClose={() => this.handleClose(tag)} color="purple">
										{isLongTag ? `${tag.slice(0, 20)}...` : tag}
										</Tag>
										);
									return isLongTag ? <Tooltip title={tag}>{tagElem}</Tooltip> : tagElem;
								})}
								{inputVisible && (
									<Input
									ref={this.saveInputRef}
									type="text"
									size="small"
									style={{ width: 78 }}
									value={inputValue}
									onChange={this.handleInputChange}
									onBlur={this.handleInputConfirm}
									onPressEnter={this.handleInputConfirm}
									/>
									)}
								{!inputVisible && <Button size="small" type="dashed" onClick={this.showInput}>+ New Tag</Button>}
							</div>
						</div>
					</div>

                    <div className="lee-home-card">
						<h4>技术概览</h4>
						<table>
							<thead>
								<tr>
									<th style={{width:'20%'}}>图片</th>
									<th style={{width:'10%'}}>技术</th>
									<th style={{width:'20%'}}>熟练度</th>
									<th style={{width:'60%'}}>知识点</th>
								</tr>
							</thead>
							<tbody>
								{
									scienceList.map((e,index) => {
										return <tr key={index}>
													<td style={{width:'10%'}}>{e.imgs}</td>
													<td style={{width:'20%'}}>{e.science}</td>
													<td style={{width:'30%'}}>{e.deep}</td>
													<td style={{width:'50%'}}>{e.ability}</td>
												</tr>

									})
								}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			)
	}
}
export default Home