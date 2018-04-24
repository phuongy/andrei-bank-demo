import React from 'react';
import classnames from 'classnames';

import './item.css';

export const Item = ({ children }) => <div className="item">{children}</div>;

export const ItemAvatar = ({ colour, children }) => (
  <div className={classnames('itemAvatar', colour)}>{children}</div>
);

export const ItemTitle = ({ colour, children }) => (
  <div className="itemTitle">{children}</div>
);

export const ItemSubtitle = ({ children }) => (
  <div className="itemSubtitle">{children}</div>
);

export const ItemAmount = ({ children }) => (
  <div className="itemAmount">{children}</div>
);
