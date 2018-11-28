import { Login_STARTED, Login_SUCCESS, Login_FAILURE } from './actionType';
import { message} from 'antd'
import axios from 'axios';
import '../../mock';
export const reqPageStarted = () => ({
    type: Login_STARTED,
    login_in: false,
    detail:"登录中"
})
export const reqPageSuccess = (result) => ({
    type:Login_SUCCESS,
    login_in: true,
    detail:'登录成功',
    result:result
})
export const reqPageFailure = ( error) => ({
    type: Login_FAILURE,
    login_in: false,
    error: error.message,
    detail: '登录失败',
})

export const login = (login_message) =>{
    return (dispatch) => {
        const apiurl = `/login`;
        dispatch(reqPageStarted( ));
        axios.post(apiurl, {
            'dataType': 'json',
            "data": login_message,
        }).then(function (ret) {
            if (ret.status !== 200) {
                throw new Error('获取请求失败！');
            }
            dispatch(reqPageSuccess(ret.data.data));
            message.success("登陆成功")
            // dispatch(reqPageStarted());
        }).catch((err) => {
            dispatch(reqPageFailure(err));
            message.error('登录失败！');
            // dispatch(reqPageStarted());
        })
    };
}
export const initDefaultState = () =>{
    return (dispatch) =>{
        dispatch(reqPageStarted());
    }
}