import { combineReducers } from "redux";
import counter1 from "./reducers/counter1";
import counter3 from "./reducers/counter3";

export default combineReducers({
  counter1, counter3
})