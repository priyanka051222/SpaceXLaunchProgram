import { createSelector } from "reselect";

const getYearFilter = (state) => state.filters && state.filters.year;
const getRemoteFlights = (state) => state.flights && state.flights.remoteFlights;
const getLaunchSuccess = (state) =>  state.filters && state.filters.launchSuccess;
const getLandSuccess = (state) =>  state.filters && state.filters.landSuccess;

export const getVisibleRemoteFlights = createSelector(
  [getYearFilter, getLaunchSuccess, getLandSuccess, getRemoteFlights],
  (year, landSuccess, launchSuccess, flights) => {
      if(flights)
        return flights.filter((t) => t.launch_year  == year && t.launch_success == launchSuccess && t.land_success == landSuccess); 
    }
);
