import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import MainScreen from "./recipe/MainScreen";
import AuthScreen from "./auth/AuthScreen";
import NoRouteMatch from "./helpers/NoRouteMatch";

const isAuth = true; // PLACEHOLDER

const App = () => {
    return (
        <Router>
            <Route path="/main">
                { isAuth ? <MainScreen /> : <Redirect to="/auth" /> }
            </Route>
            <Route path="/auth">
                { isAuth ? <Redirect to="/main" /> : <AuthScreen /> }
            </Route>
            <Route exact path="/">
                { isAuth ? <Redirect to="/main"/> : <Redirect to="/auth"/> }
            </Route>
            {/* <Route path="*">*/}
                {/* <NoRouteMatch /> */}
            {/* </Route> */}
        </Router>
    );

export default App;
