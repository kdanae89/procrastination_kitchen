import React from 'react';
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
          data-testid="search-input"
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
          </div>
        </form>
      </div>
    );
  }
}

export default IngredientsSearch;
