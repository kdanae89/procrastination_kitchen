export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RECIPE_INFO':
      return action.payload;
    default:
      return state;
  }
}
