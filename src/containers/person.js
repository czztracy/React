import React, { Component } from "react";

class Person extends Component{
    constructor(props) {
        super(props);
        this.state = {}; 
    }
    // 挂载后
    componentDidMount() {
        // console.log(this.props, this.props.match.params, this.props.match.params.data);
        console.log(this.props.location.query.data);
    };
    render() {
        return (
            <div>Person</div>
        )
    }
}

export default Person;