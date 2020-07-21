import React, {useState} from 'react';

function HoverCount() {
    const [count, setHover] = useState(0)
  return (
    <div>
        <h2 onMouseOver={() => setHover(count + 1)}>Hovered {count} Times</h2>
    </div>
  );
}
export default HoverCount