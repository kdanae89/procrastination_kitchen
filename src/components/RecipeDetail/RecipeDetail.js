import React from 'react';
import './RecipeDetail.scss'

class RecipeDetail extends React.Component {
  render () {
    const { title, image, usedIngredientCount, missedIngredientCount, likes, usedIngredients } = this.props.recipe;

    return (
      <div className="recipe-detail">
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

export default RecipeDetail;
