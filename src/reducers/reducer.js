import {combineReducers} from "redux";
import {allLightsReducer} from "./allLightsReducer";

export default combineReducers({lights: allLightsReducer});
