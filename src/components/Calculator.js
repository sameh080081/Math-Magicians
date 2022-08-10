import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
    };
    this.operationClick = this.operationClick.bind(this);
    this.screen = this.screen.bind(this);
  }

  operationClick = (e) => {
    const operation = e.target.value;
    const result = calculate(this.state, operation);
    this.setState(result);
  }

  screen = (e) => {
    this.setState({
      total: e.target.value,
    });
  }

  render() {
    return (
      <div className="calc">
        <p className="screen" onChange={this.screen}>{ 0 }</p>
        <div>
          <button type="button" onClick={this.operationClick} value="AC">AC</button>
          <button type="button" onClick={this.operationClick} value="+/-">+/-</button>
          <button type="button" onClick={this.operationClick} value="%">%</button>
          <button type="button" onClick={this.operationClick} value="÷" className="orange">÷</button>
        </div>
        <div>
          <button type="button" onClick={this.operationClick} value="7">7</button>
          <button type="button" onClick={this.operationClick} value="8">8</button>
          <button type="button" onClick={this.operationClick} value="9">9</button>
          <button type="button" onClick={this.operationClick} value="x" className="orange">x</button>
        </div>
        <div>
          <button type="button" onClick={this.operationClick} value="4">4</button>
          <button type="button" onClick={this.operationClick} value="5">5</button>
          <button type="button" onClick={this.operationClick} value="6">6</button>
          <button type="button" onClick={this.operationClick} value="-" className="orange">-</button>
        </div>
        <div>
          <button type="button" onClick={this.operationClick} value="1">1</button>
          <button type="button" onClick={this.operationClick} value="2">2</button>
          <button type="button" onClick={this.operationClick} value="3">3</button>
          <button type="button" onClick={this.operationClick} value="+" className="orange">+</button>
        </div>
        <div>
          <button type="button" className="zero" onClick={this.operationClick} value="0">0</button>
          <button type="button" onClick={this.operationClick} value=".">.</button>
          <button type="button" onClick={this.operationClick} value="=" className="orange">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
