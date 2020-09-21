import { combineReducers } from "redux";
import flightReducer from "./flightReducer";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  flights: flightReducer,
  filters: visibilityFilter,
});
