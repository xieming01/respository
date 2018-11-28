// ellipse 椭圆,square 方形 ,rhomb 菱形, parallelogram 平行四边形
import React from 'react';
const squareSize = { "small": { "radiusX": 10, "radiusY": 5 }, "normal": { "radiusX": 15, "radiusY": 10}} ; //方形半径
const ellipseSize = {"radius":15}; //椭圆半径
const rhombSize = { "small": { "radiusX": 10, "radiusY": 5 }, "normal": { "radiusX": 15, "radiusY": 10 } }; //菱形半径
const parallelogramSize = { "small": { "radiusX": 10, "radiusY": 5 }, "normal": { "radiusX": 15, "radiusY": 10 } }; //平行四边形半径
const MARGIN = {"x":400,"y":50};//初始中心坐标
var pointArr = [];//所有图形中心坐标集合
var masterstroke = 40;//主线长
class CircleTest extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],//原始数据
            allPointArr:[]//所有图形中心坐标
        }
    }
    componentDidMount=()=>{
        let testData = '[{"id":1,"startFlag":1,"endFlag":0,"state":1,"name":"node1","parentID":"","childrenID":2,"branchs":[],"shape":"ellipse","point":{"x":0,"y":0}},' +
            '{"id":2,"startFlag":0,"endFlag":0,"state":2,"name":"node2","parentID":"1","childrenID":3,"branchs":[],"branchFlag":0,"point":{"x":0,"y":0},"shape":"square"},' +
            '{"id":3,"startFlag":0,"endFlag":0,"state":1,"name":"node3","parentID":"2","childrenID":4,"branchs":[],"branchFlag":0,"point":{"x":0,"y":0},"shape":"rhomb"},' +
            '{"id":4,"startFlag":0,"endFlag":0,"state":3,"name":"node4","parentID":"3","childrenID":5,"branchs":[],"branchFlag":0,"point":{"x":0,"y":0},"shape":"square"},' +
            '{"id":5,"startFlag":0,"endFlag":0,"state":1,"name":"node5","parentID":"4","childrenID":6,"branchs":[],"branchFlag":0,"point":{"x":0,"y":0},"shape":"parallelogram "},' +
            '{"id":6,"startFlag":0,"endFlag":1,"state":1,"name":"node6","parentID":"5","childrenID":"","branchs":[],"branchFlag":0,"point":{"x":0,"y":0},"shape":"square"}]';
        let testArray = JSON.parse(testData);
        for (let index = 0; index < testArray.length; index++) {
            const nodeobj = testArray[index];
            //找到开始节点
            if (nodeobj.startFlag === 1){
                if (nodeobj.shape === "ellipse" || nodeobj.shape === "square"){
                    nodeobj.point.x = MARGIN.x;
                    nodeobj.point.y = MARGIN.y + squareSize.normal.radiusY ;
                    testArray[index].point = nodeobj.point;
                    pointArr.push(nodeobj.point);
                    // let parentY = squareSize.normal.radiusY;
                    this.childPoint(nodeobj, testArray );
                }else if (nodeobj.shape === "rhomb"){
                    nodeobj.point.x = MARGIN.x;
                    nodeobj.point.y = MARGIN.y + squareSize.normal.radiusY  ;
                    testArray[index].point = nodeobj.point;
                    pointArr.push(nodeobj.point);
                    // let parentY = rhombSize.normal.radiusY;
                    this.childPoint(nodeobj, testArray );
                } else if (nodeobj.shape === "parallelogram"){
                    nodeobj.point.x = MARGIN.x;
                    nodeobj.point.y = MARGIN.y + squareSize.normal.radiusY ;
                    testArray[index].point = nodeobj.point;
                    pointArr.push(nodeobj.point);
                    // let parentY = parallelogramSize.normal.radiusY;
                    this.childPoint(nodeobj, testArray );
                };
                break;
            };
        };
        this.startDrawCircleAndLineAction(testArray, 0);
        this.setState({
            data: testArray,
            allPointArr: pointArr
        });

    }
    //寻找子节点
    childPoint= (parentobj,testArray ) =>{
        for (let index = 0; index < testArray.length; index++) {
            const childobj = testArray[index];
            if (parentobj.childrenID === childobj.id){
                if ((childobj.shape === "ellipse" || childobj.shape === "square") ) {
                    childobj.point.y = parentobj.point.y + squareSize.normal.radiusY*2 + masterstroke;
                    childobj.point.x = parentobj.point.x;
                    testArray[index].point = childobj.point;
                    pointArr.push(childobj.point);
                    if (childobj.endFlag === 0) {
                        this.childPoint(childobj, testArray)
                    };
                } else if (childobj.shape === "rhomb"){
                    childobj.point.y = parentobj.point.y + rhombSize.normal.radiusY *2+ masterstroke;
                    childobj.point.x = parentobj.point.x;
                    testArray[index].point = childobj.point;
                    pointArr.push(childobj.point);
                    if (childobj.endFlag === 0) {
                        this.childPoint(childobj, testArray);
                    };
                } else if (childobj.shape === "parallelogram"){
                    childobj.point.y = parentobj.point.y + parallelogramSize.normal.radiusY*2 + masterstroke;
                    childobj.point.x = parentobj.point.x;
                    testArray[index].point = childobj.point;
                    pointArr.push(childobj.point);
                    if (childobj.endFlag === 0) {
                        this.childPoint(childobj, testArray);
                    };
                };
                break;
            };
        };
    }
    /**
    * 开始画图
    * testArray: 数据源
    * paramID: 点击结点ID 改变画布上按钮的样式 
    */
    startDrawCircleAndLineAction = (testArray, paramID) => {
        const context = this.canvas.getContext('2d');
        context.clearRect(0, 0, 1000, 1000);
        //画图
        for (let index = 0; index < testArray.length; index++) {
            const element = testArray[index];
            this.drawCircleInCanvas(context, element.point.x, element.point.y, element.state,element.shape, paramID === element.id ? 1 : 0);
            //画分支圆
            // if (element.branchFlag === 1) {
            //     for (var kk = 0; kk < element.branchs.length; kk++) {
            //         var branchObj = element.branchs[kk];
            //         this.drawCircleInCanvas(context, branchObj.point.x, branchObj.point.y, branchObj.state, paramID === branchObj.id ? 1 : 0);
            //     }
            // }
        }

        //画线
        var startObj;
        for (let index = 0; index < testArray.length; index++) {
            var nodeObj = testArray[index];
            //找到开始结点
            if (nodeObj.startFlag === 1) {
                startObj = nodeObj;
                break;
            }
        }
        this.drawLineTest(context, startObj, testArray);
    }
    drawCircleInCanvas = (context, orginx, orginy, state,shape, clickState) => {
        switch (state) {
            case 1:
                //绿色
                context.fillStyle = clickState ? "green" : "#8ebe5c";
                break;
            case 2:
                //红色
                context.fillStyle = clickState ? "#9c2525" : "#ec2b2bb8";
                break;
            case 3:
                //蓝色
                context.fillStyle = clickState ? "blue" : "#3b58eac2";
                break;
            default:
                break;
        }

        // context.beginPath();
        // // //圆形区域  
        // // context.arc(orginx, orginy, Radius, 0, Math.PI * 2, false);    //注意这里的参数是弧度制，而不是角度制  

        // context.closePath();
        // context.fill();  //填充颜色
        switch (shape) {
            case "ellipse":

                break;
            case "square":
                context.rect(orginx - squareSize.normal.radiusX, orginy - squareSize.normal.radiusY * 2, squareSize.normal.radiusX * 2, squareSize.normal.radiusY*2);
                context.stroke();
                break;
            case "rhomb":
                break;
            case "parallelogram":
                break;
            default:
                break;
        }
    }
    render(){
        return(
            <div>
                <canvas onMouseDown={this.approveMouseDonwn.bind(this)}
                    style={{ "margainTop": "50px" }}
                    // onMouseUp={this.approveMouseUp.bind(this)}
                    // onMouseLeave={this.approveMouseUp.bind(this)}
                    width="1000"
                    height="1000"
                    ref={(c) => {
                        this.canvas = c;
                    }} >
                </canvas>
            </div>
        )
    }
}
export default CircleTest
