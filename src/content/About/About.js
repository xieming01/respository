import React,{Component} from 'react';
import { Calendar, Alert } from 'antd';
import moment from 'moment';
export default class About extends Component{
    constructor(props){
        super(props);
        this.state={
            value: moment('2017-01-25'),
            selectedValue: moment('2017-01-25'),
        }
    }
    onSelect=(value)=>{
        this.setState({
            value:value,
            selectedValue: value,
        });
    }
    onPanelChange = (value) => {
        this.setState({ value });
    }

    render(){
        const { value, selectedValue } = this.state;
        return(
            <div className="about" style={{ "width": "68%", 'marginLeft': '16%', 'marginTop': "10px", "backgroundColor": "white"  }}>
                <Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} style={{"backgroundColor":"white"}} />
                <Calendar value={value} onSelect={this.onSelect.bind(this)} onPanelChange={this.onPanelChange.bind(this)} fullscreen={false}/>
            </div>
        )
    }
}