import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import NavBar from "./components/NavMenu/NavBar";

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
