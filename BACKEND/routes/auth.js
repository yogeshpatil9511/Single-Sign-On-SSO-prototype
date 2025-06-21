const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const { jwtSecret, jwtExpiresIn } = require('../config/config');
const router = express.Router();

const usersFile = path.join(__dirname, '../users.json');

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, jwtSecret, {
    expiresIn: jwtExpiresIn,
  });

  res.json({ token, user: { id: user.id, username: user.username } });
});

module.exports = router;