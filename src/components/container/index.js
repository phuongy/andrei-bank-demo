// @flow
import React from 'react';
import classnames from 'classnames';
import './container.css';

const Container = ({ visible, children }) => {
  return (
    <div className={classnames('container', { 'dialog-is-visible': visible })}>
      {children}
    </div>
  );
};

export default Container;
