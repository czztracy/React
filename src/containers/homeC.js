import React, { Component } from "react";
import { HomeCStore } from "../redux/store";
import { SetHomeC } from "../redux/action";

class HomeC extends Component{
    constructor(props) {
        super(props)
        this.state = HomeCStore.getState();
        HomeCStore.subscribe(() => {
            this.setState(HomeCStore.getState());
        })
        console.log(HomeCStore.getState());
    }

    // componentDidMount() {
    //     HomeCStore.subscribe(() => {
    //         this.setState(HomeCStore.getState());
    //     })
    // };
    // 防止组件销毁时造成内存泄露
    componentWillUnmount() {
        this.setState = () => false;
    }

    ChangeData = () => {
        let obj = {
            name: "特雷西·麦克格雷迪",
            team: "休斯顿火箭队",
            occupation: "退役NBA篮球运动员"
        }
        HomeCStore.dispatch(SetHomeC(obj));
    }

    render() {
        return (
            <div>
                <p>{this.state.name} --- {this.state.team} --- {this.state.occupation}</p>
                <button onClick={this.ChangeData}>点击触发修改HomeC信息</button>
            </div>
        )
    }
}

export default HomeC;