// createTestUser.js
require('dotenv').config();
const pool = require('./config/db'); // your db.js
const bcrypt = require('bcrypt');

async function createTestUser() {
  const username = 'testuser';
  const email = 'test@example.com';
  const password = '1234';
  const gender = 'Man';

  try {
    // Hash the password
    const password_hash = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO streamer_auth (username, email, password_hash, gender)
       VALUES ($1, $2, $3, $4)
       RETURNING id, username, email`,
      [username, email, password_hash, gender]
    );

    console.log('✅ Test user created:', result.rows[0]);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error creating test user:', err.message);
    process.exit(1);
  }
}

createTestUser();
