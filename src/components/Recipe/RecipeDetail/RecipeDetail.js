import React from 'react';
import './RecipeDetail.scss'

class RecipeDetail extends React.Component {
  render () {
    const { title, image, summary, extendedIngredients, glutenFree, vegetarian, vegan, sourceUrl, instructions, analyzedInstructions } = this.props.recipe;
    console.log(this.props.recipe);
    return (
      <div>
        <div className="recipe-detail">
          <h2>{title}</h2>
          <img
            alt={title}
            src={image}
          />
          <p>{summary}</p>
        </div>
      </div>
    )
  }
}

export default RecipeDetail;
