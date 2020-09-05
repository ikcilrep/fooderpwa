import React from 'react';

const Recipe = ({ meal }) => (
    <>
        <h1>{meal.name}</h1>
        <h3>Ingredients:</h3>
        <ul>
            {meal.ingredients.map(ingredient => <li>{ingredient}</li>)}
        </ul>
        <p>{meal.description}</p>
    </>
);

export default Recipe;