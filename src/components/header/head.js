import React,{Component} from 'react';
import { Menu, Icon, Row, Col, Avatar, Modal} from 'antd';
import {Link} from 'react-router-dom';
import './style.css'
import Login from './login';
class Head extends Component{
    constructor(props){
        super(props);
        const location = this.props.location.pathname.split('/');
        var current = location.length ? location[location.length-1] : '0';
        this.state={
            current: [current],
            visible:false
        }
    }
    handleClick = (e)=>{
        this.setState({
            current:e.key.split(''),
        })
    }
    showLogin=()=>{
        this.setState({
             visible:true 
        })
    }
    showModal = () => {
        this.setState({
            visible: false
        })
    }
    render(){
        // let itemList = [];
         
        // let num = this.state.title;
        // num.forEach((element,index)=>{
        //     let indexString = index.toString();
             
        //     itemList.push(<Menu.Item key={indexString}><Icon type="mail" /> {element} </Menu.Item>)
        // })
        return (
            <div className='header' >
                <Row >
                    {/* <Col offset={4} span={7} style={{"paddingTop":"6px"}}>
                        <a className="logo" href="/">
                            CNode
                        </a>
                    </Col> */}
                    <Col offset={2} span={6} style={{ 'width': '21%', 'marginLeft': '16%'}} >
                        <Menu className='menu_title'
                            onClick={this.handleClick.bind(this)}
                            mode="horizontal"
                            defaultSelectedKeys={this.state.current}
                        >
                            <Menu.Item key='all'>  <Link to="/home/all">首页</Link></Menu.Item>
                            <Menu.Item key='about'>   <Link to="/home/about">关于我</Link> </Menu.Item>
                            <Menu.Item key='article'>  <Link to="/home/article">文章分享</Link> </Menu.Item>
                            <Menu.Item key='resource'> <Link to="/home/resource">资源共享</Link> </Menu.Item>
                        </Menu>
                    </Col>
                    <Col><Avatar style={{"backgroundColor":"red",'marginLeft':'40%'}} icon="user" onClick={this.showLogin.bind(this)}/></Col>
                </Row>
                <Modal
                    centered={true}
                    footer={null}
                    visible={this.state.visible}
                    onCancel={() => {
                        this.setState({
                            visible: false
                        })}}
                //  
                >
                    <Login showModal={this.showModal.bind(this)}/>
                </Modal>
            </div>
        )
    }
}
export default Head