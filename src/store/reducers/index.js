import { combineReducers } from "redux";
import countriesReducer from "../reducers/countriesReducer";

export default combineReducers({
  countriesState: countriesReducer,
});
