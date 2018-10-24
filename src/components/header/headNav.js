import React,{Component} from 'react';
import { Menu, Icon, Row, Col, Avatar}from 'antd';
import {Link} from 'react-router-dom';
import './HeadNav.less';
export default class HeadNav extends Component{
    constructor(props) {
        super(props);
        var location = this.props.location.pathname.split('/');
        var currentName = location[location.length - 1] ? location[location.length - 1] : 'home';
        this.state = {
            current: currentName,
        }
    }
    handleClick=(e)=>{
        this.setState({
            current:e.key
        })
    }
    // componentWillReceiveProps=(nextProps)=>{
    //     if(nextProps.location !== this.props.location){
    //         console.log('asqwwqd')
    //     }
     
    render(){
        return(
            <div className="header">
                <Row>
                    <Col span={8}> 
                        <Menu
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            onClick={this.handleClick}
                            style={{ "width": "45%", 'backgroundColor': "gray" }}

                        >
                            <Menu.Item key="home">
                                <Link to="/home">首页</Link>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Link to="/home/about">关于我们</Link>
                            </Menu.Item>
                            <Menu.Item key="article">
                                <Link to="/home/article">文章分享</Link>
                            </Menu.Item>
                            <Menu.Item key="resource" >
                                <Link to="/home/resource">资源共享</Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={4} offset={8}><Avatar icon="user" style={{ "backgroundColor": "red", "marginTop": "6px" }} /></Col>
                </Row>
            </div>
        )
    }
}
/* // "proxy": {
  //   "/": {
  //     "target": "http://localhost:3003",
  //     "ws": true,
  //     "changeOrign": true,
  //     "secure": false
  //   }
  // } */