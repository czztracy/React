import React, { Component, Fragment } from "react";
import Img from "../../assets/logo192.png"; 

class StateAscension extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                {this.props.Com}
                <p>
                    <img src={Img} alt="" />
                </p>
            </Fragment>
        )
    }
}


export default StateAscension;