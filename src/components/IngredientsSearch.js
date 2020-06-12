import React from 'react';

class IngredientsSearch extends React.Component {
  state = { ingredients: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.ingredients)
  }

  render () {
    return (
      <div>
        <form
          onSubmit={this.onFormSubmit}
          style={{ marginTop: "1em" }}
        >
          <div
            className="field"
            style={{
              display: "flex",
              justifyContent: "center"
          }}>
            <label>What's in your pantry?</label>
            <input
              type="text"
              style={{ width: '50%'}}
              onChange={(e) => this.setState({ ingredients: e.target.value})}
              value={this.state.ingredients}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default IngredientsSearch;
