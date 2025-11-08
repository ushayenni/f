//form.html
 <!DOCTYPE html>
<html>
<head>
    <title>Form Demo</title>
</head>
<body>
    <h1>Contact Form</h1>
    <form action="/submit" method="POST">
        <label>Name:</label><br>
        <input type="text" name="name" required><br><br>

        <label>Email:</label><br>
        <input type="email" name="email" required><br><br>

        <label>Message:</label><br>
        <textarea name="message" required></textarea><br><br>

        <button type="submit">Send</button>
    </form>
</body>
</html>
//ejsApp.js
const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Set views folder path
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', message: 'Welcome to EJS Templating!' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us', description: 'This is the about page rendered using EJS.' });
});


app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

//about.ejs
<!DOCTYPE html>
<html>
<head>
    <title><%= title %></title>
</head>
<body>
    <h1><%= message %></h1>
    <p><a href="/about">Go to About Page</a></p>
</body>
</html>
//index.ejs
<!DOCTYPE html>
<html>
<head>
    <title><%= title %></title>
</head>
<body>
    <h1><%= description %></h1>
    <p><a href="/">Back to Home</a></p>
</body>
</html>
//npm start
//npm i express ejs
