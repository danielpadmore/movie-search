import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app/app";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import "./index.scss";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
