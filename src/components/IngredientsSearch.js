import React from 'react';

class IngredientsSearch extends React.Component {
  render () {
    return (
      <div>
        <form style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "1em"
        }}>
          <div className="field">
            <label>What's in your pantry?</label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default IngredientsSearch;
