import React,{Component} from 'react';
import {   Form, Icon, Input, Button, Checkbox  } from 'antd';

const FormItem = Form.Item;
class Login extends Component{
      constructor(props){
          super(props);
          this.state={
              visible:false
          }
      }
    
     handleSubmit=(e)=>{
         e.preventDefault();
         this.props.form.validateFields((err, values) => {
             if (!err) {
                 console.log('Received values of form: ', values);
                this.props.showModal();    
             }
         });
     }
     render(){
         const { getFieldDecorator } = this.props.form;
        //  // 左侧表单Item的布局设置
        //  const formItemLayout = {
        //      wrapperCol: {
        //          xs: { span: 24,offset:4 },
        //          sm: { span: 16 },
        //          md: { span: 16 },
        //      },
        //  };
        //  // 表单尾部的布局样式：Button
        //  const tailFormItemLayout = {
        //      wrapperCol: {
        //          xs: {
        //              span: 24,
        //              offset: 4,
        //          },
        //          sm: {
        //              span: 8,
        //              offset: 4,
        //          },
        //      },
        //  };
         return(
             <div>
                 
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
                
             </div>
         )
     }
}
export default Form.create()(Login);