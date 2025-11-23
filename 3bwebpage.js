import React from "react";

function App() {
  const title = "Welcome to ReactJS!";
  const description = "Rendering HTML elements dynamically using JSX.";
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        <li>React uses JSX</li>
        <li>JSX allows HTML inside JavaScript</li>
        <li>Easy to render dynamic content</li>
      </ul>
    </div>
  );
}export default App;
