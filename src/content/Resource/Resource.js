import React, { Component } from 'react';
import {Avatar,Card,Icon,Tag} from 'antd';
import {Link} from 'react-router-dom';
import ListItem from './list';
// import "./style.css";
const {Meta} = Card;
export default class Resource extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // currentPage: 1
        }
    }
    render() {
        return (
            <div>
                <div style={{  "width":"67%", "marginTop": "30px","backgroundColor":"rgb(120,120,120,0.6)","marginLeft":"70px","float":"left" }}>
                    <ListItem/>
                </div>
            <div className="resource" style={{   "float": "right" ,"marginRight":"80px","marginTop":"30px" ,"width":"18%"}}> 
               
                <Card
                    style={{ width: "100%"  }}
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
                <Card
                    title="最近文章"
                    extra={<a href="#">more</a>}
                    style={{ "width": "100%" ,"marginTop":"20px","marginRight":"0px",'height':'312px'}}
                >
                    <ul className='article'  >
                        <li key="1" onClick={() => { this.props.history.push({ pathname: '/home/all', state: { 'data': 'article' } }) }}><Tag color="magenta"> 文章分享文章享</Tag></li>
                        <br/>
                        <li key="2" onClick={() => { this.props.history.push({ pathname: '/home/all', state: { 'data': 'article' } }) }}><Tag color="red"> 文章享文章享文章享</Tag></li> 
                        <br />
                        <li key="3" onClick={() => { this.props.history.push({ pathname: '/home/all', state: { 'data': 'article' } }) }}><Tag color="volcano">文章享文章享</Tag></li>
                        <br />
                        <li key="4" onClick={() => { this.props.history.push({ pathname: '/home/all', state: { 'data': 'article' } }) }}><Tag color="gold">文章享文章享</Tag></li> 
                        <Link to={{ pathname: '/home/all', state: { data: 'article' } }}><Tag color="gold">文章享文章享</Tag></Link>
                    </ul>
                </Card>
            </div>
            </div>
        )
    }
}