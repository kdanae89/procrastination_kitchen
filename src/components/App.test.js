import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';
import axios from 'axios';

import App, { onSearchSubmit, Header, IngredientsSearch, RecipeList } from './App';
import { APP_TITLE } from '../constants.js';

const mockStore = configureStore([]);

describe('Connected App should render', () => {
  let store;
  let context;
  let app;

  beforeEach(() => {
    store = mockStore({
      state: {
        selectedRecipe: null
      }
    });

    context = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    app = context.find(App);
  });

  it('should render App', () => {
    context = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(context.toJSON()).toMatchSnapshot();
  });
  it('should contain Header', () => {
    expect(app.find({children: APP_TITLE}).length).toEqual(1);
  });
  it('should contain IngredientSearch', () => {
    expect(app.find({children: "What's in your pantry?"}).length).toEqual(1);
  });
  it('should not contain RecipeList', () => {
    expect(app.find({'data-testid': 'recipe-list'}).length).not.toEqual(1);
  });
  //it should call mock fn
  //it should change state after onSubmit
  //it should render recipeList after onFormSubmit
});

describe('On Search', () => {
  let store;
  let context;
  let app;

  beforeEach(() => {
    store = mockStore({
      state: {
        selectedRecipe: null
      }
    });


    context = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );




    app = context.find(App);
  });

  jest.spyOn(App.prototype, "onSearchSubmit");

  const promise = new Promise((resolve, reject) =>
    setTimeout(
      () =>
        resolve({
          data: {
            recipes: [
              {
                title: "pickle soup",
                missedIngredientCount: 1
              },
              {
                title: "pickle tacos",
                missedIngredientCount: 3
              }
            ]
          }
        }),
      100
    )
  );

  it('should call the mock onSearchSubmit', () => {

  })
})
