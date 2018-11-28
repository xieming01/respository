import React, { Component } from 'react'
import Line from '../../components/line'
import { wyAxiosPost } from '../../components/WyAxios'
import WySpin from '../../components/WySpin'
import {withRouter} from 'react-router-dom'
import { Divider } from "antd"
class LineView extends Component {
    constructor(props){
        super(props);
      this.state = {
        xData: [],
        yData: [],
        aUnit: '',
        isSpining: false,
        subTime: []
    }  
    }
    
    componentWillReceiveProps(nextProps) {
        if (!(
            JSON.stringify(this.props.subTime) === JSON.stringify(nextProps.subTime) &&
            this.props.field === nextProps.field
        )) {
            let info = Object.assign({}, nextProps.param, { dataType: 'host' }, { field: nextProps.field }, { start_time: nextProps.subTime[0] }, { last_time: nextProps.subTime[1] })
            this.setState({
                isSpining: true
            })
            wyAxiosPost('TwoView/getTwoLine', { info: info }, (result) => {
                const responseData = result.data.msg
                const subTime = []
                subTime.push(info.start_time)
                subTime.push(info.last_time)
                this.setState({
                    xData: responseData.xxx,
                    yData: responseData.yyy,
                    aUnit: responseData.unit,
                    isSpining: false,
                    subTime
                })
            })
        }
    }
    chartClick = (param) => {
        const flowPicTime = []
        flowPicTime.push(param.name)
        flowPicTime.push(param.name)
        this.props.resetTableData(flowPicTime)
    }
    brushSelect = (params) => {
        if (params.batch[0].areas.length > 0) {
            let flowPicTime = []
            const xxxRange = params.batch[0].areas[0].coordRange
            if (Math.abs(xxxRange[0]) === Math.abs(xxxRange[1])) {
                flowPicTime.push(this.state.xData[Math.abs(xxxRange[1])])
                flowPicTime.push(this.state.xData[Math.abs(xxxRange[1])])
            } else {
                flowPicTime.push(this.state.xData[Math.abs(xxxRange[0])])
                flowPicTime.push(this.state.xData[Math.abs(xxxRange[1])])
            }
            if (flowPicTime[1] === undefined) {
                flowPicTime[1] = this.state.xData[parseInt(this.state.xData.length - 1, 0)]
            }
            this.props.resetTableData(flowPicTime)
        }
    }
    render() {
        return (
            <div className="amodule">
                <div className="moduleHeader" >
                    <h4>线性表</h4>
                    <Divider/>
                </div>
                <div className="moduleBody">
                    <WySpin isSpining={this.state.isSpining}>
                        <Line
                            xData={this.state.xData ? this.state.xData : []}
                            yData={this.state.yData ? this.state.yData : []}
                            aUnit={this.state.aUnit}
                            onChartClick={this.chartClick}
                            brush={true}
                            onBrushSelected={this.brushSelect}
                        />
                    </WySpin>
                </div>
            </div>
        )
    }
}

export default withRouter(LineView)
