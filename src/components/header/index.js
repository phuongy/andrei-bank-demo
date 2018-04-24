// @flow
import React from 'react';
import './header.css';

export const Header = ({ children }) => {
  return <div className="header">{children}</div>;
};

export const HeaderLeft = ({ children }) => {
  return <div className="headerLeft">{children}</div>;
};

export const HeaderRight = ({ children }) => {
  return <div className="headerRight">{children}</div>;
};
