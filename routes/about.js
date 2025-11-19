const express = require('express');
const router = express.Router();

// About page - redirect to home with anchor
router.get('/', (req, res) => {
    res.redirect('/#about');
});

module.exports = router;
