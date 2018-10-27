import { REQ_STARTED, REQ_SUCCESS, REQ_FAILURE } from './actionType';
import axios from 'axios';
import '../../mock';
export const reqPageStarted =(page)=>({
    type:REQ_STARTED,
    loading:true,
    page:page
})
export const reqPageSuccess = (page,result) => ({
    type: REQ_SUCCESS,
    loading: false,
    page: page,
    result:result
})
export const reqPageFailure = (page, error) => ({
    type: REQ_FAILURE,
    loading: false,
    page: page,
    error: error.message
})
export const pageChange = (page)=>{
    let pageSize = 3;
    let pages = page ? page :1 ;
    return(dispatch)=>{
        const apiurl =`/data`;
        dispatch(reqPageStarted(page));
        axios.get(apiurl,{
          'dataType':'json'
        }).then(function (ret) {
            if(ret.status !== 200){
                throw new Error('获取请求失败！');
            }
            dispatch(reqPageSuccess(page,ret.data.data));
        }).catch((err)=>{
            dispatch(reqPageFailure(page,err));
        })
    };
}