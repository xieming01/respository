import React,{Component} from 'react';
import { Row, Col, TimePicker,Button,message} from 'antd';
import moment from 'moment';
// import $ from 'jquery';
// import "./timeselect.css";
class TimeSelect extends Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        const { getInstance } = this.props;
        if (typeof getInstance === 'function') {
            getInstance(this); // 在这里把this暴露给`parentComponent`
        }
        this.state={
            dateSelected:"",
            backGround: { "width": "74px" },
            timeStart:'00:00:00',
            timeEnd: '00:00:00',
            backGround1: { "width": "74px" },
            backGround2: { "width": "74px" },
            backGround3: { "width": "74px" },
            backGround4: { "width": "74px" },
            backGround5: { "width": "74px" },
            backGround6: { "width": "74px" },
            backGround7: { "width": "74px" },
            key:'',
        }
    }
   
    onPanelChange = (value )=>{
        console.log(value );
    }
    onOk = (value) =>{
        console.log(value );
    }
    onClick=( key)=>{
        switch (key) {
            case "all":
                this.setState({
                    backGround: Object.keys(this.state.backGround).length === 1 ? { "backgroundColor": "chartreuse", "width": "74px" } : { "width": "74px" },
                    backGround1: Object.keys(this.state.backGround).length === 1 ? { "backgroundColor": "chartreuse", "width": "74px" } : { "width": "74px" },
                    backGround2: Object.keys(this.state.backGround).length === 1 ? { "backgroundColor": "chartreuse", "width": "74px" } : { "width": "74px" },
                    backGround3: Object.keys(this.state.backGround).length === 1 ? { "backgroundColor": "chartreuse", "width": "74px" } : { "width": "74px" },
                    backGround4: Object.keys(this.state.backGround).length === 1 ? { "backgroundColor": "chartreuse", "width": "74px" } : { "width": "74px" },
                    backGround5: Object.keys(this.state.backGround).length === 1 ? { "backgroundColor": "chartreuse", "width": "74px" } : { "width": "74px" },
                    backGround6: Object.keys(this.state.backGround).length === 1 ? { "backgroundColor": "chartreuse", "width": "74px" } : { "width": "74px" },
                    backGround7: Object.keys(this.state.backGround).length === 1 ? { "backgroundColor": "chartreuse", "width": "74px" } : { "width": "74px" },
                    key:"all"
                });
                break;
            case "1":
                this.setState({
                    backGround1: Object.keys(this.state.backGround1).length === 1 ? { "backgroundColor": "chartreuse", "width": "74px" } : { "width": "74px" },
                    backGround: Object.keys(this.state.backGround1).length === 2 ? { "width": "74px" } : { "width": "74px" },
                    key: "1"
                });
                break;
            case "2":
                this.setState({
                    backGround2: Object.keys(this.state.backGround2).length === 1  ? { "backgroundColor": "chartreuse", "width": "74px" } : { "width": "74px" },
                    backGround: Object.keys(this.state.backGround2).length === 2 ? { "width": "74px" } : { "width": "74px" },
                    key: "2"
                });
                break;
            case "3":
                this.setState({
                    backGround3: Object.keys(this.state.backGround3).length === 1 ? { "backgroundColor": "chartreuse", "width": "74px" } : { "width": "74px" },
                    backGround: Object.keys(this.state.backGround3).length === 2 ? { "width": "74px" } : { "width": "74px" },
                    key: "3"
                });
                break;
            case "4":
                this.setState({
                    backGround4: Object.keys(this.state.backGround4).length === 1 ? { "backgroundColor": "chartreuse", "width": "74px" } : { "width": "74px" },
                    backGround: Object.keys(this.state.backGround4).length === 2 ? { "width": "74px" } : { "width": "74px" },
                    key: "4"
                });
                break;
            case "5":
                this.setState({
                    backGround5: Object.keys(this.state.backGround5).length === 1 ? { "backgroundColor": "chartreuse", "width": "74px" } : { "width": "74px" },
                    backGround: Object.keys(this.state.backGround5).length === 2 ? { "width": "74px" } : { "width": "74px" },
                    key: "5"
                });
                break;
            case "6":
                this.setState({
                    backGround6: Object.keys(this.state.backGround6).length === 1 ? { "backgroundColor": "chartreuse", "width": "74px" } : { "width": "74px" },
                    backGround: Object.keys(this.state.backGround6).length === 2 ? { "width": "74px" } : { "width": "74px" },
                    key: "6"
                });
                break;
            case "7":
                this.setState({
                    backGround7: Object.keys(this.state.backGround7).length === 1 ? { "backgroundColor": "chartreuse", "width": "74px" } : { "width": "74px" },
                    backGround: Object.keys(this.state.backGround7).length === 2 ? { "width": "74px" } : { "width": "74px" },
                    key: "7"
                });
                break;
            default:
                break;
        }
    }  
    onSubmit = () => {
        let {  timeStart, timeEnd, backGround1, backGround2, backGround3, backGround4, backGround5, backGround6, backGround7, backGround} = this.state;
        let keyArr = [];
        if (Object.keys(backGround).length===2){
            keyArr.push('all');
        };
        if ((Object.keys(backGround).length === 1) && (Object.keys(backGround1).length === 2)){
            keyArr.push('1');
        };
        if ((Object.keys(backGround).length === 1) && (Object.keys(backGround2).length === 2)) {
            keyArr.push('2');
        };
        if ((Object.keys(backGround).length === 1) && (Object.keys(backGround3).length === 2)) {
            keyArr.push('3');
        };
        if ((Object.keys(backGround).length === 1) && (Object.keys(backGround4).length === 2)) {
            keyArr.push('4');
        };
        if ((Object.keys(backGround).length === 1) && (Object.keys(backGround5).length === 2)) {
            keyArr.push('5');
        };
        if ((Object.keys(backGround).length === 1) && (Object.keys(backGround6).length === 2)) {
            keyArr.push('6');
        };
        if ((Object.keys(backGround).length === 1) && (Object.keys(backGround7).length === 2)) {
            keyArr.push('7');
        };
        if (timeStart !== "00:00:00" && timeEnd !== "00:00:00"){
           if (Date.parse(timeStart) < Date.parse(timeEnd)) {
            //    let start_time = timeStart.getHours() + ':' + timeStart.getMinutes() + ':' + timeStart.getSeconds(); 
            //    let end_time = timeEnd.getHours() + ':' + timeEnd.getMinutes() + ':' + timeEnd.getSeconds(); 
               return { "key": keyArr, "startTiem": timeStart.format("HH:mm:ss"), "endTime": timeEnd.format("HH:mm:ss")};
        } else {
            message.error("开始时间必须小于结束时间");
            return false
        }
    } else if (timeStart === "00:00:00" && timeEnd !== "00:00:00"){
            return { "key": keyArr, "startTiem": timeStart, "endTime": timeEnd.format("HH:mm:ss") };
        } else if ( timeEnd === "00:00:00"){
            return false
        };
        
    }  
    tiemChange=(key,value) =>{
        switch (key) {
            case "start":
                this.setState({
                    timeStart:value ?  value : "00:00:00",    
                });
                break;
            case "end":
                this.setState({
                    timeEnd: value ? value : "00:00:00",
                });
                break;
            default:
                break;
        }
    }
    render(){
         
        var timeStart = this.state.timeStart !== '00:00:00' ? this.state.timeStart.format('HH:mm:ss') : '00:00:00';
        var timeEnd = this.state.timeEnd !== '00:00:00' ? this.state.timeEnd.format('HH:mm:ss') : '00:00:00';
        return(
            <div  >
               <Row span={8} offect={12}>
                    <Col>
                        日内时间段: <TimePicker value={moment( timeStart, 'HH:mm:ss')} onChange={this.tiemChange.bind(this, "start")} />&nbsp;&nbsp; <TimePicker value={moment( timeEnd, 'HH:mm:ss')} onChange={this.tiemChange.bind(this, "end")} />
                    </Col>
               </Row>
               <Row style={{"marginTop":"12px"}} className="row">
                    <Col className='col'>日期:&nbsp;  <Button style={this.state.backGround} onClick={this.onClick.bind(this, 'all')} >全  选</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;<Button style={this.state.backGround1} className='button' onClick={this.onClick.bind(this, '1')}>星期一</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button className='button' style={this.state.backGround2} onClick={this.onClick.bind(this, '2')}>星期二</Button>&nbsp;&nbsp;&nbsp;&nbsp;<Button className='button' style={this.state.backGround3} onClick={this.onClick.bind(this, '3')}>星期三</Button></Col>
                        <br/>
                    <Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button className='button' onClick={this.onClick.bind(this, '4')} style={this.state.backGround4}>星期四</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button className='button' onClick={this.onClick.bind(this, '5')} style={this.state.backGround5}>星期五</Button>&nbsp;&nbsp;&nbsp;&nbsp;<Button className='button' onClick={this.onClick.bind(this, '6')} style={this.state.backGround6}>星期六</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button className='button' style={this.state.backGround7} onClick={this.onClick.bind(this, '7')}>星期天</Button></Col>
               </Row>
            </div>
        )
    }
}
export default TimeSelect 