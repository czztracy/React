import React, { Component } from "react";
import HomeA from "./homeA";
import HomeB from "./homeB";
import HomeC from "./homeC";
import { Route, NavLink, Redirect } from "react-router-dom";
import { store } from "../redux/store";
import * as action from "../redux/action";

class Home extends Component{
    constructor(props) {
        super(props);
        this.state={
            obj: store.getState()
        };
        console.log(store.getState(), 111);
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                obj: store.getState()
            })
        })
    };
    ChangeReduxAdd = () => {
        store.dispatch(action.add(1));
    }
    ChangeReduxDEL = () => {
        store.dispatch(action.DEL(1));
    }
    render() {
        return (
            <div>
                <p>{this.state.obj}</p>
                <p>{store.getState()}</p>
                <button onClick={this.ChangeReduxAdd}>点我加1</button>
                <button onClick={this.ChangeReduxDEL}>点我减1</button>
                <p>Home</p>
                <NavLink to="/home/HomeA" style={{ marginRight: "20px" }}>点击HomeA</NavLink>
                <NavLink to="/home/HomeB" style={{ marginRight: "20px" }}>点击HomeB</NavLink>
                <NavLink to="/home/HomeC">点击HomeC</NavLink>
                <Redirect from="/" to="/home/HomeA"></Redirect>
                <Route path="/home/HomeA" component={HomeA}></Route>
                <Route path="/home/HomeB" component={HomeB}></Route>
                <Route path="/home/HomeC" component={HomeC}></Route>
            </div>
        )
    }
}

export default Home;