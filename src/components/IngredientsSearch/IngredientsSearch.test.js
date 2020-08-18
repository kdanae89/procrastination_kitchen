import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import IngredientsSearch from './IngredientsSearch';

//jest --updateSnapshot if ever the component changes

//unit

describe('IngredientSearch', () => {
  it('snapshot renders', () => {
    const IngredientSearchComponent = renderer.create(<IngredientsSearch/>);
    expect(IngredientSearchComponent).toMatchSnapshot();
  });
});
