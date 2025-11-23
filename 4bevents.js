import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
const handleMouseOver = () => {
    alert("Mouse hovered over the text!");
  };  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 onMouseOver={handleMouseOver}>ReactJS Event Handling Example</h2>
      <p>Button clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
</div>
  );
}export default App;

