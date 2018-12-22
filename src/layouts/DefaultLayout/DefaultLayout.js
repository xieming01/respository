import React,{Component} from 'react';
import {Route} from 'react-router-dom';
// import { Scrollbars } from 'react-custom-scrollbars'
// import {Button} from 'antd';
import './DefaultLayout.less';
import { Head, User, RegistrationForm, AlertManage} from '../../components/header';
// import {Footer} from '../../components/footer';
import { About, Article, Home, Resource ,HomeDetail} from '../../content';
import {Footer}  from '../../components/footer'
class DefaultLayout extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return(
            // <div id="DefaultLayout"><span><Button>Hello World</Button></span> </div>
            <div style={{ "display": "flex","minHeight":"100vh","flexDirection":"column"}}>
                <Head location={this.props.location} history={this.props.history} match={this.props.match} />
                
                <div style={{"flex":1}}>
                    <Route path={this.props.match.url + '/all'} component={Home} exact/>
                    <Route path={this.props.match.url + '/'} component={Home} exact/>
                    <Route path={this.props.match.url + '/about'} component={About}   />
                    <Route path={this.props.match.url + '/article'} component={Article}   />
                    <Route path={this.props.match.url + '/resource'} component={Resource}  />
                    <Route path={this.props.match.url + '/user'} component={User} />
                    <Route path={this.props.match.url + '/setting'} component={RegistrationForm} />
                    <Route path={this.props.match.url + '/all/detail'} component={HomeDetail} />
                    <Route path={this.props.match.url + '/alertmessage'} component={AlertManage} />
                </div>
                <Footer style={{}}/>
               
            </div>
             
        )
    }
}
export default DefaultLayout