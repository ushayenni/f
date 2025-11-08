import React, { useState } from "react";

function Counter() {
  
  const [count, setCount] = useState(0);

  
  const handleClick = () => {
    setCount(count + 1); // Update state
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React Screen Update Example</h2>
      <h3>Count: {count}</h3>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Counter;
`
