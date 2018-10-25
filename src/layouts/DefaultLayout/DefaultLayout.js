import React,{Component} from 'react';
import {Route} from 'react-router-dom';
// import {Button} from 'antd';
import './DefaultLayout.less';
import Head from '../../components/header';
import {Footer} from '../../components/footer';
import { About, Article, Home, Resource } from '../../content';
class DefaultLayout extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return(
            // <div id="DefaultLayout"><span><Button>Hello World</Button></span> </div>
            <div>
                <Head location={this.props.location} history={this.props.history} match={this.props.match}/>
                <div>
                    <Route path={this.props.match.url + '/all'} component={Home} exact />
                    <Route path={this.props.match.url + '/about'} component={About} />
                    <Route path={this.props.match.url + '/article'} component={Article} />
                    <Route path={this.props.match.url + '/resource'} component={Resource} />
                </div>
                <Footer/>
            </div>
             
        )
    }
}
export default DefaultLayout