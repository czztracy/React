import React, { Component, Fragment } from "react";
import Img from "../../assets/logo192.png"; 

class StateAscension extends Component{
    constructor(props) {
        super(props)
        this.state = {
            text: "我是子组件的数据",
            Name: "特雷西·麦克格雷迪"
        }
    }
    Func(name) {
        this.props.FuncInfo(name);
    }
    render() {
        return (
            <Fragment>
                {this.props.Name}
                <p>
                    <img src={Img} alt="" />
                    <img src={require("../../assets/logo192.png").default} alt="" />
                </p>
                <button onClick={() => {this.props.func(this.state.text)}}>传给父级1</button>
                <button style={{ marginLeft: "20px" }} onClick={() => {this.Func(this.state.Name)}}>传给父级2</button>
            </Fragment>
        )
    }
}


export default StateAscension;