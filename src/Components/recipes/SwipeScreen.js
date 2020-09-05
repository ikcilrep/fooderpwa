import React from "react";
import randomMeal from '../../Helpers/Recipes';

const SwipeScreen = () => {
    const meal = randomMeal();
    return (
        <>
            <h1>{meal.name}</h1>
            <img alt="Very taste image." src={meal.pictureAddress}/>
            <p>{meal.description}</p>
        </>
    );
}

export default SwipeScreen;