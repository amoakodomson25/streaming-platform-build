const express  = require('express');
const router = express.Router();

//Get all accounts
// This route will handle GET requests to /api/accounts
router.get('/', (req, res) => {
    res.json({ message: 'Get all accounts' });
});

//Get a single account
// This route will handle GET requests to /api/accounts/:id
router.get('/:id', (req, res) => {
    const accountId = 'Lol';
    res.json({ message: `Get account with ID: ${accountId}` });
});


//Create a new account
// This route will handle POST requests to /api/accounts
router.post('/', (req, res) => {
    res.json({ message: 'Create an account' });
});

//Delete an account
// This route will handle DELETE requests to /api/accounts
router.delete('/:id', (req, res) => {
    res.json({ message: `Delete account` });
});

//Update an account
// This route will handle PATCH requests to /api/accounts/:id
router.patch('/:id', (req, res) => {
    res.json({ message: `Update account`}); 
});




module.exports = router;