const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
const user = {
  username: "admin",
  password: "12345"
};
app.get("/", (req, res) => {
  res.send(`
    <h2>Login Page</h2>
    <form method="POST" action="/login">
      <label>Username:</label><br/>
      <input type="text" name="username" /><br/>
      <label>Password:</label><br/>
      <input type="password" name="password" /><br/><br/>
      <input type="submit" value="Login" />
    </form>
  `);
});
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    res.send("<h3>Login Successful! Welcome " + username + "</h3>");
  } else {
    res.send("<h3>Invalid Credentials </h3>");
  }
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
