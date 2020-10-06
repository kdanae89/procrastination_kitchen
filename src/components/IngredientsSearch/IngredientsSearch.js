import React from 'react';
import Button from '@material-ui/core/Button';

import './IngredientsSearch.scss';

class IngredientsSearch extends React.Component {
  state = { ingredients: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.ingredients)
  };

  render () {
    return (
      <div data-testid="search">
        <form
          className="search-input"
          id="search-input"
          onSubmit={this.onFormSubmit}
        >
          <div className="field">
            <label>
              What's in your pantry?
            </label>
            <input
              data-testid="input"
              onChange={(e) => this.setState({ ingredients: e.target.value})}
              type="text"
              value={this.state.ingredients}
            />
            <Button form='signup-form' type='submit' color="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default IngredientsSearch;
