import axios from "axios";

// console.log(process.env, 2222222222222);

const service = axios.create({
    baseURL: "http://localhost:9000",
    timeout: 500000
})

service.interceptors.request.use(config => {
    config.headers["token"] = "";
    // console.log("请求数据", config);
    return config
}, error => {
    Promise.reject(error);
})

service.interceptors.response.use(response => {
    // const res = response.data;
    // console.log("返回数据", response);
    // 根据返回编码处理 情况
    return response.data;
}, error => {
    return Promise.reject(error);
})

export default service;
