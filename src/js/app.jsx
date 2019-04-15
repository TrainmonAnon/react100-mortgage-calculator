import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor() {
    super();
    this.state = {
      title: "Mortgage Calculator",
      balance: 0,
      rate: 0.01,
      term: 15,
      payment: 0.00,
    };
  }

  calculate(balance, rate, term) {
    let mRate = rate / 1200;
    let payment = (balance * mRate) / (1 - Math.pow(1 / (1 + mRate), term * 12));
    this.setState({
      payment: payment.toFixed(2),
    });
  }
  
  onChange(e){
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    let title = this.state.title;
    let payment = this.state.payment;

    return (
      <div className='container'>
        <h3>{title}</h3>
        <input name='balance' id='balance' type='number' onChange={(e) => this.onChange(e) } />
        <input name='rate' id='rate' type='number' step='0.01' onChange={(e) => this.onChange(e) } />
        <select name='term' id='term' onChange={(e) => this.onChange(e)} >
          <option value='15'>15</option>
          <option value='30'>30</option>
        </select>
        <button name='submit' id='submit' onClick={() => this.calculate(this.state.balance, this.state.rate, this.state.term) } ></button>
        <div name='output' id='output'>${payment} is your payment.</div>
      </div>
    );
  }
}