import React, { Component } from 'react';
import { Drawer, Button, Table, Popconfirm, message, Row, Col, Menu, Dropdown } from 'antd';
import TabDetail from './TabDetail';
// import PropTypes from "prop-types";
class AlertManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            title: "手动阀值"
        }
    }
    // // 父组件声明自己支持 context
    // static childContextTypes = {
    //     onSubmit: PropTypes.func,
    // }
    // // 父组件提供一个函数，用来返回相应的 context 对象
    // getChildContext() {
    //     return {

    //         onSubmit: this.onSubmit.bind(this)
    //     }
    // }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    deleteOnCancel = (e) => {
        message.error('取消删除', 3);
    }
    deleteOnConfirm = (value) => {

    }
    onMenuClick = (item) => {
        switch (item.key) {
            case "1":
                this.setState({
                    title: '手动阀值'
                });
                break;
            case "2":
                this.setState({
                    title: '自动基线'
                });
                break;
            case "3":
                this.setState({
                    title: '系统健康'
                });
                break;
            default:
                break;
        };
    }
    render() {
        const columns = [{
            title: '告警名称',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '描述',
            dataIndex: 'description',
                key: 'description',
        }, {
            title: '类型',
            dataIndex: 'type',
            key: 'type'
        }, {
            title: '告警对象',
            dataIndex: 'obj',
            key: 'obj'
        },{
            title: '规则ID',
            dataIndex: 'id',
            key: 'id' 
        },{
            title: '告警条件',
            dataIndex: 'condition',
            key: 'condition'     
        },{
            title: '接收邮件',
            dataIndex: 'email',
            key: 'email'    
        },{
            title: '是否发送',
            dataIndex: 'push',
            key: 'push'
        },{
            title: '最近检测时间',
            dataIndex: 'test_time',
            key: 'test_time'
        },{
            title: '最近告警时间',
            dataIndex: 'alarm_time',
            key: 'alarm_time'
        },{
            title: 'Action',
            key: 'action',
            render: (text, record) => {
                return (
                    <span>
                        <a type="primary" onClick={this.showDrawer.bind(this)}>查看详情</a>
                        <span className="ant-divider" />
                        <a type="primary" onClick={this.showDrawer.bind(this)}>编辑</a>
                        <span className="ant-divider" />
                        <Popconfirm title={"您确认删除:" + text.name + "?"} onCancel={this.deleteOnCancel.bind(this)} onConfirm={() => this.deleteOnConfirm(text)}>
                            <a>删除</a>
                        </Popconfirm>
                    </span>
                )
            }
        }]
        var data = [{
            key: '1',
            name: '胡彦斌',
            description: 32,
            type: '西湖区湖底公园1号'
        }, {
            key: '2',
            name: '胡彦祖',
            description: 42,
            type: '西湖区湖底公园1号'
        }];
        const menu = (
            <Menu onClick={this.onMenuClick.bind(this)}>
                <Menu.Item key='1'>
                    <a>手动阀值</a>
                </Menu.Item>
                <Menu.Item key='2'>
                    <a>自动基线</a>
                </Menu.Item>
                <Menu.Item key='3'>
                    <a>系统健康</a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div style={{ "backgroundColor": "white", "width": "68%", 'marginLeft': '16%', 'marginTop': "10px", "padding": "15px 15px 0px 15px" }}>
                {/* <Button type="primary" onClick={this.showDrawer.bind(this)}>
                    Open Modal
                </Button> */}
                <Row className="tools">
                    <Col span={11} style={{ "margin": "0px 0px 15px 15px" }}>
                        <Dropdown overlay={menu}>
                            <Button type="primary">{this.state.title}</Button>
                        </Dropdown>
                    </Col>
                    <Col span={12} style={{ "textAlign": "right", "margin": "0px 15px 15px 0px" }}>
                        <Button type="primary" onClick={this.showDrawer.bind(this)}>
                            添加告警
                        </Button>
                    </Col>
                </Row>
                {/*工具栏 end  */}
                <Table columns={columns} dataSource={data} rowKey="status"
                    bordered={true} />
                <Drawer
                    title="添加规则"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    destroyOnClose={true}
                    width="1000px"
                >
                    <TabDetail onClose={this.onClose.bind(this)} />
                </Drawer>

            </div>
        )
    }
}

export default AlertManage