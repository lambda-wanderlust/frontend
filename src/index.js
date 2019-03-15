import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/GlobalReset/GlobalReset.module.scss";
import "./components/GlobalStyles/GlobalStyles.module.scss";
import App from "./App";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Router>
    <AppWithRouter />
  </Router>,
  document.getElementById("root")
);
