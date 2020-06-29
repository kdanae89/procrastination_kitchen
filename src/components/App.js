import React from 'react';
import spoonacular from '../api/spoonacular';
import Header from './Header/Header';
import IngredientsSearch from './IngredientsSearch/IngredientsSearch';
import RecipeList from './RecipeList/RecipeList';
import RecipeDetail from './RecipeDetail/RecipeDetail';
import './App.scss';

class App extends React.Component {
  state = {
    recipes: [],
    selectedRecipe: null
  };

  onSearchSubmit = async (ingredients) => {
    const response = await spoonacular.get('/recipes/findByIngredients', {
        params: {
          "ranking":"2",
          "ignorePantry":"false",
          "ingredients":ingredients
        }
      });

      this.setState({ recipes: response.data });
  };

  onRecipeSelect = (recipe) => {
    this.setState({ selectedRecipe: recipe });
  };

  render () {
    const isSideList = this.state.selectedRecipe ? true : false;

    return (
      <div className="container">
        <Header />
        <IngredientsSearch onSubmit={this.onSearchSubmit} />
        <div className="result-wrapper">
          {this.state.selectedRecipe && (
            <RecipeDetail recipe={this.state.selectedRecipe} />
          )}
          <RecipeList
            isSideList={isSideList}
            onRecipeSelect={this.onRecipeSelect}
            recipes={this.state.recipes}
          />
        </div>
      </div>
    );
  }
}

export default App;
