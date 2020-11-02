import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import ChatScreen from "../pages/ChatScreen";

const AppRoute: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ChatScreen} />
    </Switch>
  </Router>
);

export default AppRoute;
