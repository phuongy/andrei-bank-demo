import React from 'react';
import './accountSummary.css';

export const AccountSummary = ({ children }) => (
  <div className="accountSummary">{children}</div>
);

export const AccountName = ({ children }) => (
  <div className="accountName">{children}</div>
);

export const AccountNumber = ({ children }) => (
  <div className="accountNumber">{children}</div>
);

export const AccountBalance = ({ children }) => (
  <div className="accountBalance">{children}</div>
);

export const AccountBalanceLabel = ({ children }) => (
  <div className="accountBalanceLabel">{children}</div>
);

export const AccountBalanceValue = ({ children }) => (
  <div className="accountBalanceValue">{children}</div>
);

export const AccountWeeklySpending = ({ children }) => (
  <div className="accountWeeklySpending">{children}</div>
);

export const AccountWeeklySpendingLabel = ({ children }) => (
  <div className="accountWeeklySpendingLabel">{children}</div>
);

export const AccountWeeklySpendingValue = ({ children }) => (
  <span className="accountWeeklySpendingValue">{children}</span>
);
