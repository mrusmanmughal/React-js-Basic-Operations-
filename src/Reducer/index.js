import TodoReducer from "./TodoReducer";
import CrudTableReducer from "./CrudTableReducer";
import { combineReducers } from "redux";
const RootReducer = combineReducers({
  TodoReducer,
  CrudTableReducer,
});
export default RootReducer;
