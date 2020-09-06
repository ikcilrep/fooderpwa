import React, { useState } from "react";
import { randomRecipe } from '../../Helpers/Recipes';
import Cookies from 'universal-cookie';



const SwipeScreen = () => {
    const [meal, setMeal] = useState(randomRecipe());
    const [showMore, setShowMore] = useState(false);
    const cookies = new Cookies();

    if (!(cookies.get('saved-recipes') instanceof Array)) {
        cookies.set('saved-recipes', []);
    }


    const onSwipeLeft = () => {
        setMeal(randomRecipe());
    };

    const onSwipeRight = () => {
        const cookie = cookies.get('saved-recipes');
        if (!cookie.includes(meal.id)) {
            cookies.set('saved-recipes', cookie.concat(meal.id));
        }
        setMeal(randomRecipe());
    }

    const onClickShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <>
            <button onClick={onSwipeLeft}>Left</button>
            <button onClick={onSwipeRight}>Right</button>
            <button onClick={onClickShowMore}>{showMore ? 'Show less' : 'Show more'}</button>
            {showMore ?
                <>
                    <h3>Ingredients:</h3>
                    <ul>
                        {meal.ingredients.map(ingredient => <li>{ingredient}</li>)}
                    </ul>

                    <p>{meal.description}</p>
                </> : null}
            <h1>{meal.name}</h1>
            <img alt="Very tasty." src={meal.pictureAddress} />

        </>
    );
}

export default SwipeScreen;