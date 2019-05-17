import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor() {
    super();
    this.state = {
      balance: 0,
      rate: 0.01,
      term: 15,
      payment: 0.00,
    };
  }

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  calculate(balance, rate, term) {
    const mRate = rate / 1200;
    const payment = (balance * mRate) / (1 - Math.pow(1 / (1 + mRate), term * 12));
    this.setState({
      payment: payment.toFixed(2),
    });
  }

  render() {
    const payment = this.state.payment;

    return (
      <div className='container'>
        <div className='row'>
          <div className='offset-2'>
            <h3>Mortgage Calculator</h3>
            <hr />
          </div>
        </div>

        <form>
          <div className='form-group row'>
            <label htmlFor='balance' className='col-2 col-form-label'>Loan Balance</label>
            <div className='col-10'>
              <input
                name='balance' id='balance' type='number' min='0'
                className='form-control' onChange={ e => this.onChange(e) }
              />
            </div>
          </div>
          <div className='form-group row'>
            <label htmlFor='rate' className='col-2 col-form-label'>Interest Rate (%)</label>
            <div className='col-10'>
              <input
                name='rate' id='rate' type='number' step='0.01' min='0'
                className='form-control' onChange={ e => this.onChange(e) }
              />
            </div>
          </div>
          <div className='form-group row'>
            <label htmlFor='term' className='col-2 col-form-label'>Loan Term (years)</label>
            <div className='col-10'>
              <select
                name='term' id='term'
                className='form-control' onChange={ e => this.onChange(e) }
              >
                <option value='15'>15</option>
                <option value='30'>30</option>
              </select>
            </div>
          </div>
          <div className='form-group row'>
            <button
              name='submit' id='submit' type='button'
              className='offset-2 btn btn-primary'
              onClick={ () => this.calculate(this.state.balance, this.state.rate, this.state.term) }
            >Calculate</button>
          </div>
        </form>

        <div name='output' id='output' className='offset-2'>${payment} is your payment.</div>
      </div>
    );
  }
}
