// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import LxReact from "./components/lx/ReactCom";
import StateAscension from "./components/lx/StateAscension";

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      Com: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
  }
  ModifyValue = () => {
    this.setState({ Com: "AAAAAAAAAAAAAAAAAAAAAAAAAA" })
  }
  render() {
    return (
      <div className="App">
        React
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <MyCom />
        <MyClassCom />
        <ComWZT {...obj} />
        <Com {...ObjClass} />
        <FatherCom />
        <LxReact {...this.state} />
        <StateAscension {...this.state} />
        <p>
          <button onClick={this.ModifyValue}>修改组件值</button>
        </p>
      </div>
    );
  }
}
// 无状态组件  函数组件
function MyCom(props) {
  return (
  <div>我是一个无状态组件 --- {props.name}</div>
  )
}
// defaultProps默认值
MyCom.defaultProps = { name: "我是props中name的默认值" }
// 类组件 首字母必须大写
class MyClassCom extends React.Component{
  render() {
    return (
      <div>类组件</div>
    )
  }
}
let obj = {
  text: "这是传递给ComWZT组件的数据（父组件的数据）",
  num: 99999
};
// props 父传子
function ComWZT(props) {
  return (
  <div>我是一个无状态组件------外部传递的数据是：{props.text}---{props.num}</div>
  )
}
// props 父子传值
class Com extends React.Component{
  // 第二种设置默认值的写法
  static defaultProps = { sex: "超人" }
  render() {
    return (
      <div>
        Class类组件 --- {this.props.name} --- {this.props.age} --- {this.props.sex}
      </div>
    )
  }
}
let ObjClass = {
  name: "Czz", age: 24
};

// Com.defaultProps = { sex: "男" }
Com.propTypes = { name: PropTypes.string }

// props验证传递进来的数据是否符合我们希望的类型或要求  上线模式中取消props验证


let arr = ["A", "B", "C"];
let visible = true;
// 子组件
let ChildrenCom = (props) => {
  return (
    <div style={{display: visible ? "block" : "none"}}>
      {
        props.arr.map((v, i) => {
        return (<p key={i}>{v}</p>)
        })
      }
    </div>
  )
}
// 父组件
let FatherCom = () => {
  return (
    <div>
      <h1 onClick={() => { visible = !visible; Render(); console.log(visible); }}>排序展示</h1>
      <ChildrenCom arr={arr} />
    </div>
  )
}

// 重新渲染
function Render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default App;
