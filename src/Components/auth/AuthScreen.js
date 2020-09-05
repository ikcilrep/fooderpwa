import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LoginScreen from "./LoginScreen";

const AuthScreen = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/login">Login or register!</Link></li>
                </ul>
            </div>

            <Switch>
                <Route path="/login">
                    <LoginScreen />
                </Route>
            </Switch>
        </Router>
    );
}

export default AuthScreen;