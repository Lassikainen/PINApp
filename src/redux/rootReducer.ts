import { combineReducers } from "redux";
import { generatorReducer } from "../components/generator/reducer";
import { savedReducer } from "../components/saved/reducer";

const rootReducer = combineReducers({ generatorReducer, savedReducer });

export default rootReducer;
