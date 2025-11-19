const express = require('express');
const router = express.Router();

// Enhanced projects data for featured section on home page
const featuredProjects = [
    {
        id: 1,
        title: 'Portfolio Website',
        description: 'Full-stack portfolio website built with Node.js and Express. Features modern responsive design, contact forms, and dynamic project showcases.',
        features: 'Responsive Design, Contact Forms, Dynamic Content',
        role: 'Full-Stack Developer - Design, Development & Deployment',
        technologies: 'Node.js, Express, EJS, Bootstrap 5',
        githubUrl: 'https://github.com/Allenpandey1/portfolio',
        liveUrl: 'https://allenpandey.com',
        featured: true,
        badge: 'Featured 💼'
    },
    {
        id: 2,
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution built with Node.js and Express. Features include user authentication, product management, shopping cart, and payment integration.',
        features: 'User Auth, Product Management, Shopping Cart, Payment Integration',
        role: 'Full-Stack Developer - Backend & Frontend Integration',
        technologies: 'Node.js, Express, MongoDB, Bootstrap, JavaScript',
        githubUrl: 'https://github.com/Allenpandey1/ecommerce-platform',
        liveUrl: 'https://ecommerce-demo.example.com',
        featured: true,
        badge: 'Featured 🏢'
    },
    {
        id: 3,
        title: 'Task Management API',
        description: 'RESTful API for task management with JWT authentication. Includes CRUD operations, user management, and real-time updates using WebSockets.',
        features: 'JWT Auth, CRUD Operations, Real-time Updates, RESTful API',
        role: 'Backend Developer - API Design & Implementation',
        technologies: 'Node.js, Express, MongoDB, JWT, Socket.io',
        githubUrl: 'https://github.com/Allenpandey1/task-management-api',
        featured: true,
        badge: 'Featured 📊'
    }
];

// Home page
router.get('/', (req, res) => {
    const successMessage = req.query.success === 'true' 
        ? 'Thank you for your message! I\'ll get back to you soon.' 
        : null;
    
    res.render('Home/index', {
        title: 'Allen Pandey - Computer Science Student & Full-Stack Developer',
        page: 'home',
        featuredProjects: featuredProjects,
        errors: null,
        formData: {},
        successMessage: successMessage
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
