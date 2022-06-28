import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Exercise1 from "./react-hooks/Exercise1";
import Exercise2 from "./react-hooks/Exercise2";
import Exercise3 from "./react-hooks/Exercise3";
import Exercise4 from "./react-hooks/Exercise4";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Exercise1} path="/exe1" />
        <Route component={Exercise2} path="/exe2" />
        <Route component={Exercise3} path="/exe3" />
        <Route component={Exercise4} path="/exe4" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
