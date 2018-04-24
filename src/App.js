import React, { Component } from 'react';
import Container from './components/container';
import { Header, HeaderLeft, HeaderRight } from './components/header';
import Main from './components/main';
import { Nav, NavItem, NavIcon, NavTitle } from './components/nav';
import {
  AccountSummary,
  AccountName,
  AccountNumber,
  AccountBalance,
  AccountBalanceLabel,
  AccountBalanceValue,
  AccountWeeklySpending,
  AccountWeeklySpendingLabel,
  AccountWeeklySpendingValue
} from './components/accountSummary';
import Dialog from './components/dialog';

import docket from './assets/docket.svg';
import wallet from './assets/wallet.svg';
import page from './assets/page.svg';
import menu from './assets/menu.svg';
import bell from './assets/bell.svg';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'make-payment',
      visible: false
    };
  }

  setVisible = visible => {
    this.setState({ visible });
  };

  setActive = active => {
    console.log('act', active);
    this.setState({ active }, () => {
      switch (this.state.active) {
        default:
          this.setVisible(true);
      }
    });
  };

  render() {
    const { active, visible } = this.state;

    return (
      <div className="wrapper">
        <Container visible={visible}>
          <Header>
            <HeaderLeft>
              <img src={menu} />
            </HeaderLeft>
            <HeaderRight>
              <img src={bell} />
            </HeaderRight>
          </Header>
          <Main>
            {data => {
              const { balance, spending } = data;

              return (
                <AccountSummary>
                  <AccountName>Everyday account</AccountName>
                  <AccountNumber>345-443 4556546</AccountNumber>
                  <AccountBalance>
                    <AccountBalanceLabel>Funds available</AccountBalanceLabel>
                    <AccountBalanceValue>
                      <span className="currency">$</span>
                      <strong>
                        {balance.toLocaleString('en-AU', {
                          style: 'decimal'
                        })}
                      </strong>
                    </AccountBalanceValue>
                  </AccountBalance>
                  <AccountWeeklySpending>
                    <AccountWeeklySpendingLabel>
                      You’ve spent<br />
                      <AccountWeeklySpendingValue>
                        <span className="currency">$</span>
                        <strong>
                          {spending.toLocaleString('en-AU', {
                            style: 'decimal'
                          })}
                        </strong>
                      </AccountWeeklySpendingValue>
                      <br />
                      this week
                    </AccountWeeklySpendingLabel>
                  </AccountWeeklySpending>
                </AccountSummary>
              );
            }}
          </Main>
          <Nav>
            <NavItem onClick={() => this.setActive('account-details')}>
              <NavIcon>
                <img src={wallet} />
              </NavIcon>
              <NavTitle>Account details</NavTitle>
            </NavItem>
            <NavItem onClick={() => this.setActive('make-payment')}>
              <NavIcon>
                <img src={docket} />
              </NavIcon>
              <NavTitle>Make payment</NavTitle>
            </NavItem>
            <NavItem onClick={() => this.setActive('transaction-details')}>
              <NavIcon>
                <img src={page} />
              </NavIcon>
              <NavTitle>Transaction details</NavTitle>
            </NavItem>
          </Nav>
        </Container>
        <Dialog
          active={active}
          visible={visible}
          hideDialog={() => this.setVisible(false)}
        />
      </div>
    );
  }
}

export default App;
