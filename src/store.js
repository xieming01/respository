// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import  reducer from '../src/content/Home/reducer';
 

// const win = window;
// //合并reducer
// const reducers = combineReducers({
//     topiclist: reducer,
 
// });
// //使用中间件
// const middlewares = [thunkMiddleware];

// const storeEnhancers = compose(
//     applyMiddleware(...middlewares),
//     (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
// );
// //导出createStore
// export default createStore(reducers, {}, storeEnhancers);
import { createStore, combineReducers, applyMiddleware } from 'redux';

import reducer from '../src/content/Home/reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
// import detailReducer from './component/detail/reducer';

// const win = window;
//合并reducer
const reducers = combineReducers({
      "page":reducer,
    // detail: detailReducer
});
const store = createStore(
    reducers,
    applyMiddleware(thunk, promiseMiddleware, logger)
);

//导出createStore
export default store;