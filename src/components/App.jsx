import React from "react";
import Grid from "@material-ui/core/Grid";
import Sidebar from "./Sidebar/Sidebar";
import { Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "../routes";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();

function App() {
  return (
    <div>
      <h1> SpaceX Launch Program </h1>
      <Router history={history}>
        <Grid container xs={12} sm={12}>
          <Grid item xs={12} sm={3}>
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
