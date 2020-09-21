import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  flights: [],
  remoteFlights: []
};

function flightReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return {
      ...state,
      flights: action.payload
    };
  }

  if (action.type === "DATA_LOADED") {
    return {
      ...state,
      remoteFlights: action.payload
    };
  }

  return state;
}

export default flightReducer;
