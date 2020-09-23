import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Grid } from "@material-ui/core";
import {
  setYearFilter,
  setLaunchFilter,
  setLandFilter,
} from "../../actions/index";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles({
  sidebar: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonPanel: {
    display: "flex",
  },
  button: {
    width: 66,
    height: 45,
    margin: 10,
    background: "#DAF7A6",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Sidebar = (props) => {
  const classes = useStyles();
  const years = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];
  const values = [
    {
      label: "True",
      value: true,
    },
    {
      label: "False",
      value: false,
    },
  ];
  const [year, setYear] = useState(props.year);
  const [launchSuccess, setLaunchSuccess] = useState(props.launchSuccess);
  const [landSuccess, setLandSuccess] = useState(props.landSuccess);
  const [SP, setSP] = useState("");
  const history = useHistory();
  const location = useLocation();
  const { path, url } = useRouteMatch();

  return (
    <div className={classes.sidebar}>
      <h2> Filters</h2>
      Launch Year
      <Grid container xs={12} sm={12} justify="center" className={classes.buttonPanel}>
        {years.map((item) => {
          return (
            <Grid item xs={6} justify="center" className={classes.buttonPanel}>
              <Link
                component="button"
                className={classes.button}
                variant='body2'
                style={{ background: item === year ? "green" : "#DAF7A6" }}
                onClick={() => {
                  setYear(item);
                  props.filterOnLaunchYear(item);
                  let searchParams = new URLSearchParams(location.search);
                  // returns the existing query string: '?type=fiction&author=fahid'
                  if (item) searchParams.set("launch_year", item);
                  if (launchSuccess)
                    searchParams.set("launch_success", launchSuccess);
                  if (landSuccess)
                    searchParams.set("land_success", landSuccess);
                  setSP(searchParams);
                  history.push({
                    pathname: url,
                    search: `?${searchParams}`,
                  });
                }}
              >
                {item}
              </Link>
            </Grid>
          );
        })}
      </Grid>
      Successful Launch
      <Grid container xs={12} sm={12} justify="center" className={classes.buttonPanel}>
        {values.map((value) => {
          return (
            <Grid item xs={6} className={classes.buttonPanel}>
              <Link
                component="button"
                className={classes.button}
                style={{
                  background:
                    value.value === launchSuccess ? "green" : "#DAF7A6",
                }}
                variant='body2'
                onClick={() => {
                  setLaunchSuccess(value.value);
                  props.filterOnSuccessfulLaunch(value.value);
                  let searchParams = new URLSearchParams(location.search);
                  // returns the existing query string: '?type=fiction&author=fahid'
                  searchParams.set("launch_success", value.value);

                  if (year) searchParams.set("launch_year", year);
                  if (landSuccess)
                    searchParams.set("land_success", landSuccess);
                  setSP(searchParams);
                  history.push({
                    pathname: url,
                    search: `?${searchParams}`,
                  });
                  history.replace(location)
                }}
              >
                {value.label}
              </Link>
            </Grid>
          );
        })}
      </Grid>
      Successful Land
      <Grid container xs={12} sm={12} justify="center" className={classes.buttonPanel}>
        {values.map((value) => {
          return (
            <Grid item xs={6} className={classes.buttonPanel}>
              <Link
                component="button"
                className={classes.button}
                style={{
                  background: value.value === landSuccess ? "green" : "#DAF7A6",
                }}
                variant='body2'
                onClick={() => {
                  setLandSuccess(value.value);
                  props.filterOnSuccessfulLand(value.value);
                  let searchParams = new URLSearchParams(location.search);
                  // returns the existing query string: '?type=fiction&author=fahid'
                  searchParams.set("land_success", value.value);

                  if (item) searchParams.set("launch_year", item);
                  if (launchSuccess)
                    searchParams.set("launch_success", launchSuccess);
                  setSP(searchParams);
                  history.push({
                    pathname: url,
                    search: `?${searchParams}`,
                  });
                }}
              >
                {value.label}
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  year: state.year,
  landSuccess: state.landSuccess,
  launchSuccess: state.launchSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  filterOnLaunchYear: (year) => dispatch(setYearFilter(year)),
  filterOnSuccessfulLand: (successLand) => dispatch(setLandFilter(successLand)),
  filterOnSuccessfulLaunch: (successLaunch) =>
    dispatch(setLaunchFilter(successLaunch)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
