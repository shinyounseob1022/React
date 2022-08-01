import { createStore } from 'redux';
import { combineReducers } from "redux";
import media from "../modules/media";

const rootReducer = combineReducers({
    media: media, // <-- 새롭게 추가한 부분
});
const store = createStore(rootReducer);

export default store;