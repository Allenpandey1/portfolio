const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Validation rules
const contactValidation = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required'),
    body('email')
        .trim()
        .isEmail().withMessage('Invalid email address')
        .normalizeEmail(),
    body('subject')
        .trim()
        .notEmpty().withMessage('Subject is required'),
    body('message')
        .trim()
        .isLength({ min: 10 }).withMessage('Message must be at least 10 characters')
];

// GET contact page - redirect to home with anchor
router.get('/', (req, res) => {
    res.redirect('/#contact');
});

// POST contact form
router.post('/', contactValidation, (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        // Return home page with form errors
        return res.render('Home/index', {
            title: 'Allen Pandey - Computer Science Student & Full-Stack Developer',
            page: 'home',
            successMessage: null,
            errors: errors.array(),
            formData: req.body
        });
    }
    
    // TODO: Implement email sending logic here
    // You can use services like Nodemailer, SendGrid, or Resend
    const { name, email, message } = req.body;
    
    console.log(`Contact form submitted by ${name} (${email}): ${message}`);
    
    // Redirect to home with success message and anchor to contact section
    res.redirect('/?success=true#contact');
});

module.exports = router;
