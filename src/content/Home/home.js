import React, { Component } from 'react';
import { List, Avatar, Icon } from 'antd';
export default class Home extends Component {
    render() {
        const listData = [{
            href: 'http://ant.design',
            title: `ant design part `,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content: 'We supply a series of design principles, practical patterns and high quality de',
        }];
        const IconText = ({ type, text }) => (
        <span>
            <Icon type={type} style={{ marginRight: 8 }} />
                {text}
        </span>
);    
        return (
            <div className="article"> 
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 3,
                    }}
                     dataSource={listData}
                footer={<div><b>ant design</b> footer part</div>}
                renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                    extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                >
                 <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                />
                    {item.content}
                </List.Item>
                )}
            />
            </div>
        )
    }
}