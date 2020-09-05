import React from "react";
import { meals } from "../../Helpers/Recipes";
import Cookies from 'universal-cookie';
import { Link } from "react-router-dom";

const SavedRecipesScreen = () => {
    const cookies = new Cookies();
    const savedRecipes = cookies.get('saved-recipes');

    return (
        savedRecipes instanceof Array ? savedRecipes.map(id => (<>
            <br /><Link to={`/recipe/${id}`}>{meals[id].name}</Link>
        </>)) : null
    );
}

export default SavedRecipesScreen;