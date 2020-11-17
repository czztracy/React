import React, { Component } from "react";
import * as API from "../../api/Com";

class DateRequset extends Component{
    constructor(props) {
        super(props)
        this.state = {
            ImgArr: []
        }
    }
    componentDidMount() {
        this.GetData();
    }
    GetData() {
        API.Common().then(res => {
            console.log(res);
        })
    }
    render() {
        return (
            <div></div>
        )
    }
}

export default DateRequset;