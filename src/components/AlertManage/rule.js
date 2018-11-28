import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Row, Col, Select, Button, Input, Checkbox, Icon, Form, Popconfirm, message } from 'antd';
const rules = [{ "key": "all", "label": "满足所有" }, { "key": "one", "label": "满足其中一个" }];
const Option = Select.Option;

// const InputGroup = Input.Group;
const throughput = [{ "key": "all", "label": "吞吐量(总)" }, { "key": "in", "label": "吞吐量(入)" }, { "key": "out", "label": "吞吐量(出)" }];
const judge = [{ "key": "over", "label": "大于" }, { "key": "low", "label": "小于" }];
const unit = ["B", "KB", "MB", "GB"];
const time = ['min', 's', 'h'];
class Rule extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        const { getInstance } = this.props;
        if (typeof getInstance === 'function') {
            getInstance(this); // 在这里把this暴露给`parentComponent`
        }
        this.state = {
            combinig_rule: rules[0],//组合规则栏
            add_rule: 0,//添加规则个数
            through_put: throughput[0],//吞吐量
            judgeValue: judge[0],//大于与小于栏
            unitValue: unit[0],//流量单位栏
            timeValue: time[0],//时间单位
            unitNum:'',
        }
    }
    handleTypeChange = (item) => {
        this.setState({
            combinig_rule: item
        });
    }
    addRule = () => {
        let a = this.state.add_rule + 1;
        this.setState({
            add_rule: a
        });
    }
    confirm = () => {
        let a = this.state.add_rule - 1;
        this.setState({
            add_rule: a
        })
        message.success('删除成功');
    }
    cancel = () => {
        message.error('取消删除');
    }
    onSubmit = (dataSource) => {
        this.props.form.validateFields((err, fieldsValue) => {
            if (!err) {
                var ss = this.state;
                let { timeValue, combinig_rule , unitValue} = this.state;

            }

        })
    }
    
    render() {
        let ruleArr = [];
        var { combinig_rule, add_rule, through_put, judgeValue, unitValue, timeValue, unitNum,timeNum } = this.state;
        const { getFieldDecorator } = this.props.form;
        var unitArr = (
            <Select
                onChange={this.handleTypeChange.bind(this)}
                value={unitValue ? unitValue : unit[0]}
            >
                {unit.map((item) => <Option key={item} value={item} >{item}</Option>)}
            </Select>
        );
        var timeArr = (
            <Select
                onChange={this.handleTypeChange.bind(this)}
                value={timeValue ? timeValue : time[0]}
            >
                {time.map((item) => <Option key={item} value={item} >{item}</Option>)}
            </Select>
        );
        for (let index = 0; index < add_rule; index++) {
            ruleArr.push(
                <Row key={index}>
                    <Col>
                        <Form layout="inline">
                            {/* <Form.Item key={index}>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: this.state.status.length ? this.state.status[index]  :false,
                                })(
                                    <Checkbox onClick={this.onBoxClick.bind(this,index)}>启用</Checkbox>
                                )}
                            </Form.Item> */}
                            <Form.Item
                            >
                                {getFieldDecorator('through_put', {
                                    initialValue: through_put ? through_put : throughput[0],
                                })(
                                    <Select
                                        onChange={this.handleTypeChange.bind(this)}
                                        labelInValue={true}
                                        // style={{ width: '45%'}}
                                    >
                                        {throughput.map((item) => <Option key={item.key} value={item.key} >{item.label}</Option>)}
                                    </Select>
                                )}
                            </Form.Item>
                            <Form.Item
                            >
                                {getFieldDecorator('judge', {
                                    initialValue: judgeValue ? judgeValue : judge[0],
                                })(
                                    <Select
                                        onChange={this.handleTypeChange.bind(this)}
                                        labelInValue={true}
                                        
                                    >
                                        {judge.map((item) => <Option key={item.key} value={item.key} >{item.label}</Option>)}
                                    </Select>
                                )}
                            </Form.Item>
                            <Form.Item
                            >
                                {getFieldDecorator('flowNumber', {
                                    initialValue: unitNum ? unitNum : '',
                                })(
                                    <Input addonAfter={unitArr}  />
                                )}
                            </Form.Item>
                            <Form.Item
                            >
                                {getFieldDecorator('time', {
                                    initialValue:timeNum ?  timeNum : "",
                                })(
                                    <Input addonAfter={timeArr}  />
                                )}
                            </Form.Item>
                            <Form.Item
                            >
                                <Popconfirm title="确定删除此条规则?" onConfirm={this.confirm.bind(this)} onCancel={this.cancel.bind(this)} okText="确定" cancelText="取消">
                                    <Icon type="delete" size="large" />
                                </Popconfirm>
                            </Form.Item>
                        </Form>
                    </Col >
                </Row >
            )
        }
        return (
            <div  >
                <Row >
                    <Col  >
                        组合规则:  <Select
                            onChange={this.handleTypeChange.bind(this)}
                            // mode="tags"
                            labelInValue={true}
                            // showArrow
                            // showSearch={true}
                            // optionFilterProp="children"
                            value={combinig_rule ? combinig_rule : rules[0]}
                            style={{ "width": "15%" }}
                        >
                            {rules.map((item) => <Option key={item.key} value={item.key} >{item.label}</Option>)}
                        </Select>
                        <Button onClick={this.addRule.bind(this)} type="primary">添加规则</Button>&nbsp;&nbsp;
                        {/* <Button onClick={this.onBoxClick.bind(this,"all")} type="primary" disabled={this.state.add_rule ? false :true}>全部启用</Button> */}
                    </Col>
                </Row>
                <div  className="ruleo" style={{"marginTop":"12px"}}>
                    <Scrollbars
                        autoHide
                        autoHideTimeout={100}
                        autoHideDuration={200}
                        universal={true}
                        autoHeightMax={240}
                        className='containerIn'
                        style={{ height: "260px" }}
                    >
                        {ruleArr}
                    </Scrollbars>
                </div>
               
            </div>
        )
    }
}
export default Form.create()(Rule)