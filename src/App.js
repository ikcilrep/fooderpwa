import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "./App.css";
import MainScreen from "./Components/MainScreen";
import AuthScreen from "./Components/auth/AuthScreen";
import { useAuth0 } from "@auth0/auth0-react";


const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Router>
      <Route path="/main">
        {isAuthenticated ? <MainScreen /> : <Redirect to="/auth" />}
      </Route>
      <Route path="/auth">
        {isAuthenticated ? <Redirect to="/main" /> : <AuthScreen />}
      </Route>
      <Route exact path="/">
        {isAuthenticated ? <Redirect to="/main" /> : <Redirect to="/auth" />}
      </Route>
      {/* <Route path="*">*/}
      {/* <NoRouteMatch /> */}
      {/* </Route> */}
    </Router>
  );
};

export default App;
