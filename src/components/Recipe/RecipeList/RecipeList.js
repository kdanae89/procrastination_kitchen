import React from 'react';
import RecipeCard from './RecipeCard/RecipeCard';
import './RecipeList.scss';

class RecipeList extends React.Component {
  render () {
    const sidelist = this.props.isSideList ? 'side-list' : '';

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
                onRecipeSelect={this.props.onRecipeSelect}
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

export default RecipeList;
