import React from 'react';

class RecipeCard extends React.Component {
  render () {
    const { title, image, usedIngredientCount, missedIngredientCount } = this.props.recipe;

    return (
      <div>
        <h2>{title}</h2>
        <img
          alt={title}
          src={image}
        />
        <p>This recipe contains {usedIngredientCount} ingredients you listed
        and you're missing {missedIngredientCount}.</p>
      </div>
    )
  }
}

export default RecipeCard;
