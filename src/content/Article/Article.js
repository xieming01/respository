import React, { Component } from 'react';
import { Carousel} from 'antd';
// import './style.css';
export default class Article extends Component {
    render() {
        return (
            <div className="article" >  
                <Carousel   className="Carousel_item"  >
                    <img alt="example" src="http://img.zcool.cn/community/0125fd5770dfa50000018c1b486f15.jpg@1280w_1l_2o_100sh.jpg"  />
                     <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /> 
                     <img alt="example" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> 
                    <img alt="example" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" /> 
                </Carousel>
            </div>
        )
    }
}