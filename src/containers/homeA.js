import React, { useState } from "react";

// class HomeA extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//     componentDidMount(){};
//     render() {
//         return (
//             <div>HomeA</div>
//         )
//     }
// }

function HomeA(props) {
    // let [value, setValue] = useState({
    //     vala: 0,
    //     valb: 1,
    //     valc: 2
    // });
    let [value, setValue] = useState(0)
    let [value1, setValue1] = useState(1)
    let [value2, setValue2] = useState(2)
    return (
        <div className="HomeA">
            Hello HomeA
            <p>
                使用数据：{value} --- {value1} --- {value2}
                <button onClick={() => { setValue(value + 1) }}>修改</button>
                <button onClick={() => { setValue1(value1 + 1) }}>修改</button>
                <button onClick={() => { setValue2(value2 + 1) }}>修改</button>
            </p>
        </div>
    )
}

export default HomeA;