import React from "react";
import { Link } from "react-router-dom";

import LogoutButton from './auth/LogoutButton';

// Displays recipe, allows swiping left or right
const MainScreen = () => {

    return (
        <>
            <div>
                <ul>
                    <li><Link to={`/swipe`}>Swipe</Link></li>
                    <li><Link to={`/saved`}>Saved</Link></li>
                </ul>
            </div>
            <LogoutButton/>
        </>
    );
}

export default MainScreen;