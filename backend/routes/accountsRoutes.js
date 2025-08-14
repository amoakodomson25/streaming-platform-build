// routes/accountsRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');
const router = express.Router();

// JWT helper
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
  );
};

// ==================== LOGIN ====================
router.post('/login', async (req, res) => {
  const { identifier, password } = req.body;

  if (!identifier || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const result = await pool.query(
      'SELECT * FROM streamer_auth WHERE email = $1 OR username = $1',
      [identifier]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Account does not exist' });
    }

    const user = result.rows[0];

    if (!user.password_hash) {
      return res.status(500).json({ error: 'Account exists but password not set' });
    }

    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) {
      return res.status(401).json({ error: 'Wrong password' });
    }

    const token = generateToken(user);

    res.json({
      message: 'Login successful',
      user: { id: user.id, username: user.username, email: user.email },
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ==================== SIGNUP ====================
router.post('/signup', async (req, res) => {
  const { username, email, password, gender } = req.body;

  if (!username || !email || !password || !gender) {
    return res.status(400).json({ error: 'Please fill in all required fields' });
  }

  try {
    const exists = await pool.query(
      'SELECT 1 FROM streamer_auth WHERE username = $1 OR email = $2',
      [username, email]
    );

    if (exists.rows.length > 0) {
      return res.status(400).json({ error: 'Username or email already in use' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const result = await pool.query(
      `INSERT INTO streamer_auth (username, email, password_hash, gender)
       VALUES ($1, $2, $3, $4)
       RETURNING id, username, email, gender`,
      [username, email, passwordHash, gender]
    );

    const user = result.rows[0];
    const token = generateToken(user);

    res.status(201).json({
      message: 'Signup successful',
      user,
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ==================== CHECK EMAIL ====================
router.post('/check-email', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  try {
    const result = await pool.query(
      'SELECT 1 FROM streamer_auth WHERE email = $1',
      [email]
    );
    res.json({ exists: result.rows.length > 0 });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ==================== CHECK USERNAME ====================
router.post('/check-username', async (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'Username is required' });

  try {
    const result = await pool.query(
      'SELECT 1 FROM streamer_auth WHERE username = $1',
      [username]
    );
    res.json({ exists: result.rows.length > 0 });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
