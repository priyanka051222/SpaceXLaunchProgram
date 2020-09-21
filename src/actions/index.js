import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export const getData = (url) => {
  return async (dispatch) => {
    const response = await  fetch(url);
    const json = await response.json();
    dispatch({ type: "DATA_LOADED", payload: json });
  };
};

export const getData2 = (url) => {
  return {
    type: "DATA_REQUESTED",
    payload: { url } 
  };
};

export const setYearFilter = payload => ({
  type: 'SET_YEAR',
  payload
});

export const setLaunchFilter = payload => ({
  type: 'SET_LAUNCH',
  payload
});

export const setLandFilter = payload => ({
  type: 'SET_LAND',
  payload
});