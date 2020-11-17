import request from "../utils/request";

export function Common() {
    return request({
        url: "/banner",
        method: "GET"
    })
}