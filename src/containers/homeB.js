import React, { Component } from "react";

class HomeB extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "HomeB"
        };
    }
    componentDidMount(){
        console.log(this.props.location)
    };
    ChangeName = () => {
        this.setState({
            name: "AAABBBCCC"
        })
    }
    render() {
        return (
        <div>
            {this.state.name}
            <button onClick={this.ChangeName}>修改name</button>
        </div>
        )
    }
}

export default HomeB;