import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import React from "react";
import classes from "./Routes.module.css";

function Routes() {
  return (
    <Router className={classes.base}>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
