import React from 'react';
import Nav from './Nav';

const Header = props => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid black"
      }}
      className="header">
        <Nav />
        <h1>Procrastination Kitchen</h1>
        <div>user stuff will go here</div>
    </div>
  );
};

export default Header;
