import React from 'react';
import Nav from './Nav';
import './Header.scss';

const Header = props => {
  return (
    <div className="header">
        <Nav />
        <h1>Procrastination Kitchen</h1>
        <div>user stuff will go here</div>
    </div>
  );
};

export default Header;
