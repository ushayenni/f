import React, { useState } from "react";

function StudentList() {
  const [students, setStudents] = useState([
    { id: 1, name: "John", grade: 85, course: "AI" },
    { id: 2, name: "kumar", grade: 92, course: "Data Science" },
    { id: 3, name: "Rupesh", grade: 78, course: "Web Development" },
    { id: 4, name: "Raju", grade: 88, course: "Deep Learning" },
    { id: 5, name: "Prasanth", grade: 95, course: "Machine Learning" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Filter students based on search term
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort students based on chosen property
  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "grade") {
      return b.grade - a.grade;
    } else {
      return a.course.localeCompare(b.course);
    }
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Student List</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          marginRight: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      {/* Sort Dropdown */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        style={{ padding: "8px", borderRadius: "6px" }}
      >
        <option value="name">Sort by Name</option>
        <option value="grade">Sort by Grade</option>
        <option value="course">Sort by Course</option>
      </select>

      {/* Display List */}
      <ul style={{ marginTop: "20px" }}>
        {sortedStudents.length > 0 ? (
          sortedStudents.map((student) => (
            <li
              key={student.id}
              style={{
                marginBottom: "10px",
                padding: "10px",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                listStyle: "none",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <strong>{student.name}</strong> — {student.course}  
              <span style={{ float: "right" }}>Grade: {student.grade}</span>
            </li>
          ))
        ) : (
          <p>No students found.</p>
        )}
      </ul>
    </div>
  );
}

export default StudentList;
