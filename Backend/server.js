require('dotenv').config()
const express = require ('express')

// Database connection
const db = require('./config/db')

// Importing routes
const accountsRoutes = require('./routes/accountsRoutes')
const songsRoutes = require('./routes/songsRoutes')


//Express app setup
const app = express()
// server.js
;(async () => {
    try {
      const result = await db.query('SELECT * FROM user_roles LIMIT 2')
      console.log('✅ Database connection successful', result.rows.length, 'rows found')
    } catch (err) {
      console.error('❌ Database connection failed:', err.message)
      process.exit(1)
    }
  })()
  



//Global Middleware
app.use(express.json())
app.use((req, res, next) => {
    req.db = db
    console.log(req.path, req.method)
    next()
  })

// Routes
app.use('/api/accounts', accountsRoutes)


//listen for requests
app.listen(process.env.PORT, () => {
    console.log('Server is running on port 4000')
})