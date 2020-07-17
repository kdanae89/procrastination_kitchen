import React from 'react';
import './RecipeCard.scss'

class RecipeCard extends React.Component {
  render () {
    const { title, image, usedIngredientCount, missedIngredientCount, likes, usedIngredients } = this.props.recipe;

    return (
      <div
        className="recipe-card"
        data-testid="recipe-card"
        onClick={() => this.props.onRecipeSelect(this.props.recipe)}
      >
        <h2>{title}</h2>
        <img
          alt={title}
          src={image}
        />
        <p data-testid="missing-ingredients">{missedIngredientCount}</p>
      </div>
    )
  }
}

export default RecipeCard;
