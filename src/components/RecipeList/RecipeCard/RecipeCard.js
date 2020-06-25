import React from 'react';
import './RecipeCard.scss'

class RecipeCard extends React.Component {
  render () {
    const { title, image, usedIngredientCount, missedIngredientCount, likes, usedIngredients } = this.props.recipe;

    return (
      <div
        onClick={() => this.props.onRecipeSelect(this.props.recipe)}
        className="recipe-card"
      >
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
