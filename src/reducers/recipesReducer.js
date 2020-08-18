// const selectedRecipeReducer = (selectedRecipe = null, action) => {
//   if(action.type === 'RECIPE_SELECTED') {
//     return action.payload;
//   }
//   return selectedRecipe;
// }
//
// export default selectedRecipeReducer;

export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RECIPES':
      return action.payload;
    default:
      return state;
  }
}
