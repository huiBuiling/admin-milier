import React,{Component} from 'react'
import {
    Form, Select, InputNumber, Switch, Radio,
    Slider, Button, Upload, Icon, Rate,
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

/**
 * 会议
 */
class ConferenceFrom extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
            }
        });
    }

    normFile = (e) => {
        // console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }

	render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
		return (
		    <div className="lee-hy-form">
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="主持人"
                    >
                        <span className="ant-form-text">挽歌</span>
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="会议中心"
                    >
                        {getFieldDecorator('radio-group')(
                            <RadioGroup>
                                <Radio value="a">会议中心1</Radio>
                                <Radio value="b">会议中心2</Radio>
                                <Radio value="c">会议中心3</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="会议事项"
                    >
                        {getFieldDecorator('radio-button')(
                            <RadioGroup>
                                <RadioButton value="a">会议事项1</RadioButton>
                                <RadioButton value="b">会议事项2</RadioButton>
                                <RadioButton value="c">会议事项3</RadioButton>
                            </RadioGroup>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="会议人员"
                    >
                        {getFieldDecorator('input-number', { initialValue: 30 })(
                            <InputNumber min={1} max={10} />
                        )}
                        <span className="ant-form-text"> machines</span>
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="是否缺席"
                    >
                        {getFieldDecorator('switch', { valuePropName: 'checked' })(
                            <Switch />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="视频人员"
                        hasFeedback
                    >
                        {getFieldDecorator('select', {
                            rules: [
                                { required: true, message: '视频参与人员!' },
                            ],
                        })(
                            <Select placeholder="视频参与人员">
                                <Option value="Lisya">Lisya</Option>
                                <Option value="Meray">Meray</Option>
                            </Select>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="缺席人员"
                    >
                        {getFieldDecorator('select-multiple', {
                            rules: [
                                { required: true, message: '缺席人员列表!', type: 'array' },
                            ],
                        })(
                            <Select mode="multiple" placeholder="Please select favourite colors">
                                <Option value="red">李四</Option>
                                <Option value="green">张三</Option>
                                <Option value="blue">王五</Option>
                            </Select>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="会议进度"
                    >
                        {getFieldDecorator('slider')(
                            <Slider marks={{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }} />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="会议评分"
                    >
                        {getFieldDecorator('rate', {
                            initialValue: 3.5,
                        })(
                            <Rate />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="会议文件"
                    >
                        <div className="dropbox">
                            {getFieldDecorator('dragger', {
                                valuePropName: 'fileList',
                                getValueFromEvent: this.normFile,
                            })(
                                <Upload.Dragger name="files" action="/upload.do">
                                    <p className="ant-upload-drag-icon">
                                        <Icon type="inbox" />
                                    </p>
                                    <p className="ant-upload-text">拖曳上传会议文件</p>
                                    <p className="ant-upload-hint">注意：大小不能超过100M</p>
                                </Upload.Dragger>
                            )}
                        </div>
                    </FormItem>

                    <FormItem
                        wrapperCol={{ span: 12, offset: 6 }}
                    >
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </FormItem>
                </Form>
            </div>
			)
	}
}
const ConferenceFroms = Form.create()(ConferenceFrom);
export default ConferenceFroms