import React,{ Component } from 'react';
import {Icon,Tag, Input, Tooltip} from 'antd';

/**
 * @author hui
 * @date 2019/4/19
 * @Description: demoTag
*/
export default class DemoTag extends Component {
    constructor(props){
        super(props);
    }
    state = {
        tags: ['Unremovable', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: '',
        color:['#f50','#2db7f5','#87d068','#108ee9'],
        // color:['magenta','red','volcano','orange','gold','lime','green','cyan','blue']
    };

    handleClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        // console.log(tags);
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
        // console.log(tags);
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
    }

    saveInputRef = input => this.input = input;

    render() {
        const { tags, inputVisible, inputValue,color } = this.state;
        return (
            <div>
                <div>
                    <h4 style={{ marginBottom: 16 }}>Presets:</h4>
                    <div>
                        <Tag color="magenta">magenta</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="volcano">volcano</Tag>
                        <Tag color="orange">orange</Tag>
                        <Tag color="gold">gold</Tag>
                        <Tag color="lime">lime</Tag>
                        <Tag color="green">green</Tag>
                        <Tag color="cyan">cyan</Tag>
                        <Tag color="blue">blue</Tag>
                        <Tag color="geekblue">geekblue</Tag>
                        <Tag color="purple">purple</Tag>
                    </div>
                    <h4 style={{ margin: '16px 0' }}>Custom:</h4>
                    <div>
                        <Tag color="#f50">#f50</Tag>
                        <Tag color="#2db7f5">#2db7f5</Tag>
                        <Tag color="#87d068">#87d068</Tag>
                        <Tag color="#108ee9">#108ee9</Tag>
                    </div>
                    <div>
                        {tags.map((tag, index) => {
                            const isLongTag = tag.length > 20;
                            const tagElem = (
                                <Tag key={tag} color = {color[Math.floor(Math.random() * 4 + 1)]} closable={index !== 0} afterClose={() => this.handleClose(tag)}>
                                    {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                </Tag>
                            );
                            return isLongTag ? <Tooltip color = {color[Math.floor(Math.random() * 4 + 1)]} title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
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
                        {!inputVisible && (
                            <Tag
                                onClick={this.showInput}
                                style={{ background: '#fff', borderStyle: 'dashed' }}
                            >
                                <Icon type="plus" /> New Tag
                            </Tag>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
