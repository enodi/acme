import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Chat from "../pages/Chat";

const AppRoute: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Chat} />
    </Switch>
  </Router>
);

export default AppRoute;
