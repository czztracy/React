// 增加
export const add =  (num) => {
    return { type: "ADD", data: num}
}

// 减少
export const DEL = (num) => {
    return { type: "DEL", data: num }
}

// HomeC数据修改
export const SetHomeC = (data) => {
    return { type: "Update", data }
}