require('dotenv').config()

const express = require ('express')
const accountsRoutes = require('./routes/accounts')


//Express app setup
const app = express()

//Global Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/accounts', accountsRoutes)


//listen for requests
app.listen(process.env.PORT, () => {
    console.log('Server is running on port 4000')
})