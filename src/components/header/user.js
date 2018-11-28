import React, { Component } from "react";
import { Row, Col, Card, Divider, Tag, Icon, List, Avatar, Spin, Tooltip, Menu, Dropdown } from 'antd';
import moment from 'moment';
export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // key: 'tab1',
            noTitleKey: 'article',
        }
    }
    onTabChange = (key, type) => {
        // console.log(key, type);
        this.setState({ [type]: key });
    }

    render() {
        const tabListNoTitle = [{
            key: 'article',
            tab: 'article',
        }, {
            key: 'app',
            tab: 'app',
        }, {
            key: 'project',
            tab: 'project',
        }];
        const IconText = ({ type, text }) => (
            <span>
                <Icon type={type} style={{ marginRight: 8 }} />
                {text}
            </span>
        );
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
                </Menu.Item>
            </Menu>
        );
        const listData = [];
        for (let i = 0; i < 2; i++) {
            listData.push({
                href: 'http://ant.design',
                title: `ant design part ${i}`,
                // avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            });
        }
        const contentListNoTitle = {
            article:
            <Spin
                    spinning={true}
                    tip="加载中"
            >
            <List
                size="large"
                rowKey="id"
                itemLayout="vertical"
                dataSource={listData}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText type="star-o" text="4" />,
                            <IconText type="like-o" text="5" />,
                            <IconText type="message" text="6"/>,
                        ]}
                    >
                        <List.Item.Meta
                            title={
                                <a  href={item.href}>
                                    {item.title}
                                </a>
                            }
                            description={
                                <span>
                                    <Tag>Ant Design</Tag>
                                    <Tag>设计语言</Tag>
                                    <Tag>蚂蚁金服</Tag>
                                </span>
                            }
                        />
                        
                        <div>
                            <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" size="small" />
                            <a href="#"> 猪婆</a> 发布在 <a href="#">猪婆</a>
                            <em>{moment().format('MMMM Do YYYY, h:mm:ss a')}</em>
                            <br/>
                            {item.content}
                        </div>
                    </List.Item>
                )}
            />
            </Spin>,
            app: <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16}>
                    <Col span={12} style={{ "marginBottom":"10px" }}>
                        <Card title="Card title" bordered={false}>Card content</Card>
                    </Col>
                    <Col span={12} style={{ "marginBottom": "10px" }}>
                        <Card title="Card title" bordered={false}>Card content</Card>
                    </Col>
                    <Col span={12}>
                        <Card hoverable
                            bodyStyle={{ paddingBottom: 20 }}
                            actions={[
                                <Tooltip title="下载">
                                    <Icon type="download" />
                                </Tooltip>,
                                <Tooltip title="编辑">
                                    <Icon type="edit" />
                                </Tooltip>,
                                <Tooltip title="分享">
                                    <Icon type="share-alt" />
                                </Tooltip>,
                                <Dropdown overlay={menu}>
                                    <Icon type="ellipsis" />
                                </Dropdown>,
                            ]}> 
                           <Card.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="samll" />}
                                title="猪婆"
                           />
                               <div>
                                  <Row style={{"marginTop":"20px","textAlign":"center"}} >
                                    <Col span={6}  ><div>
                                        <p>活跃用户</p>
                                        <p>猪婆</p>
                                    </div></Col>
                                    <Col span={6} offset={3}  ><div>
                                        <p>活跃用户</p>
                                        <p>猪婆</p>
                                    </div></Col>
                                  </Row>
                               </div>
                                
                        </Card>
                    </Col>
                </Row>
            </div> ,
            project:  
                <Row>
                    <Col span={9} offset={2}  >
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Card.Meta
                            title="Europe Street beat"
                            description="www.instagram.com"
                        />
                        <div>
                            {/* <span>{moment().format('MMMM Do YYYY, h:mm:ss a')}</span> */}
                            <span >两分钟前</span>
                            <span>
                                    <Avatar size="small" icon="user" />
                            </span>
                        </div>
                    </Card>
                    
                    </Col>
                    <Col span={9} offset={2} style={{ backgroundColor: "red" }}> <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Card.Meta
                            title="Europe Street beat"
                            description="www.instagram.com"
                        />
                        <div>
                            {/* <span>{moment().format('MMMM Do YYYY, h:mm:ss a')}</span> */}
                            <span >两分钟前</span>
                            <span>
                                <Avatar size="small" icon="user" />
                                <Avatar size="small" icon="user" />
                                <Avatar size="small" icon="user" />
                            </span>
                        </div>
                    </Card></Col>
                </Row>
            ,
        };
        return (
            <div style={{ "marginTop": "24px","marginLeft":"24px" ,"width":"80%","height":"50%"}}>
                <Row gutter={24}>
                    <Col lg={7} md={24}>
                        <Card bordered={true} style={{ "marginBottom": 24 }} loading={false}>
                            <div>
                                <div className="{styles.avatarHolder}">
                                    <p style={{"textAlign":"center"}}>
                                    <img alt="qwsd" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" width="102px"  />
                                    </p>
                                    <div className="{styles.name}" style={{ "textAlign": "center","fintSize":"medium","fontWeight":"bold" }}>currentUser.name</div>
                                    <div style={{ "textAlign": "center" }}>currentUser.signature</div>
                                </div>
                                <div  >
                                    <p style={{ "marginBottom": 0 }}>
                                     
                                        {/* <Tag color="#f50">基本用法</Tag> */}
                                        <Icon type="qq" />&nbsp; 基本用法
                                </p>  
                                    <p style={{ "marginBottom": 0 }}>
                                        <i className="{styles.title}" />
                                        <Icon type="github" />&nbsp; 基本用法
                                </p> 
                                    <p>
                                        <i className="{styles.title}" />
                                        currentUser.title
                                </p>                                   
                                </div>
                                <Divider dashed />
                                <div className="{styles.tags}">
                                    <div className="{styles.tagsTitle}">标签</div>
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
                            </div>
                            <Divider style={{ marginTop: 16 }} dashed />
                        </Card>
                    </Col>
                    <Col lg={17} md={24}>
                        <Card
                            style={{ width: '100%' }}
                            tabList={tabListNoTitle}
                            activeTabKey={this.state.noTitleKey}
                            onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
                        >
                            {contentListNoTitle[this.state.noTitleKey]}
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
