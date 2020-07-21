import React, {useState} from 'react';

function HookCounterThree() {
    const [name, setName]  = useState({firstName: '', lastName: ''})
  return (
    <div>
        <input type="text"
         onChange={e => setName({ ...name,firstName: e.target.value})} 
         placeholder="First name"/>

        <input type="text" 
        onChange={e => setName({ ...name, lastName: e.target.value})} 
         placeholder="Last name name"/>
        <h6>Your Firsrt name is : {name.firstName}</h6>
        <h6>Your last name is : {name.lastName}</h6>
        
    </div>
  );
}
export default HookCounterThree