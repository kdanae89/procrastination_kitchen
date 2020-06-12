import axios from 'axios';

export default axios.create({
  baseURL: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
  headers: {
    "content-type":"application/octet-stream",
    "x-rapidapi-host":process.env.REACT_APP_RECIPE_API_HOST,
    "x-rapidapi-key":process.env.REACT_APP_RECIPE_API_KEY,
    "useQueryString":true
  }
});
