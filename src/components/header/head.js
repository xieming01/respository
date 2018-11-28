import React,{Component} from 'react';
import { Menu, Icon, Row, Col, Avatar, Modal,Popover,message} from 'antd';
// import {Link} from 'react-router-dom'
import {Link} from 'react-router-dom';
import './style.css'
import Login from './login';
class Head extends Component{
    constructor(props){
        super(props);
        const location = this.props.location.pathname.split('/');
        var locationSplice = location.splice(0,3);
        var current = locationSplice.length ? locationSplice[locationSplice.length-1] : 'all';
        this.state={
            current: [current],
            visible:false,
            user:false,
            color:"white",
            color_1: "white",
            color_2: "white"
        }
    }
    // componentWillReceiveProps=(nextProps)=>{
    //     let keyMenu = nextProps.location.pathname.split('/');
    //     let nextKey = keyMenu.length ? keyMenu[keyMenu.length - 1] : 'all';
    //     if(nextKey)
        
    // }
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
    showModal = (result) => {
        this.setState({
            visible: false,
            user:true
        });
    }
    render(){
        // let itemList = [];
         
        // let num = this.state.title;
        // num.forEach((element,index)=>{
        //     let indexString = index.toString();
             
        //     itemList.push(<Menu.Item key={indexString}><Icon type="mail" /> {element} </Menu.Item>)
        // })
        const content = (
            <div>
            <Row className='userstyle' style={{"height":"100px","width":"100px","textAlign":"center"}}>
                <Col style={{ "marginTop": "8px", 'backgroundColor': this.state.color }} 
                onMouseEnter={() => { this.setState({ color: "rgb(200,200,200,0.6)" })} }
                    onMouseLeave={() => { this.setState({ color: "white" }) }} 
                    ><span><Icon type='user' />  &nbsp;<Link to='/home/user'><font color="#444">个人中心</font></Link></span></Col>
             
                    <Col style={{ "marginTop": "10px", 'backgroundColor': this.state.color_1  }}
                    onMouseEnter={() => { this.setState({ color_1: "rgb(200,200,200,0.6)" }) }}
                        onMouseLeave={() => { this.setState({ color_1: "white" }) }} ><span ><Icon type='setting' />  &nbsp;<Link to='/home/setting'><font color="#444">个人设置</font></Link></span></Col> 
                    <Col style={{ "marginTop": "10px", 'backgroundColor': this.state.color_2 }}
                    onMouseEnter={() => { this.setState({ color_2: "rgb(200,200,200,0.6)" }) }}
                    onMouseLeave={() => { this.setState({ color_2: "white" }) }} 
                    onClick={()=>{this.setState({user:false});message.success("退出成功")}}
                    >
                    <span><Icon type='logout' />  &nbsp;退出登录</span></Col>
                </Row>     
            </div>
        );
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
                    {this.state.user ?
                        <Col>
                        <Popover content={content}   trigger="click" placement="bottom" arrowPointAtCenter={true} className='popovers'  >
                           <Avatar style={{ "backgroundColor": "red", 'marginLeft': '40%' }} icon="user"  /> 
                                
                        </Popover>
                            <span style={{ "fontSize": 15 }}>&nbsp;&nbsp;admin</span>
                        </Col>
                        :
                        <Col><Avatar style={{ "backgroundColor": "red", 'marginLeft': '40%' }} icon="user" onClick={this.showLogin.bind(this)}  className="login"/></Col>
                    }
                    
                </Row>
                <Modal
                    title="登录"
                    centered={true}
                    footer={null}
                    visible={this.state.visible}
                    onCancel={() => {
                        this.setState({
                            visible: false
                        })}}
                    destroyOnClose={true}
                    // getContainer={() => Row}
                //  
                >
                       <Login showModal={this.showModal.bind(this)}/> 
                </Modal>
            </div>
        )
    }
}
export default Head