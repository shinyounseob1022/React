import { createStore } from 'redux';
import { combineReducers } from "redux";
import list from "../modules/list";

const rootReducer = combineReducers({
    list: list, // <-- 새롭게 추가한 부분
});
const store = createStore(rootReducer);

export default store;