const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware for parsing JSON bodies
app.use(bodyParser.json());
// Middleware for parsing URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory data store
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET - Retrieve all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET - Retrieve specific user
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

// POST - Create new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;
   
    // Validate input
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };
   
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT - Update user
app.put('/users/:id', (req, res) => {
    const { name, email } = req.body;
    const id = parseInt(req.params.id);
   
    // Find user
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Update user
    users[userIndex] = {
        ...users[userIndex],
        name: name || users[userIndex].name,
        email: email || users[userIndex].email
    };

    res.json(users[userIndex]);
});

// DELETE - Remove user
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
   
    // Find user
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Remove user
    const deletedUser = users[userIndex];
    users = users.filter(u => u.id !== id);

    res.json({ message: 'User deleted', user: deletedUser });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});//npm init -y
//npm install express body-parser
