import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

const AuthScreen = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>

            <Switch>
                <Route path="/login">
                    <LoginScreen />
                </Route>
                <Route path="/register">
                    <RegisterScreen />
                </Route>
            </Switch>
        </Router>
    );
}

export default AuthScreen;