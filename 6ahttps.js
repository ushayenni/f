const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json());
let users = [
  { id: 1, name: "Ravi" },
  { id: 2, name: "Sneha" }
];
app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.send("User added successfully!");
});
app.get("/users", (req, res) => {
  res.json(users);
});
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(user => user.id !== id);
  res.send(`User with id ${id} deleted successfully.`);
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
