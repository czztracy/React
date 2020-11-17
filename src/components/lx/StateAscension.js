import React, { Component, Fragment } from "react";
import Img from "../../assets/logo192.png";
import PubSub from "pubsub-js";

class StateAscension extends Component{
    constructor(props) {
        super(props)
        this.state = {
            text: "我是子组件的数据",
            Name: "特雷西·麦克格雷迪",
            ComInfo: "StateAscension的数据"
        }
    }
    Func(name) {
        this.props.FuncInfo(name);
    }
    AtTheSameLevelTo = () => {
        PubSub.publish("event", this.state.ComInfo)
    }
    // 组件挂载后 constructor 为挂载前
    componentDidMount() {
        // console.log("组件----componentDidMount------挂载后");
    }
    // 更新时
    // getSnapshotBeforeUpdate() {
        // console.log("组件-----getSnapshotBeforeUpdate-----更新时");
    // }
    // 组件更新后
    // componentDidUpdate() {
        // console.log("组件----componentDidUpdate------更新后");
    // }
    // 组件卸载时
    componentWillUnmount() {
        // console.log("组件----componentWillUnmount------卸载时");
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
                <button onClick={this.AtTheSameLevelTo} style={{ marginLeft: "20px" }}>传给同级</button>
            </Fragment>
        )
    }
}


export default StateAscension;