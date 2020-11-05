import React from "react";

class LxReact extends React.Component{
    // 在ES6中 不管写不写constructor 在new实例的时候都会补上constructor
    // 可以不写constructor 但是写了 必须写上super()  super()将指向父类
    constructor(props) {
        // 如果constructor中使用props  super必须写上props
        super(props)

        // 提前绑定 改变this
        this.PointToThis4 = this.PointToThis4.bind(this);

        // 定义state
        this.state = {
            name: "CzzLxReact组件",
            newHtml: "<p>AAAAAAAA</p>",
            bool: true
        }

        // 创建ref
        this.myRef = React.createRef();
    }
    // 匿名函数
    changeName = () => {
        this.setState({
            name: "Czzzzzzzz"
        }, () => {
            console.log(this.state.name); // Czzzzzzzz
        }); // 异步操作
        console.log(this.state.name); //CzzLxReact组件
    }
    // ref获取 input值 字符串方式
    // GetStringInputValue = () => {
    //     console.log(this.refs.demoInput.value);
    // }
    // ref 回调函数方式获取
    GetFunInputValue = () => {
        console.log(this.InputFuncValue.value);
    }
    // React.createRef()获取数据
    GetReactCreateRefInputValue = () => {
        console.log(this.myRef.current.value);
    }
    // this 指向处理
    PointToThis1() {
        console.log(this); // undefined
    }
    // bind 改变this执行
    PointToThis2() {
        console.log(this); // 此组件
    }
    // 箭头函数 改变this 推荐
    PointToThis3 = () => {
        console.log(this); // 此组件
    }
    PointToThis4() {
        console.log(this); // 此组件
    }
    PointToThis5() {
        console.log(this); // 此组件
    }
    // 形参传递 1
    ParameterPassing1 = (i) => {
        console.log(i);
    }
    ParameterPassing2 = (e, i) => {
        console.log(e, i);
    }
    ConditionalRendering = () => {
        this.setState({ bool: !this.state.bool });
    }
    render() {
        let text = "Czz";
        if (this.state.bool) {
            text = "czz";
        } else {
            text = "AAA";
        }
        return (
            <div style={{margin: "20px 0"}}>
                {/* this.setState({ key: newValue }) 异步   react自动触发render */}
                <button onClick={this.changeName}>数据改变</button>
                {this.state.name}
                <div>{this.state.newHtml}</div>
                <div dangerouslySetInnerHTML={{__html: this.state.newHtml}}></div>
                {/* React ref三种使用方式
                    1、字符串方式（浏览器报错 不影响使用   不推荐）
                    2、回调函数（推荐）
                    3、React.createRef() (React 16.3新提供的一种方式)
                */}
                {/* 1、String 获取数据 */}
                {/* <input type="text" ref="demoInput" style={{ marginRight: "20px" }} placeholder="字符串获取数据" />
                <button onClick={this.GetStringInputValue} style={{ marginRight: "20px" }}>String ref获取</button> */}
                {/* 2、回调函数获取数据 */}
                <input type="text" style={{ marginRight: "20px" }} ref={(value) => { this.InputFuncValue = value }} placeholder="回调函数获取数据" />
                <button onClick={this.GetFunInputValue} style={{ marginRight: "20px" }}>回调函数方式获取Value</button>
                {/* 3、React.createRef()获取数据 */}
                <input type="text" ref={this.myRef} style={{marginRight: "20px"}} placeholder="React.createRef()获取数据" />
                <button onClick={this.GetReactCreateRefInputValue}>React.createRef()获取数据</button>
                <br />
                {/* React 事件 */}
                {/* 修改 this指向 */}
                <button onClick={this.PointToThis1} style={{ marginRight: "20px", marginTop: "20px" }}>undefined</button>
                {/* 1、bind改变 */}
                <button style={{ marginRight: "20px" }} onClick={this.PointToThis2.bind(this)}>bind改变</button>
                {/* 2、箭头函数 推荐 */}
                <button style={{ marginRight: "20px" }} onClick={this.PointToThis3}>箭头函数改变</button>
                {/* 3、constructor中提前绑定 */}
                <button style={{ marginRight: "20px" }} onClick={this.PointToThis4}>constructor中提前绑定</button>
                {/* 4、调用方式为箭头函数 */}
                <button style={{ marginRight: "20px" }} onClick={() => {this.PointToThis5()}}>调用方式为箭头函数</button>
                {/* 形参传递1 */}
                <button style={{ marginRight: "20px" }} onClick={this.ParameterPassing1.bind(this, this.state.name)}>形参传递1 bind</button>
                {/* 形参传递2 推荐 */}
                <button style={{ marginRight: "20px" }} onClick={(e) => {this.ParameterPassing2(e, this.state.newHtml)}}>形参传递2 箭头函数</button>
                <br />

                {/* 条件渲染 */}
                {/* 1、if语句 jsx中不允许有if */}
                <button onClick={this.ConditionalRendering} style={{ marginTop: "20px" }}>条件渲染</button>
                <p>我是谁：{text}</p>
                <p>三元运算符：{this.state.bool ? "BBB" : "CCC"}</p>
                {this.props.Com}
            </div>
        )
    }
}

export default LxReact;