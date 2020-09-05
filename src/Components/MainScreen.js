import React from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";

import SwipeScreen from "./SwipeScreen";
import SavedRecipesScreen from "./SavedRecipesScreen";

// Displays recipe, allows swiping left or right
const MainScreen = () => {
    const { path, url } = useRouteMatch();

    return (
        <>
            <div>
                <ul>
                    <li><Link to={`${url}/swipe`}>Swipe</Link></li>
                    <li><Link to={`${url}/saved`}>Saved</Link></li>
                </ul>
            </div>

            <Switch>
                <Route path={`${path}/swipe`}>
                    <SwipeScreen />
                </Route>
                <Route path={`${path}/saved`}>
                    <SavedRecipesScreen />
                </Route>
            </Switch>
        </>
    );
}

export default MainScreen;