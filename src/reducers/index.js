import { combineReducers } from 'redux';
import recipesReducer from './recipes/recipesReducer';
import selectedRecipeReducer from './recipes/selectedRecipeReducer';

export default combineReducers({
  recipes: recipesReducer,
  selectedRecipe: selectedRecipeReducer
});
