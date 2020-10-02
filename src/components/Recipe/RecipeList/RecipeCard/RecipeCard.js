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
        <ul className='ingredient-list'>
          {this.props.recipe.usedIngredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.originalString}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default RecipeCard;
