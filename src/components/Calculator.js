import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: 0 });

  const operationClick = (e) => {
    const operation = e.target.value;
    const result = calculate(state, operation);
    setState(result);
  };

  const screen = (e) => {
    setState({
      total: e.target.value,
    });
  };

  const { total, next } = state;
  return (
    <div className="calc">
      <p className="screen" onChange={screen}>{ next || total || 0 }</p>
      <div>
        <button type="button" onClick={operationClick} value="AC">AC</button>
        <button type="button" onClick={operationClick} value="+/-">+/-</button>
        <button type="button" onClick={operationClick} value="%">%</button>
        <button type="button" onClick={operationClick} value="÷" className="orange">÷</button>
      </div>
      <div>
        <button type="button" onClick={operationClick} value="7">7</button>
        <button type="button" onClick={operationClick} value="8">8</button>
        <button type="button" onClick={operationClick} value="9">9</button>
        <button type="button" onClick={operationClick} value="x" className="orange">x</button>
      </div>
      <div>
        <button type="button" onClick={operationClick} value="4">4</button>
        <button type="button" onClick={operationClick} value="5">5</button>
        <button type="button" onClick={operationClick} value="6">6</button>
        <button type="button" onClick={operationClick} value="-" className="orange">-</button>
      </div>
      <div>
        <button type="button" onClick={operationClick} value="1">1</button>
        <button type="button" onClick={operationClick} value="2">2</button>
        <button type="button" onClick={operationClick} value="3">3</button>
        <button type="button" onClick={operationClick} value="+" className="orange">+</button>
      </div>
      <div>
        <button type="button" className="zero" onClick={operationClick} value="0">0</button>
        <button type="button" onClick={operationClick} value=".">.</button>
        <button type="button" onClick={operationClick} value="=" className="orange">=</button>
      </div>
    </div>
  );
};

export default Calculator;
