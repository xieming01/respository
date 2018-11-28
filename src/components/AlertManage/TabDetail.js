import React from 'react';
// import ReactDOM from 'react-dom';
import { Tabs, Button, Divider,Row,Col  } from 'antd';
import Basic from './baisc';
import TimeSelect from './timeSelct';
import Rule from './rule';
import Email from './email';
// import PropTypes from "prop-types";
const TabPane = Tabs.TabPane;
class TabDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            activeKey:"1",
            // operations:''
        }
    }
    //   // 父组件声明自己支持 context
    // static childContextTypes = {
    //     getInstance: PropTypes.func,
    // }
    // // 父组件提供一个函数，用来返回相应的 context 对象
    // getChildContext() {
    //     return {
    //         getInstance: this.getInstance.bind(this)
    //     }
    // }
    callback=(key)=> {
        this.setState({
            activeKey:key
        })
    }
    // getInstance = (instance) =>{
    //     return instance
    // }
    onButtonClick = (key) =>{
        switch (key) {
            case "cancle":
               this.props.onClose();
                break;
            case "firstNext":
                this.childCp.onSubmit({});
                this.setState({
                    activeKey: '2'
                });
                break;
            case "firstLast":
                this.setState({
                    activeKey: '1'
                });
                break;
            case "secondNext":
                
                this.setState({
                    activeKey: '3'
                });
                break;
            case "secondLast":
                this.setState({
                    activeKey: '2'
                });
                break;
            case "thirdNext":
                this.childCpt.onSubmit({});
                this.setState({
                    activeKey: '4'
                });
                break;
            case "thirdLast":
                this.setState({
                    activeKey: '3'
                });
                break;
            case "save":
                this.childCps.onSubmit({});
                this.props.onClose();
                break;
            default:
                break;
        }
    }
    render(){
        var { activeKey,  } = this.state;
        var operations;
        switch (activeKey) {
            case "1":
                operations = <div ><Button onClick={this.onButtonClick.bind(this, "cancle")} >取消</Button>&nbsp;<Button type="primary" onClick={this.onButtonClick.bind(this, "firstNext")} >下一步</Button > </div>
                break;

            case "2":
                 
                    operations= <div><Button onClick={this.onButtonClick.bind(this, "cancle")}>取消</Button>&nbsp;<Button onClick={this.onButtonClick.bind(this, "firstLast")} type="primary">上一步</Button> &nbsp;<Button onClick={this.onButtonClick.bind(this, "secondNext")} type="primary">下一步</Button> </div>
 
                break;
            case "3":
                 
                    operations= <div><Button onClick={this.onButtonClick.bind(this, "cancle")}>取消</Button>&nbsp;<Button type="primary" onClick={this.onButtonClick.bind(this, "secondLast")}>上一步</Button> &nbsp;<Button onClick={this.onButtonClick.bind(this, "thirdNext")} type="primary">下一步</Button> </div>
                 
                break;
            case "4":
               
                operations = <div><Button onClick={this.onButtonClick.bind(this, "cancle")}>取消</Button>&nbsp;<Button type="primary" onClick={this.onButtonClick.bind(this, "thirdLast")}>上一步</Button>&nbsp;<Button onClick={this.onButtonClick.bind(this, "save")} type="primary">保存</Button></div>
                 
                break;
            default:
                break;
        }
       
        return(
            <div>
                <Tabs type="card" activeKey={ activeKey} onChange={this.callback.bind(this)}   className="tabds" style={{"height":"375px"}}>
                    <TabPane tab="基本属性" key="1" >
                        <Basic wrappedComponentRef={(constance) => { this.subTable = constance }} getInstance={(childCp) => { this.childCp = childCp; }}/>
                    </TabPane>
                    <TabPane tab="时间选择" key="2"><TimeSelect /></TabPane>
                    <TabPane tab="告警规则" key="3"><Rule wrappedComponentRef={(constancet) => { this.subTablet = constancet }} getInstance={(childCpt) => { this.childCpt = childCpt; }}/></TabPane>
                    <TabPane tab="邮件通知" key="4"><Email wrappedComponentRef={(constances) => { this.subTables = constances }} getInstance={(childCps) => { this.childCps = childCps; }}/></TabPane>
                </Tabs>
                <Divider style={{"marginTop":"0px"}} />
                <div style={{"float":"right"}}>{operations}</div>
            </div>
        )
    }
}
export default TabDetail