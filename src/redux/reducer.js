var obj = {
    name: "Czz",
    age: 24
}

export function data(state=obj.age, action) {
    switch(action.type) {
        case "ADD":
            return state + action.data;
            // break;
        case "DEL":
            return state - action.data;
            // break;
        default: 
            return state;
            // break;
    }
}

let HomeCData = {
    name: "勒布朗·詹姆斯",
    team: "洛杉矶湖人队",
    occupation: "NBA篮球运动员"
}

export function GetHomeCData(state=HomeCData, action) {
    console.log("HomeC", state, action);
    switch(action.type) {
        case "Update":
            state = action.data
            return state
        default: 
            return state
    }
}