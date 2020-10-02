import spoonacular from '../api/spoonacular';


export const fetchRecipes = ingredients => async dispatch => {
  const response = await spoonacular.get('/recipes/findByIngredients', {
    params: {
      "number": "25",
      "ranking":"2",
      "ignorePantry":"false",
      "ingredients":ingredients
    }
  });

  dispatch({ type: 'FETCH_RECIPES', payload: response.data });
}

export const fetchRecipeInfo = id => async dispatch => {
  const response = await spoonacular.get(`/recipes/${id}/information`, {
    params: {
      "id": id
    }
  });

  dispatch({ type: 'FETCH_RECIPE_INFO', payload: response.data });
}
