import React, { useState } from "react";
import { randomMeal } from '../../Helpers/Recipes';
import Cookies from 'universal-cookie';



const SwipeScreen = () => {
    const [meal, setMeal] = useState(randomMeal());
    const cookies = new Cookies();

    if (!(cookies.get('saved-recipes') instanceof Array)) {
        cookies.set('saved-recipes', []);
    }


    const onSwipeLeft = () => {
        setMeal(randomMeal());
    };

    const onSwipeRight = () => {
        const cookie = cookies.get('saved-recipes');
        if (!cookie.includes(meal.id)) {
            cookies.set('saved-recipes', cookie.concat(meal.id));
        }
        setMeal(randomMeal());
    }

    return (
        <>
            <button onClick={onSwipeLeft}>Left</button>
            <button onClick={onSwipeRight}>Right</button>
            <h1>{meal.name}</h1>
            <img alt="Very tasty." src={meal.pictureAddress} />
            <p>{meal.description}</p>
        </>
    );
}

export default SwipeScreen;