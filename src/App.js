import React, { useState } from 'react';
import './App.css';

function App(props) {
  let [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className='box'>
        <h2>{count}</h2>

        <div className='btn-group'>
          <button className='add-count' onClick={() => setCount(count + 1)}>+</button>
          <button className='remove-count'onClick={() => setCount(count - 1)}>-</button>
          <button className='reset-count' onClick={() => setCount(count = 0)}>RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
