import React from "react";
import Grid from "@material-ui/core/Grid";
import Sidebar from "./Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";

import { Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "../routes";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();

const useStyles = makeStyles({
  root: {
    background: '#ccc',
  },
  sidebar: {
    background: '#ffffff',
    height: '100%'
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 style={{ margin: 0, marginBottom: 20}}> SpaceX Launch Program </h1>
      <Router history={history} style={{ padding: 8, overflowX: 'hidden'}}>
        <Grid container xs={12} sm={12} spacing={2}>
          <Grid item xs={12} sm={3} className={classes.sidebar}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Switch>{renderRoutes(Routes)}</Switch>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
