import React,{Component} from 'react';
import {   Form, Icon, Input, Button, Checkbox , Spin,message } from 'antd';
import { login, initDefaultState } from './action';
import { connect } from 'react-redux';
const FormItem = Form.Item;
class Login extends Component{
      constructor(props){
          super(props);
          this.state={
              loadding:false,
              sign:true,
            //   defaultFailure:true
          }
      }
    handleChange=(values)=>{
         this.props.handleChange(values);
         
    }
     handleSubmit=(e)=>{
         e.preventDefault();
         this.props.form.validateFields((err, values) => {
             if (!err) {
                 this.setState({
                     loadding:true,
                      
                 });
                this.handleChange(values);
             }
         });
     }
    componentWillReceiveProps =(nextProps)=>{
         
             if (nextProps.data.login_in !== this.props.data.login_in) {
            // setTimeout(() => {
            if (nextProps.data.login_in){
                this.props.showModal(nextProps.data.result);
            }
        };
        if(nextProps.data.sign){
            this.setState({
                sign:false,
                loadding:false,
                // defaultFailure: !nextProps.data.sign ? false : true
            });
            // this.props.initDefaultState();
        }
    }
     
     render(){
         const { getFieldDecorator } = this.props.form;
         let title = this.props.data.sign  ?  this.props.data.detail : this.props.data.detail;
         let loaded = !this.props.data.login_in ? this.state.loadding : !this.props.data.login_in;
         loaded = this.state.sign ? (this.state.sign ? loaded : false): false;
         return(
             <div>
                 <Spin tip={title} spinning={loaded}>
                 <Form onSubmit={this.handleSubmit.bind(this)} className="login">
                     <FormItem  className="user_name" style={{"marginTop":'5%','marginLeft':'15%','width':'70%'}}>
                         {getFieldDecorator('usrName', {
                             rules: [{ required: true, message: 'please input your name' }]
                         })(
                             <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                         )}
                     </FormItem>
                     <FormItem  style={{ "marginTop": '5%', 'marginLeft': '15%', 'width': '70%' ,'marginBottom':'1%' }} >
                         {getFieldDecorator('password', {
                             rules: [{ required: true, message: 'please input your password' }]
                         })(
                             <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="password" />
                         )}
                     </FormItem>
                     <FormItem className="user_submit" style={{  'marginLeft': '15%', 'width': '70%' }}>
                         {getFieldDecorator('remember', {
                             valuePropName: 'checked',
                             initialValue: true,
                         })(
                             <div><Checkbox className='check_box'>记住密码</Checkbox> <a className="login-form-forgot" href="" style={{"float":'right','marginRight':'5%'}}>忘记密码</a></div>
                             
                         )}
                        
                         <Button type="primary" htmlType="submit" style={{'width':'40%','marginLeft':'30%'}}>Login</Button>
                     </FormItem>
                 </Form>
                </Spin>
             </div>
         )
     }
}
// export default ;
const mapStateTopProps = (state) => {
    return {
        data: state.login
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (values) => {
            dispatch(login(values));
        },
        initDefaultState:()=>{
            dispatch(initDefaultState());
        }
    }
}
export default connect(mapStateTopProps, mapDispatchToProps)(Form.create()(Login));