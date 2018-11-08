import React,{Component} from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
//  import {Footer} from './components/footer';
// import { HeadNav} from  './components/header';
// import { About, Article, Home, Resource } from './content';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout.js';
import {Footer} from '../src/components/footer';


class RouterWrap extends Component{
    render(){
        return(
            <div id="router"  >
                <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/home" component={DefaultLayout} />
                        {/*<Route path='*' component={LoginUser} />*/}
                        {/*<Redirect from='*' to='/404' />*/}
                       
                        <Route path="/" render={()=><Redirect to="/home/all"/>} />
                        
                    </Switch>
                    <Footer />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
export default RouterWrap