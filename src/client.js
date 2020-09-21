import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from './store/index'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;


hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
