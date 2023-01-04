import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { plus, minus } from './reducer';

function App() {
  const testData = useSelector((state) => state.test.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(plus())}>+</button>
        <span>{testData}</span>
        <button onClick={() => dispatch(minus())}>-</button>
      </div>
    </div>
  );
}

export default App;
