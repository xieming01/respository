import React, { Component } from 'react';
import { List, Avatar, Icon } from 'antd';
import { connect } from 'react-redux';
import {pageChange} from './action';
  class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            currentPage:1
        }
    }
    componentDidMount=()=>{
        this.props.pageChange(1);
    }
    render() {
        const listData =  [];
        for (let i = 0; i < 23; i++) {
            listData.push({
                href: 'http://ant.design',
                title: `ant design part ${i}`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            });
        }
        const IconText = ({ type, text }) => (
        <span>
            <Icon type={type} style={{ marginRight: 8 }} />
                {text}
        </span>
);    
        return (
            <div className="article" style={{ "width": "68%", 'marginLeft': '16%', 'marginTop':"10px","backgroundColor":"white"}}> 
                <List
                    itemLayout="vertical"
                    size="large"
                    bordered={true}
                    pagination={{
                    onChange: (page) => {
                        this.props.pageChange(page)
                    },
                    pageSize: 3,
                    showQuickJumper:true,
                    current:  this.state.currentPage,
                    }}
                     dataSource={listData}
                // footer={<div><b>ant design</b> footer part</div>}
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

const mapStateTopProps =(state)=>{
    return{
        data:state.page
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        pageChange:(page)=>{
            dispatch(pageChange(page))
        }
    }
}
export default connect(mapStateTopProps, mapDispatchToProps)(Home);