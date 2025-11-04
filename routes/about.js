const express = require('express');
const router = express.Router();

// About page
router.get('/', (req, res) => {
    res.render('About/index', {
        title: 'About - Allen Pandey',
        page: 'about'
    });
});

module.exports = router;
