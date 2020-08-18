import spoonacular from '../api/spoonacular';


export const fetchRecipes = (ingredients) => async dispatch => {
  const response = await spoonacular.get('/recipes/findByIngredients', {
    params: {
      "ranking":"2",
      "ignorePantry":"false",
      "ingredients":ingredients
    }
  });

  dispatch({ type: 'FETCH_RECIPES', payload: response.data });
}

export const selectRecipe = recipe => {
  return {
    type: 'RECIPE_SELECTED',
    payload: recipe
  };
};
