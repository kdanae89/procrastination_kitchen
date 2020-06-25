import React from 'react';
import Nav from '../Nav/Nav';
import Profile from '../Profile/Profile';
import './Header.scss';

const Header = props => {
  return (
    <div className="header">
      <div className="trans">
          <Nav />
          <h1>Procrastination Kitchen</h1>
          <Profile />
        </div>
    </div>
  );
};

export default Header;
