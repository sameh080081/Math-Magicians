import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="calc">
      <p className="screen">0</p>
      <div>
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button" className="orange">+</button>
      </div>
      <div>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button" className="orange">x</button>
      </div>
      <div>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button" className="orange">-</button>
      </div>
      <div>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button" className="orange">+</button>
      </div>
      <div>
      <button type="button" className="zero">0</button>
      <button type="button">.</button>
      <button type="button" className="orange">=</button>
      </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Calculator;