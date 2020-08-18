import React from 'react';
import spoonacular from '../api/spoonacular';
import Header from './Header/Header';
import IngredientsSearch from './IngredientsSearch/IngredientsSearch';
import RecipeList from './Recipe/RecipeList/RecipeList';
import RecipeDetail from './Recipe/RecipeDetail/RecipeDetail';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';
import './App.scss';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  state = {
    selectedRecipe: null
  };

  onSearchSubmit = ingredients => {
    this.props.fetchRecipes(ingredients);
  };

  onRecipeSelect = (recipe) => {
    this.setState({ selectedRecipe: recipe });
  };

  render () {
    console.log(this.props.recipes);
    const isSideList = this.state.selectedRecipe ? true : false;

    return (
      <div className="container">
        <Header />
        <IngredientsSearch onSubmit={this.onSearchSubmit} />
        <div className="result-wrapper">
          {this.state.selectedRecipe && (
            <RecipeDetail recipe={this.state.selectedRecipe} />
          )}
          {this.props.recipes && this.props.recipes.length > 0 && (
            <RecipeList
              isSideList={isSideList}
              onRecipeSelect={this.onRecipeSelect}
              recipes={this.props.recipes}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { recipes: state.recipes };
}

export default connect(mapStateToProps, { fetchRecipes })(App);
