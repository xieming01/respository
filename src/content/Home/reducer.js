import { REQ_STARTED, REQ_SUCCESS, REQ_FAILURE } from './actionType';
 const defaultState= {"loading":false,"result":[],"error":null,page:1};
 const reducer = (state=defaultState,action)=>{
     switch (action.type) {
         case REQ_STARTED:
            return {...state,loading:true,page:action.page}
         case REQ_SUCCESS:
            return {...state,loading:false,result:action.result,page:action.page}
         case REQ_FAILURE:
            return {...state,loading:false,error:action.error,page:action.page}
         default:
             return state;
     }
 }
 export default reducer