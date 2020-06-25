import React from 'react';
import RecipeCard from './RecipeCard/RecipeCard';
import './RecipeList.scss';

class RecipeList extends React.Component {


  render () {
    const sidelist = this.props.isSideList ? 'side-list' : '';
    return (
      <ul className={`recipe-list ${sidelist}`}>
        {this.props.recipes.map((recipe, index) => (
          <li key={index}>
            <RecipeCard
              onRecipeSelect={this.props.onRecipeSelect}
              recipe={recipe} />
          </li>
        ))}
      </ul>

    );
  }
}

export default RecipeList;
