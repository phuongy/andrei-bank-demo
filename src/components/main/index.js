// @flow
import React from 'react';
import './main.css';

const Header = ({ children }) => {
  return (
    <div className="main">{children({ balance: 12558, spending: 820 })}</div>
  );
};

export default Header;
