import { join } from "path";
import express from "express";
import React from "react";
import { createStore } from "redux";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import rootReducer from "./reducers/flightReducer";
import App from "./components/App";
import template from "./template";
import { StaticRouter } from 'react-router-dom';
const server = express();

server.use("/assets", express.static(join(__dirname, "assets")));

server.get("/", async (req, res) => {
  const initialState = {};
  const context = {};
  // Compile an initial state
  let preloadedState = {};

  // Create a new Redux store instance
  const store = createStore(rootReducer, preloadedState);

  // Render the component to a string
  const appString = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
      <App />
      </StaticRouter>
    </Provider>
  );

  // Grab the initial state from our Redux store
  const finalState = store.getState();

  res.send(
    template({
      body: appString,
      title: "Space Launch Program",
      initialState: JSON.stringify(initialState),
      finalState
    })
  );
});

server.listen(8080);

/* eslint-disable no-console */
console.log("listening on 8080");
/* eslint-enable no-console */
