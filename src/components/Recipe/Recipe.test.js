import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import IngredientsSearch from '../IngredientsSearch/IngredientsSearch';
import RecipeList from './RecipeList/RecipeList';
import RecipeCard from './RecipeList/RecipeCard/RecipeCard';
import RecipeDetail from './RecipeDetail/RecipeDetail';






test('RecipeCard(s) should contain recipes without missing ingredients only', () => {
  render(
    <IngredientsSearch>
    </IngredientsSearch>
  )
})
