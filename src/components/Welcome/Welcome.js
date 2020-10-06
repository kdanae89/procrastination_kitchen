import React from 'react';

import './Welcome.scss';

class Welcome extends React.Component {

  render () {
    return (
      <div id="welcome">
        <div className="intro-wrapper">
          <div className="text">
            <p>
              No time to make a trip to the store...
              what can I make with what I have on hand?
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
