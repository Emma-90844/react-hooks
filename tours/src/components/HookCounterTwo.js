import React, {useState} from 'react';

function HookCounterTwo() {
    const inintialCount = 0;
    const [count, setCount] = useState(inintialCount)
  return (
    <div>
        Count: {count}
        <br></br>
        <button onClick={() => setCount(inintialCount)}>Reset </button>
        <button onClick={() => setCount(count + 1)}>Increment </button>
        <button onClick={() => setCount(count - 1)}>Decrement  </button>
    </div>
  );
}
 export default HookCounterTwo