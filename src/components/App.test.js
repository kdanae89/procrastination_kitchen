import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import App, { IngredientsSearch, RecipeList } from './App';

describe('App', () => {
  it('should render App', () => {
    const app = renderer.create(<App />);
    expect(app).toMatchSnapshot();
  });
});
