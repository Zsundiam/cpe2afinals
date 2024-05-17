import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('0');
  const [result, setResult] = useState('');
  const [operator, setOperator] = useState('');
  const [prevInput, setPrevInput] = useState('');

  const handleClick = (value) => {
    if (value === 'EQ') {
      try {
        const res = eval(prevInput + operator + input);
        setResult(res.toString());
        setInput(res.toString());
        setPrevInput(res.toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('0');
      setResult('');
      setOperator('');
      setPrevInput('');
    } else if (value === 'ADD' || value === 'SUB' || value === 'MUL' || value === 'DIV' || value === 'EXP' || value === 'MOD') {
      if (input === '0') {
        setInput('');
      }
      setOperator(value.replace('ADD', '+').replace('SUB', '-').replace('MUL', '*').replace('DIV', '/').replace('EXP', '**').replace('MOD', '%'));
      setPrevInput(input);
      setInput('');
    } else if (value === 'NEG') {
      setInput((parseFloat(input) * -1).toString());
    } else {
      if (input === '0') {
        setInput(value);
      } else {
        setInput(input + value);
      }
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Zendrick John M. Sundiam - CPE 2A</h1>
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
          <span>{result}</span>
        </div>
        <div className="buttons">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button className="operator" onClick={() => handleClick('ADD')}>ADD</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button className="operator" onClick={() => handleClick('SUB')}>SUB</button>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button className="operator" onClick={() => handleClick('MUL')}>MUL</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button className="equal" onClick={() => handleClick('EQ')}>EQ</button>
          <button className="operator" onClick={() => handleClick('DIV')}>DIV</button>
          <button className="operator" onClick={() => handleClick('EXP')}>EXP</button>
          <button className="operator" onClick={() => handleClick('MOD')}>MOD</button>
          <button className="operator" onClick={() => handleClick('NEG')}>NEG</button>
          <button className="clear" onClick={() => handleClick('C')}>CLR</button>
        </div>
      </div>
    </div>
  );
}

export default App;
