import React from 'react';
import { render, screen } from '@testing-library/react';
import IngredientsSearch from './IngredientsSearch';

test('IngredientsSearch should have no intial value', () =>{
  render(<IngredientsSearch />)
  expect(screen.getByTestId('input')).toBeDefined()
  expect(screen.getByTestId('input')).toHaveProperty('value', '')
});

// test('RecipeList should populate with recipes (RecipeCard(s)) after search', () => {
//   const handleSearch = jest.fn();
//   const ingredients = 'pickles';
//
//   render(<IngredientsSearch onSubmit={handleSearch}/>)
//
//   expect(screen.getByTestId('search')).toBeTruthy();
//   const search = screen.getByTestId('search');
//
//   fireEvent.change(search, {target: {value: ingredients}});
//   fireEvent.submit(search);
//
//   expect(handleSearch).toHaveBeenCalledWith('pickles');
//   // expect(screen.getByTestId('recipe-list')).toBeTruthy();
//   // expect(screen.queryByTestId('recipe-card')).toBeDefined()
// });
