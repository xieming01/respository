import React,{Component} from 'react';
import { List, Avatar, Icon, Skeleton} from 'antd';

class ListItem extends Component{
    render(){
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
                title: 'Ant Design Title 4',
                loading: false,
                "date": '2018-1-1'
            }, {
                title: 'Ant Design Title 4',
                loading: false,
                "date": '2018-1-1'
            }, {
                title: 'Ant Design Title 4',
                loading: false,
                "date": '2018-1-1'
            } , {
                title: 'Ant Design Title 4',
                loading: false,
                "date": '2018-1-1'
            },
             {
                title: 'Ant Design Title 4',
                loading: false,
                "date": '2018-1-1'
            },
        ];         
        return(
            <div>
                <List
                    style={{ "padding": "10px", "backgroundColor": "white","bordered":true}}
                    className="demo-list"
                    loading={false}
                    itemLayout="horizontal"
                    dataSource={data}
                    pagination={{
                        onChange: (page) => {
                            // this.props.pageChange(page);
                        },
                        pageSize: 8,
                        showQuickJumper: true,
                        current: '1',
                    }}
                    renderItem={item=>(
                        <List.Item action={[<a>edit</a>, <a>more</a>]}>
                            <Skeleton avatar  title={false} loading={item.loading}>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description="Ant Design, a design language"
                                />
                                <div>{item.date}</div>
                            </Skeleton>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
export default ListItem