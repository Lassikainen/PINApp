import { combineReducers } from "redux";
import { generatorReducer } from "../components/generator/reducer";
import { savedReducer } from "../components/saved/reducer";
import { headerReducer } from "../components/header/reducer";

const rootReducer = combineReducers({
  generatorReducer,
  savedReducer,
  headerReducer,
});

export default rootReducer;
