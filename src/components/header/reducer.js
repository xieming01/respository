import { Login_STARTED, Login_SUCCESS, Login_FAILURE } from './actionType';
const defaultState = { "login_in": false, "detail": "登录中", "error": null };
const reducerLogin = (state = defaultState, action) => {
    switch (action.type) {
        case Login_STARTED:
            return { ...state, "login_in": false, detail: "登录中", error: null,sign:false }
        case Login_SUCCESS:
            return { ...state, "login_in": true, detail: "登录成功", error: null, sign: false ,result:action.result}
        case Login_FAILURE:
            return { ...state, "login_in": false, error: action.error, detail: "登录失败",'sign':true }
        default:
            return state;
    }
}
export default reducerLogin