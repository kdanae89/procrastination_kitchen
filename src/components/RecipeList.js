import React from 'react';

class RecipeList extends React.Component {

  render () {
    return (
      <div>
        {this.props.recipes.map((recipe, index) => (
          <li key={index}>
            <h1>{recipe.title}</h1>
            <img src={recipe.image} />
            <p>This recipe contains {recipe.usedIngredientCount} ingredients you listed
            and you're missing {recipe.missedIngredientCount}.</p>
          </li>
        ))}
      </div>

    );
  }
}

export default RecipeList;
