import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "./App.css";
import MainScreen from "./Components/MainScreen";
import AuthScreen from "./Components/auth/AuthScreen";
import Recipe from "./Components/recipes/Recipe";

import { useAuth0 } from "@auth0/auth0-react";
import { meals } from "./Helpers/Recipes";
import SwipeScreen from "./Components/recipes/SwipeScreen";
import SavedRecipesScreen from "./Components/recipes/SavedRecipesScreen";

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Router>
      <Route path="/swipe">
        {isAuthenticated ? <SwipeScreen /> : <Redirect to="/auth" />}
      </Route>
      <Route path="/saved">
        {isAuthenticated ? <SavedRecipesScreen /> : <Redirect to="/auth" />}
      </Route>
      <Route path="/main">
        {isAuthenticated ? <MainScreen /> : <Redirect to="/auth" />}
      </Route>
      <Route path="/auth">
        {isAuthenticated ? <Redirect to="/main" /> : <AuthScreen />}
      </Route>
      <Route exact path="/">
        {isAuthenticated ? <Redirect to="/main" /> : <Redirect to="/auth" />}
      </Route>
      {
        meals.map(meal => (
          <Route path={`/recipe/${meal.id}`}>
            {isAuthenticated ? <Recipe meal={meal} /> : <Redirect to="/auth" />}
          </Route>
        ))
      }
      {/* <Route path="*">*/}
      {/* <NoRouteMatch /> */}
      {/* </Route> */}
    </Router>
  );
};

export default App;
