import React from 'react';
import spoonacular from '../api/spoonacular';
import Header from './Header/Header';
import IngredientsSearch from './IngredientsSearch/IngredientsSearch';
import RecipeList from './Recipe/RecipeList/RecipeList';
import RecipeDetail from './Recipe/RecipeDetail/RecipeDetail';
import { connect } from 'react-redux';
import { fetchRecipes, fetchRecipeInfo } from '../actions';
import './App.scss';

class App extends React.Component {

  onSearchSubmit = ingredients => {
    this.props.fetchRecipes(ingredients);
  };

  render () {
    //only show recipes without missing ingredients
    const recipes = this.props.recipes.filter(recipe => recipe.missedIngredientCount === 0);

    return (
      <div className="container">
        <Header />
        <IngredientsSearch onSubmit={this.onSearchSubmit} />
        <div className="result-wrapper">
          {this.props.selectedRecipe && (
            <RecipeDetail
              recipe={this.props.selectedRecipe}
             />
          )}
          {recipes && recipes.length > 0 && (
            <RecipeList
              recipes={recipes}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    selectedRecipe: state.selectedRecipe
   };
}

export default connect(mapStateToProps, { fetchRecipes })(App);
