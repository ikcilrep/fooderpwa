import React, { useState } from "react";
import { randomMeal } from '../../Helpers/Recipes';



const SwipeScreen = () => {
    const [meal, setMeal] = useState(randomMeal());

    const onSwipeLeft = () => {
        setMeal(randomMeal());
    };

    const onSwipeRight = () => {
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