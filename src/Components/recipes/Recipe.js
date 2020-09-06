import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ meal }) => (
    <>
        <Link to="/saved">
            <button>Return</button>
        </Link>
        <h1>{meal.name}</h1>
        <h3>Ingredients:</h3>
        <ul>
            {meal.ingredients.map(ingredient => <li>{ingredient}</li>)}
        </ul>
        <p>{meal.description}</p>
    </>
);

export default Recipe;