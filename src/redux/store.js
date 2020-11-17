import { createStore } from "redux";
import { data, GetHomeCData } from "./reducer";
export var store = createStore(data);
export var HomeCStore = createStore(GetHomeCData);