import React, {useState, useEffect} from 'react';

 function HookUseEffectOne() {
const [count, setCount] = useState(0);

//Implementing the side effect
useEffect(() => {
    document.title = `You clicked ${count} times`
})
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Click { count } Times</button>
    </div>
  );
}
export default HookUseEffectOne