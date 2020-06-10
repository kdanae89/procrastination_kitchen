import React from 'react';
import Axios from 'axios';
import Header from './Header';
import IngredientsSearch from './IngredientsSearch';

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render () {
    return (
      <div className="container">
        <Header />
        <IngredientsSearch
          onSubmit={this.onSearchSubmit}
        />
      </div>
    );
  }
}

export default App;
