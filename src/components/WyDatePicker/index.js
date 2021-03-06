import React, { Component } from 'react'
import { DatePicker } from 'antd';
import moment from 'moment';
import propTypes from 'prop-types'
import _ from 'lodash'
const RangePicker = DatePicker.RangePicker;
// const now1 = moment()
// const now2 = moment()
// const Now = now1.add(0, 'h')
// const oneHourBefore = now2.subtract(1, 'h')
class WyDatePicker extends Component {
    state = {
        curTime: [],
        isSubmit: false
    }

    componentDidMount() {
        const { curTime } = this.props
        this.setState({
            curTime,
            isSubmit: false
        })
    }

    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(_.cloneDeep(this.props.curTime)) !== JSON.stringify(_.cloneDeep(nextProps.curTime))) {
            const { curTime } = nextProps
            this.setState({
                curTime,
                isSubmit: false
            })
        }
    }


    rangeTimeChange = (dates, dateStrings) => {
        this.setState({
            curTime: [...dateStrings],
            isSubmit: false
        })
    }

    //时间下拉隐藏回调函数，检测
    // getSlideStatus = (status)=>{
    //   if(status === false && this.props.rangeTimeChange){
    //     console.log('消失')
    //     console.log(this.state.curTime)
    //     this.props.rangeTimeChange(this.state.curTime)
    //   }
    // }
    componentWillUpdate(nextProps, nextState) {
        if (this.props.rangeTimeChange && nextState.isSubmit === true) {
            this.props.rangeTimeChange(nextState.curTime)
            this.setState({
                isSubmit: false
            })
        }
    }
    timeOk = () => {
        this.setState({
            isSubmit: true
        })
    }
    //不可选时间
    disabledDate = (current) => {
        return current && current > moment().endOf('day')
    }

    //defaultValue={[moment(oneHourBefore,'YYYY-MM-DD HH:mm'),moment(Now,'YYYY-MM-DD HH:mm')]}
    render() {
        return (
            <RangePicker
                size={this.props.size ? this.props.size : 'small'}
                style={this.props.style ? this.props.style : { width: "100%", minWidth: "300px" }}
                allowClear={false}
                ranges={{
                    '最近五分钟': [moment().subtract(5, 'm'), moment()],
                    '最近一小时': [moment().subtract(1, 'h'), moment()],
                    '最近三小时': [moment().subtract(3, 'h'), moment()],
                    '最近六小时': [moment().subtract(6, 'h'), moment()]
                }}
                disabledDate={this.disabledDate}
                showTime
                format="YYYY-MM-DD HH:mm"
                value={this.state.curTime && this.state.curTime.length > 0 ? [moment(this.state.curTime[0], 'YYYY-MM-DD HH:mm'), moment(this.state.curTime[1], 'YYYY-MM-DD HH:mm')] : []}
                onChange={this.rangeTimeChange}
                onOk={this.timeOk}
            />

        )
    }
}

WyDatePicker.propTypes = {
    curTime: propTypes.array,
    rangeTimeChange: propTypes.func
}

export default WyDatePicker
