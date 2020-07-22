import React, {useState, useEffect} from 'react';

 function HookUseEffectOne() {
const [count, setCount] = useState(0);
const [name, setName] = useState(' ')

//Implementing the side effect
useEffect(() => {
    console.log('use effect -updating document title')
    document.title = `You clicked ${count} times`
}, [count])
  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value) }/>
        <button onClick={() => setCount(count + 1)}>Click { count } Times</button>
    </div>
  );
}
export default HookUseEffectOne