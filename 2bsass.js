import React from "react";
import "./App.css";
import "./styles.scss";

export default function App() {
  const data = { name: "Likki", course: "FSD" };

  return (
    <div>
      <h2>CSS & SCSS Styling Example</h2>

      <div className="cssBox">
        <p>Styled using CSS</p>
      </div>

      <div className="sassBox">
        <p>Styled using SCSS</p>
      </div>

      <h3>Student Data:</h3>
      <p>{data.name}</p>
      <p>{data.course}</p>
    </div>
  );
}


//App.css
.cssBox {
  background: lightblue;
  padding: 10px;
  border: 1px solid #000;
  margin-bottom: 10px;
}


//Styles.scss
$bg: lightpink;

.sassBox {
  background: $bg;
  padding: 10px;
  border-radius: 6px;

  p {
    font-weight: bold;
  }
}
