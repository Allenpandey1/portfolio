const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
    res.render('home/index', {
        title: 'Home - Allen Pandey',
        page: 'home'
    });
});

// Error page
router.get('/error', (req, res) => {
    res.render('error', {
        title: 'Error - Allen Pandey',
        message: 'An error occurred while processing your request.'
    });
});

module.exports = router;
