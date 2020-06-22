import React from 'react';
import RecipeCard from './RecipeCard';

class RecipeList extends React.Component {

  render () {
    return (
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }}>
        {this.props.recipes.map((recipe, index) => (
          <div key={index}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>

    );
  }
}

export default RecipeList;
