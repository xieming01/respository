import React,{Component} from 'react';
import { Row, Col, TimePicker,Button} from 'antd';
import moment from 'moment'; 
// import "./timeselect.css";
class TimeSelect extends Component{
    constructor(props){
        super(props);
        this.state={
            dateSelected:"",
            backGround:{}
        }
    }
   
    onPanelChange = (value )=>{
        console.log(value );
    }
    onOk = (value) =>{
        console.log(value );
    }
    onClick=(key)=>{
        switch (key) {
            case "all1":
                this.setState({
                    backGround: JSON.stringify(this.state.backGround) === '{}' ? { "backgroundColor": "chartreuse"} : {}
                });
                break;
            case "all2":
                this.setState({
                    backGround: JSON.stringify(this.state.backGround) === '{}' ? { "backgroundColor": "chartreuse" } : {}
                });
                break;
            default:
                break;
        }
    }    
    render(){
        return(
            <div  >
               <Row span={8} offect={12}>
                    <Col>
                        日内时间段: <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />&nbsp;&nbsp; <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                    </Col>
               </Row>
               <Row style={{"marginTop":"12px"}} className="row">
                    <Col className='col'>日期:&nbsp;  <Button className='button' style={this.state.backGround} onClick={this.onClick.bind(this,'all1')}>全选</Button>&nbsp;&nbsp;&nbsp;&nbsp;<Button>1</Button>&nbsp;&nbsp;&nbsp;&nbsp;<Button>2</Button>&nbsp;&nbsp;&nbsp;&nbsp;<Button>3</Button>&nbsp;&nbsp;&nbsp;&nbsp;<Button>6</Button>&nbsp;&nbsp;&nbsp;&nbsp;<Button>6</Button></Col>
                    <br/> 
                    <Col className='col'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; <Button className='button' style={this.state.backGround} onClick={this.onClick.bind(this, 'all2')}>全选</Button>&nbsp;&nbsp;&nbsp;&nbsp;<Button>1</Button>&nbsp;&nbsp;&nbsp;&nbsp;<Button>2</Button>&nbsp;&nbsp;&nbsp;&nbsp;<Button>3</Button>&nbsp;&nbsp;&nbsp;&nbsp;<Button>6</Button>&nbsp;&nbsp;&nbsp;&nbsp;<Button>6</Button></Col>

               </Row>
            </div>
        )
    }
}
export default TimeSelect 