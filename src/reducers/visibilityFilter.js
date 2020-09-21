const initialState = {
  year: "",
  launchSuccess: true,
  landSuccess: false,
};

const visibilityFilter = (state=initialState, action) => {
  switch (action.type) {
    case "SET_YEAR":
      return {
        ...state,
        year: action.payload,
      };
    case "SET_LAUNCH_SUCCESS":
      return {
        ...state,
        launchSuccess: action.payload,
      };
    case "SET_LAND_SUCCESS":
      return {
        ...state,
        landSuccess: action.payload,
      };
    default:
      return state;
  }
};

export default visibilityFilter;
