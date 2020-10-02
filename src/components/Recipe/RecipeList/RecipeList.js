import React from 'react';
import RecipeCard from './RecipeCard/RecipeCard';
import { connect } from 'react-redux';
import { fetchRecipeInfo } from '../../../actions';
import './RecipeList.scss';

class RecipeList extends React.Component {
  onRecipeSelect = (recipe) => {
    this.props.fetchRecipeInfo(recipe.id);
  };

  render () {
    const sidelist = this.props.isSideList ? 'side-list' : '';

    console.log(this.props.recipes);
    console.log(this.props.selectedRecipe);


    return (
      <ul
        className={`recipe-list ${sidelist}`}
        data-testid='recipe-list'>
        <div>
        {this.props.recipes && (
          <div>
          {this.props.recipes.map((recipe, index) => (
            <li key={index}>
              <RecipeCard
                onRecipeSelect={this.onRecipeSelect}
                recipe={recipe} />
            </li>
          ))}
          </div>
        )}
        </div>

      </ul>

    );
  }
}

const mapStateToProps = state => {
  return {
    selectedRecipe: state.selectedRecipe
  }
}

export default connect(mapStateToProps, { fetchRecipeInfo })(RecipeList);
