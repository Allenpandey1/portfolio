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

// GET contact page
router.get('/', (req, res) => {
    const successMessage = req.query.success === 'true' 
        ? 'Thank you for your message! I\'ll get back to you soon.' 
        : null;
    
    res.render('Contact/index', {
        title: 'Contact - Allen Pandey',
        page: 'contact',
        successMessage: successMessage,
        errors: null,
        formData: {}
    });
});

// POST contact form
router.post('/', contactValidation, (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        // Return form with errors
        return res.render('Contact/index', {
            title: 'Contact - Allen Pandey',
            page: 'contact',
            successMessage: null,
            errors: errors.array(),
            formData: req.body
        });
    }
    
    // TODO: Implement email sending logic here
    // You can use services like Nodemailer, SendGrid, or Resend
    const { name, email, message } = req.body;
    
    console.log(`Contact form submitted by ${name} (${email}): ${message}`);
    
    // Redirect with success message
    res.redirect('/contact?success=true');
});

module.exports = router;
