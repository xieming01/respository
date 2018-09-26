import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Button } from "antd";
import { connect } from 'react-redux';
import increaseAction from '../action';
class Counter extends Component{
    render(){
        const {value,onIncreaseClick} = this.props;
        return(
            <div>
                <Button type="primary" onClick={onIncreaseClick}>name </Button>
                <span>{value}</span>
            </div>
        );
    }
}
Counter.PropTypes = {
    value:PropTypes.number.isRequired,
    onIncreaseClick:PropTypes.func.isRequired,
}
// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);