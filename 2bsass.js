// app.js
import React from "react";
import "./App.css";   
import "./App.scss";  

function App() {
  const employees = [
    { id: 101, name: "Prasanth Kumar", position: "Frontend Developer", salary: 55000 },
    { id: 102, name: "Ravi Teja", position: "Backend Developer", salary: 60000 },
    { id: 103, name: "Aravind", position: "UI/UX Designer", salary: 50000 },
    { id: 104, name: "Satya", position: "Project Manager", salary: 75000 },
  ];

  return (
    <div className="app-container">
      <h1 className="title">Employee Details</h1>

      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary (₹)</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp.salary.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn">Download Report</button>
    </div>
  );
}

export default App;

//app.css
.app-container {
  text-align: center;
  background-color: #f9f9f9;
  padding: 40px;
  font-family: Arial, sans-serif;
}

.title {
  color: #333;
  font-size: 32px;
  text-transform: uppercase;
  margin-bottom: 25px;
}

.employee-table {
  margin: 0 auto;
  border-collapse: collapse;
  width: 80%;
}

.employee-table th,
.employee-table td {
  border: 1px solid #ccc;
  padding: 12px;
  text-align: center;
}

.employee-table th {
  background-color: #007bff;
  color: white;
}
//app.scss
$primary-color: #007bff;
$row-hover: #e9f2ff;
$btn-color: #4caf50;

.employee-table {
  tr {
    transition: background-color 0.3s ease;
    &:hover {
      background-color: $row-hover;
    }
  }
}

.btn {
  background-color: $btn-color;
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken($btn-color, 10%);
  }
}
//npm install sass
