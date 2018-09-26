import React from 'react';
import ReactDOM from 'react-dom';

import {createStore,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';

import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
//redux中间件
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import counter from './component/reducer';
import App  from './component/App.js';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(
    counter,
    applyMiddleware(thunk,promiseMiddleware,logger)
);
 const render = Component =>{
     ReactDOM.render(
         <AppContainer>
             <Provider store={store}>
                <BrowserRouter>
                    <Component />
                </BrowserRouter>
             </Provider>
         </AppContainer>,
         document.getElementById('root')
     )
 };
render(App);
 if(module.hot){
     module.hot.accept('./component/App.js',()=>{
         render(App);
     })
 }
registerServiceWorker();
