// @flow
import React from 'react';
import './nav.css';

export const Nav = ({ children }) => {
  return <div className="nav">{children}</div>;
};

export const NavItem = ({ active, onClick, children }) => {
  return (
    <div className="navItem" onClick={onClick}>
      {children}
    </div>
  );
};

export const NavIcon = ({ children }) => {
  return <div className="navIcon">{children}</div>;
};

export const NavTitle = ({ children }) => {
  return <div className="navTitle">{children}</div>;
};
