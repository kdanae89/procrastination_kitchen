import React from 'react';
import { render, screen } from '@testing-library/react';
import IngredientsSearch from './IngredientsSearch';

test('IngredientsSearch should have no intial value', () =>{
  render(<IngredientsSearch />)
  expect(screen.getByTestId('search')).toBeDefined()
  expect(screen.getByTestId('search')).toHaveProperty('value', '')
})
