import React from 'react';
import classnames from 'classnames';
import MakePayment from '../make-payment';
import './dialog.css';

const Dialog = ({ active, visible = false, hideDialog, children }) => (
  <div
    className={classnames('dialogWrapper', { 'is-visible': visible })}
    onClick={hideDialog}>
    <div className="dialog">
      {active === 'make-payment' && <MakePayment />}

      {active === 'account-details' && <AccountDetails />}

      {active === 'transaction-details' && <TransactionDetails />}
    </div>
  </div>
);

export const DialogContainer = ({ className, children }) => (
  <div className={classnames('dialogContainer', className)}>{children}</div>
);

export const DialogHeader = ({ children }) => (
  <div className={classnames('dialogHeader')}>{children}</div>
);

export const DialogTitle = ({ children }) => (
  <div className={classnames('dialogTitle')}>{children}</div>
);

export const DialogBody = ({ children }) => (
  <div className={classnames('dialogBody')}>{children}</div>
);

export const SectionTitle = ({ children }) => (
  <div className={classnames('sectionTitle')}>{children}</div>
);

const AccountDetails = () => (
  <div className="account-details">Account details</div>
);

const TransactionDetails = () => (
  <div className="transaction-details">Transaction payment</div>
);

export default Dialog;
