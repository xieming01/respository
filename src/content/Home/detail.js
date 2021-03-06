import React,{ Component } from "react";
import { message,Card, Icon, BackTop, Avatar, Row, Col, Spin, Tag, Input, Button, List  } from 'antd';
import { connect } from 'react-redux';
import moment from 'moment';
import { Scrollbars } from 'react-custom-scrollbars'
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/eclipse.css';
import { reqInfo} from './action';
import marked from 'marked';
import hljs from 'highlight.js';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import './detail-style.css';
import './detail.css';
import axios from 'axios';
import '../../mock';
// const { Meta } = Card;
// require('codemirror/mode/markdown/markdown');
// require('node_modules/codemirror/mode/markdown/markdown'); 
const { TextArea } = Input;
class HomeDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            comment:"",
            data_comment:[],
            support_1:12,
            sign_1:false,
            sign_2: false,
            support_2:156,
            background_color:"white",
            login:true
        }
    }
    componentWillMount() {
        marked.setOptions({
            highlight: code =>{ return hljs.highlightAuto(code).value}
        })
    }
    componentDidMount() {
        this.props.getInfo("42");
    }
    commentDetail = (e) => {
        this.setState({
            comment:e.target.value
        })
    }
    submit = () => {
        const data_post = { "comment": this.state.comment, "user": "admin" };
        axios({
            url: "/comment",
            data: data_post,
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }).then((result) => {
            if (result.status !== 200) {
                message.error("error");
            } else {
                this.setState({
                    data_comment: result.data.data.data
                });
            }
        }).catch(error => {
            message.error(error);
        });
    }
    signClick_1=(type)=>{
        if (!this.state.sign_1 && type === 'star-o') {
                this.setState({
                    "support_1": this.state.support_1 + 1,
                    sign_1: true,
                   
                });
            } else {
                this.setState({
                    "support_1": this.state.support_1 - 1,
                    sign_1: false
                });
            }
        }
    signClick_2 = (type) => {
        if (!this.state.sign_2 && type === 'like-o') {
            this.setState({
                "support_2": this.state.support_2 + 1,
                sign_2: true,

            });
        } else {
            this.setState({
                "support_2": this.state.support_2 - 1,
                sign_2: false
            });
        }
    }
    render(){
        // const content = <div class="markdown-text"><h1>ng-notadd</h1>↵<p>基于 Angular7  Material2  的中后台解决方案</p>↵<h3>技术栈</h3>↵<ul>↵<li>Typescript</li>↵<li>Angular</li>↵<li>Material2</li>↵<li>rxjs</li>↵<li>Graphql</li>↵</ul>↵<p><img src="//static.cnodejs.org/Fj7NvHYZ0_FOC3BdBi5pjSXwahJq" alt="lALPDgQ9qULoptnNBTnNCxg_2840_1337.png" /></p>↵<h4>相关链接</h4>↵<p><a href="https://github.com/notadd/ng-notadd">项目地址</a></p>↵<p><a href="https://notadd.github.io/ng-notadd">DEMO</a></p>↵<p><a href="https://github.com/notadd/ng-notadd-mock-server">ng-notadd-mock-server</a></p>↵<h2>Quick start</h2>↵<pre class="prettyprint language-bash"><code>    git clone https:&#x2F;&#x2F;github.com&#x2F;notadd&#x2F;ng-notadd.git↵    ↵    cd ng-notadd↵    ↵    npm install↵    npm start↵    # or use ng cli↵    ng serve↵</code></pre><h2>Roadmap</h2>↵<p><strong>0.9</strong></p>↵<ul>↵<li>[ ] i18n 多语言支持</li>↵</ul>↵<p><strong>1.0</strong></p>↵<ul>↵<li>[ ] 支持 Apollo-Graqphql</li>↵<li>[ ] 更加完整的 仪表盘页面</li>↵</ul>↵<p><strong>1.1</strong></p>↵<ul>↵<li>[ ] json 生成表单</li>↵</ul>↵<p><strong>1.2</strong></p>↵<ul>↵<li>[ ] 手机端兼容</li>↵<li>[ ] 渐进式应用(PWA)</li>↵</ul>↵<p><strong>1.3</strong></p>↵<ul>↵<li>[ ] 更多组件支持</li>↵</ul>↵<p><strong>1.4</strong></p>↵<ul>↵<li>[ ] 基础页面（个人信息页，登录页…）</li>↵<li>[ ] recaptcha 支持 （默认关闭）</li>↵</ul>↵<p><strong>1.5</strong></p>↵<ul>↵<li>[ ] excel 导入与导出</li>↵<li>[ ] 选定行列导出 excel</li>↵</ul>↵<p><strong>1.6</strong></p>↵<ul>↵<li>[ ] 截图生成</li>↵<li>[ ] firebase（国内无法使用） or 其他替代方案 支持</li>↵</ul>↵<p><strong>1.7</strong></p>↵<ul>↵<li>[ ] 可 DIY 仪表盘</li>↵<li>[ ] json 生成简单仪表盘</li>↵</ul>↵<p><strong>1.8</strong></p>↵<ul>↵<li>[ ] 支持 electron 构建桌面应用</li>↵</ul>↵<p><strong>2.0</strong></p>↵<ul>↵<li>[ ] 企业级自定义表单</li>↵<li>[ ] 企业级表单系统</li>↵</ul>↵<p><strong>后续</strong></p>↵<ul>↵<li>[ ] excel 在线编辑</li>↵<li>[ ] word 在线编辑</li></ul></div>;
    // var style_color = { "backgroundColor": this.state.background_color };
        const IconText = ({ type, text }) => {
            if (type === "star-o"){
                if(this.state.sign_1){
                    return (
                        <span
                        >
                            <Icon type={type} style={{ marginRight: 8 }} onClick={this.signClick_1.bind(this, type)} key={type} theme="filled"/>
                            {text}
                        </span>
                    )
                }else{
                    return (
                        <span
                        >
                            <Icon type={type} style={{ marginRight: 8}} onClick={this.signClick_1.bind(this, type)} key={type} />
                            {text}
                        </span>
                    )
                }
            }else if (type === "like-o"){
                if (this.state.sign_2) {
                    return (
                        <span
                        >
                            <Icon type={type} style={{ marginRight: 8 }} onClick={this.signClick_2.bind(this, type)} key={type} theme="filled"/>
                            {text}
                        </span>
                    )
                } else {
                    return (
                        <span
                        >
                            <Icon type={type} style={{ marginRight: 8 }} onClick={this.signClick_2.bind(this, type)} key={type} />
                            {text}
                        </span>
                    )
                }
            }else{
                return (
                    <span
                    >
                        <Icon type={type} style={{ marginRight: 8 }} />
                        {text}
                    </span>
                )
            }
    }
        // let content = !this.props.data.loading ? ( : 
        if (!this.props.data.loading && !(this.props.data.sources instanceof Array)){
            var content =   this.props.data.sources.contents.data.content ;  

            // var content = '```js\n console.log("hello"); \n```';
        }
        const data = this.state.data_comment.length ? this.state.data_comment : [{"title": "application/x-www-form-urlencoded; charset=UTF-8"}];
        return(
            <div className="detail-style" style={{"width":"70%","marginLeft":"15%","padding":"20px",'backgroundColor':"white","marginTop":"20px","marginBottom":"10px"}}>
              
                <Spin spinning={this.props.data.loading}>
                    <Row>
                        <BackTop   />
                        <Col><Tag color="volcano">置顶</Tag><font size="3" >服务器迁移至 aws 日本机房</font></Col>
                        <br/>
                        <Col><Avatar src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>叶天 
                         &nbsp; &nbsp;发表于：{moment().subtract(10, 'days').calendar()}  &nbsp; &nbsp;来自于：<Tag color="#108ee9">分享</Tag>
                        </Col>
                        {/* <br /> */}
                        <Col style={{"marginTop":"8px","marginBottom":"10px"}}>
                            &nbsp; &nbsp;<IconText type="star-o" text={this.state.support_1} /> &nbsp; <IconText type="like-o" text={this.state.support_2} /> &nbsp;<IconText type="message" text="2" />
                        </Col>
                    </Row>
                    {/* <Divider/> */}
                    <Card bodyStyle={{ width: "100%","padding":"0px"}}
                        bordered={false}   
                        className="markdown-box" 
                    >
                        {/* <p dangerouslySetInnerHTML={{ __html: !this.props.data.loading ?  marked(content) : null }}></p> */}
                        <CodeMirror

                            options={{
                                value: content,
                                mode: "markdown", 
                                lineNumbers: true,
                                theme: 'eclipse',
                                // className: "CodeMirror",
                            }}
                            className="CodeMirror-style"
                            // style={{"height":"100%"}}
                        // onChange={(editor, metadata, value) =>
                        //     this.changeContent(editor, metadata, value)
                        // }
                        />
                    </Card>
                    <div>
                        <div><h3>评论</h3></div>
                        {
                            this.state.login ?
                        (<div>
                            <TextArea style={{ "height": "90px" }} onChange={this.commentDetail.bind(this)} value={this.state.comment} />
                            <Button style={{ "float": "right", "marginTop": "12px" }} onClick={this.submit.bind(this)}>发布</Button>
                        </div>)
                        :
                        (
                            <div style={{"textAlign":"center"}}>
                                <span>您还未登录,请先登录再评论!!!</span>
                            </div>
                        )
                        }
                    </div>
                    <List
                        style={{   "marginTop": "70px" }}
                        itemLayout="horizontal"
                        dataSource={data}
                        bordered={true}
                        pagination={{
                            pageSize:3,
                            defaultCurrent:1,
                            showQuickJumper:true
                        }}
                        renderItem={item => (
                            <List.Item actions={[<Tag>{moment().format('l')}</Tag>]}>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    
                                />
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
        data: state.detail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInfo: (id) => {
            dispatch(reqInfo(id));
        }
    }
}

export default connect(mapStateTopProps, mapDispatchToProps)(HomeDetail);