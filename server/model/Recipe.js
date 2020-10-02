const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  extendedIngredients: {
    type: String
  },
  glutenFree: {
    type: Boolean
  },
  vegetarian: {
    type: Boolean
  },
  vegan: {
    type: Boolean
  },
  sourceUrl: {
    type: String
  },
  instructions: {
    type: String
  },
  analyzedInstructions: {
    type: String
  }
});

module.exports = mongoose.model("recipe", RecipeSchema);
