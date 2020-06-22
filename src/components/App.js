import React from 'react';
import spoonacular from '../api/spoonacular';
import Header from './Header/Header';
import IngredientsSearch from './IngredientsSearch';
import RecipeList from './RecipeList';

class App extends React.Component {
  state = { recipes: [] };

  onSearchSubmit = async (ingredients) => {
    const response = await spoonacular.get('/recipes/findByIngredients', {
        params: {
          "ranking":"2",
          "ignorePantry":"false",
          "ingredients":ingredients
        }
      });

      this.setState({ recipes: response.data})
  }

  render () {
    return (
      <div className="container">
        <Header />
        <IngredientsSearch onSubmit={this.onSearchSubmit} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
