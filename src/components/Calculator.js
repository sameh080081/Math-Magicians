import React from "react";
import './Calculator.css'

class Calculator extends React.Component {
  render(){
    return (
    <React.Fragment>
    <div className="calc">
    <p className="screen">0</p>
    <div>
    <button>AC</button>
    <button>+/-</button>
    <button>%</button>
    <button className="orange">+</button>
    </div>
    <div>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button className="orange">x</button>
    </div>
    <div>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button className="orange">-</button>
    </div>
    <div>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button className="orange">+</button>
    </div>
    <div>
    <button className="zero">0</button>
    <button>.</button>
    <button className="orange">=</button>
    </div>
    </div>
    </React.Fragment>);
  }
}

export default Calculator;