import React, { Component } from 'react';
import classnames from 'classnames';
import {
  DialogContainer,
  DialogHeader,
  DialogTitle,
  DialogBody,
  SectionTitle
} from '../dialog';
import { Item, ItemAvatar, ItemTitle, ItemSubtitle, ItemAmount } from '../item';

const accounts = [
  {
    colour: 'blue',
    name: 'Everyday account',
    acc: '345-443 4556546',
    amount: 12558
  },
  {
    colour: 'green',
    name: 'Savings account',
    acc: '344-213 6447806',
    amount: 24600
  },
  {
    colour: 'orange',
    name: 'Everyday account',
    acc: '4487 5586 9877 0054',
    amount: 542
  }
];

export default class MakePayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: undefined,
      destination: undefined,
      amount: undefined,
      frequency: undefined
    };
  }

  getStep = () => {
    const { origin, destination, amount, frequency } = this.state;

    if (
      origin !== undefined &&
      destination === undefined &&
      amount === undefined &&
      frequency === undefined
    ) {
      return 2;
    }

    if (
      origin !== undefined &&
      destination !== undefined &&
      amount === undefined &&
      frequency === undefined
    ) {
      return 3;
    }

    if (
      origin !== undefined &&
      destination !== undefined &&
      amount !== undefined &&
      frequency === undefined
    ) {
      return 4;
    }

    if (
      origin !== undefined &&
      destination !== undefined &&
      amount !== undefined &&
      frequency === undefined
    ) {
      return 5;
    }

    if (
      origin !== undefined &&
      destination !== undefined &&
      amount !== undefined &&
      frequency !== undefined
    ) {
      return 6;
    }

    return 1;
  };

  render() {
    const step = this.getStep();

    return (
      <DialogContainer className="make-payment">
        <DialogHeader>
          <DialogTitle>Make payment</DialogTitle>
          {step === 2 && <div>Account selected</div>}
          {step === 3 && <div>Recipent selected</div>}
          {step === 4 && <div>Payment amount</div>}
        </DialogHeader>
        <DialogBody>
          {step === 1 && (
            <div>
              <SectionTitle>Select an account</SectionTitle>
              {accounts.map(item => (
                <Item className={classnames('sectionItem')}>
                  <ItemAvatar colour={item.colour}>
                    {item.name.substr(0, 1)}
                  </ItemAvatar>
                  <ItemTitle>{item.name}</ItemTitle>
                  <ItemSubtitle>{item.acc}</ItemSubtitle>
                  <ItemAmount>
                    <span className="currency">$</span>
                    {item.amount.toLocaleString('en-AU', {
                      style: 'decimal'
                    })}
                  </ItemAmount>
                </Item>
              ))}
            </div>
          )}
          {step === 2 && <div>Select recipent</div>}
          {step === 3 && <div>Payment amount</div>}
          {step === 4 && <div>One-off or Recurring</div>}
          {step === 5 && (
            <div>
              <button>Make payment</button>
            </div>
          )}
        </DialogBody>
      </DialogContainer>
    );
  }
}
