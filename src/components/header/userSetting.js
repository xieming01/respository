import React,{Component} from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Tabs, Avatar} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const TabPane = Tabs.TabPane;
const AutoCompleteOption = AutoComplete.Option;
const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];
class RegistrationForm extends Component{
    constructor(props){
        super(props);
        this.state={
            confirmDirty:false,
            autoCompleteResult: [],
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    compareToFirstPassword=(rule,value,callback)=>{
        const form = this.props.form;
        if(value && value !== form.getFieldValue('password')){
            callback('Two passwords that you enter is inconsistent!');
        }else{
            callback();
        }
    }
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }
    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
         const registra = (

             <div style={{ "width": "40%", "marginTop": "10px",  }}>
                <div>
                    <h3>基本设置</h3>
                </div>
                 <Form onSubmit={this.handleSubmit.bind(this)}>
                     <FormItem
                         {...formItemLayout}
                         label="E-mail"
                     >
                         {getFieldDecorator('email', {
                             rules: [{
                                 type: 'email', message: 'The input is not valid E-mail!',
                             }, {
                                 required: true, message: 'Please input your E-mail!',
                             }],
                         })(
                             <Input />
                         )}
                     </FormItem>
                     <FormItem
                         {...formItemLayout}
                         label="password"
                     >
                         {getFieldDecorator('password', {
                             rules: [{
                                 required: true, message: 'Please input your password!',
                             }, {
                                 validator: this.validateToNextPassword,
                             }],
                         })(
                             <Input type="password" />
                         )}
                     </FormItem>
                     <FormItem
                         {...formItemLayout}
                         label="Confirm Password"
                     >
                         {getFieldDecorator('confirm', {
                             rules: [{
                                 required: true, message: 'Please confirm your password!',
                             }, {
                                 validator: this.compareToFirstPassword,
                             }],
                         })(
                             <Input type="password" onBlur={this.handleConfirmBlur} />
                         )}
                     </FormItem>
                     <FormItem
                         {...formItemLayout}
                         label={(
                             <span>
                                 Nickname&nbsp;
                                <Tooltip title="What do you want others to call you?">
                                     <Icon type="question-circle-o" />
                                 </Tooltip>
                             </span>
                         )}
                     >
                         {getFieldDecorator('nickname', {
                             rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                         })(
                             <Input />
                         )}
                     </FormItem>
                     <FormItem
                         {...formItemLayout}
                         label="Habitual Residence"
                     >
                         {getFieldDecorator('residence', {
                             initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                             rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
                         })(
                             <Cascader options={residences} />
                         )}
                     </FormItem>
                     <FormItem
                         {...formItemLayout}
                         label="Phone Number"
                     >
                         {getFieldDecorator('phone', {
                             rules: [{ required: true, message: 'Please input your phone number!' }],
                         })(
                             <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                         )}
                     </FormItem>
                     <FormItem
                         {...formItemLayout}
                         label="Website"
                     >
                         {getFieldDecorator('website', {
                             rules: [{ required: true, message: 'Please input website!' }],
                         })(
                             <AutoComplete
                                 dataSource={websiteOptions}
                                 onChange={this.handleWebsiteChange}
                                 placeholder="website"
                             >
                                 <Input />
                             </AutoComplete>
                         )}
                     </FormItem>
                     <FormItem
                         {...formItemLayout}
                         label="Captcha"
                         extra="We must make sure that your are a human."
                     >
                         <Row gutter={8}>
                             <Col span={12}>
                                 {getFieldDecorator('captcha', {
                                     rules: [{ required: true, message: 'Please input the captcha you got!' }],
                                 })(
                                     <Input />
                                 )}
                             </Col>
                             <Col span={12}>
                                 <Button>Get captcha</Button>
                             </Col>
                         </Row>
                     </FormItem>
                     <FormItem {...tailFormItemLayout}>
                         {getFieldDecorator('agreement', {
                             valuePropName: 'checked',
                         })(
                             <Checkbox>I have read the <a href="">同意</a></Checkbox>
                         )}
                     </FormItem>
                     <FormItem {...tailFormItemLayout}>
                         <Button type="primary" htmlType="submit">注册</Button>
                     </FormItem>
                 </Form>
                  
             </div>   
         )   
        return(
            <Tabs defaultActiveKey="1" tabPosition="left" style={{ "marginTop": "20px", "backgroundColor": "white" }} type="card">
                <TabPane tab="Tab 1" key="1">{registra}</TabPane>
                <TabPane tab="Tab 2"   key="2">Tab 2</TabPane>
                <TabPane tab="Tab 3" key="3">Tab 3</TabPane>
            </Tabs>
            // <div>
            //     <Menu
            //         defaultSelectedKeys={['1']} 
            //         mode="inline"
            //         style={{ width: 200, "marginTop": "20px", "backgroundColor": "white" }}
            //     >
            //         <Menu.Item key="1">Option 1</Menu.Item>
            //         <Menu.Item key="2">Option 2</Menu.Item>
            //     </Menu>
            // </div>
        )
    }
}
export default  Form.create()(RegistrationForm)