import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from './App';
import RecipeList from './Recipe/RecipeList/RecipeList';
import spoonacular from '../api/spoonacular';

const api = jest.mock("../api/spoonacular");

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});



it('should load with header and search input only', () => {
  act(() => {
    render(<App />, container);
  });

  console.log(container.querySelector("[data-testid='recipe-list']"))


  expect(container.querySelector("[data-testid='header']")).toBeTruthy();
  expect(container.querySelector("[data-testid='search']")).toBeTruthy();
  expect(container.querySelector("[data-testid='recipe-list']")).toBeFalsy();

});




// afterEach(cleanup);

// test('App should load with header and search input only', () => {
//   render(<App />)
//
//   expect(screen.getByTestId('header')).toBeDefined();
//   expect(screen.getByTestId('search')).toBeDefined();
//   expect(()=> {
//     screen.getByTestId('recipe-list');
//   }).toThrow();
//
// });
//
// test('Should display the data', async () => {
//
// })
