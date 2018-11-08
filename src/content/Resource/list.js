import React,{Component} from 'react';
import { List, Avatar, Icon, Skeleton,Spin} from 'antd';
import { connect } from 'react-redux';
import {listPageChange} from '../Home/action';
class ListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1
        }
    }
    componentDidMount = () => {
        // console.log(this.props);
        this.props.listPageChange(1);
    }
    render(){
        const listData = this.props.data.result;
        const data = [
            {
                title: 'Ant Design Title 1',
                loading:false,
                "date":'2018-1-1'
            },
            {
                title: 'Ant Design Title 2',
                loading: false,
                "date": '2018-1-1'
            },
            {
                title: 'Ant Design Title 3',
                loading: false,
                "date": '2018-1-1'
            },
            {
                title: 'Ant Design Titlesdc',
                loading: false,
                "date": '2018-1-1'
            }, {
                title: 'Ant Design Titleg',
                loading: false,
                "date": '2018-1-1'
            }, {
                title: 'Ant Design Title x',
                loading: false,
                "date": '2018-1-1'
            } , {
                title: 'Ant Design Title r',
                loading: false,
                "date": '2018-1-1'
            },
             {
                title: 'Ant Design Title 7',
                loading: false,
                "date": '2018-1-1'
            },
        ]; 
           
        const IconText = ({ type, text  }) => (
            <span className="Text_" >
                <Icon type={type} key={Math.random()} /> 
                &nbsp;
                {text}
            </span>
        );     
        return(
            <div>
                <Spin spinning={this.props.data.loading}>
                <List
                    style={{ "padding": "10px", "backgroundColor": "white","bordered":true}}
                    className="demo-list"
                    loading={false}
                    itemLayout="horizontal"
                    dataSource={data}
                    pagination={{
                        onChange: (page) => {
                            this.props.listPageChange(page);
                        },
                        pageSize: 6,
                        showQuickJumper: true,
                        current: 1,
                    }}
                    renderItem={item=>(
                        <List.Item 
                            actions={[<IconText type="star-o" text="152"  />, <IconText type="like-o" text="151"   />, <IconText type="message" text="2"   />]}
                            key={item.title}
                            // extra={<div style={{"marginLeft":"45px"}}>{item.date}</div>}
                        >
                            <Skeleton avatar  title={false} loading={false}>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description="Ant Design, a design language"
                                />
                                <div style={{ "marginLeft": "45px" }}>{item.date}</div>
                            </Skeleton>
                        </List.Item>
                    )}
                />
                </Spin>
            </div>
        )
    }
}
const mapStateTopProps = (state) => {
    return {
        data: state.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        listPageChange: (page) => {
            dispatch(listPageChange(page));
        }
    }
}
export default connect(mapStateTopProps, mapDispatchToProps)(ListItem);