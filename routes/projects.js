const express = require('express');
const router = express.Router();

// Enhanced projects data with featured, features, and role
const projects = [
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
    },
    {
        id: 4,
        title: 'Weather Dashboard',
        description: 'Interactive weather dashboard that displays current conditions and forecasts. Integrates with multiple weather APIs and features responsive design.',
        features: 'Real-time Data, Interactive Charts, Multi-API Integration',
        role: 'Full-Stack Developer - Frontend & API Integration',
        technologies: 'Node.js, Express, Chart.js, Weather API',
        githubUrl: 'https://github.com/Allenpandey1/weather-dashboard',
        liveUrl: 'https://weather-demo.example.com'
    }
];

// Projects page
router.get('/', (req, res) => {
    res.render('Projects/index', {
        title: 'Projects - Allen Pandey',
        page: 'projects',
        projects: projects
    });
});

module.exports = router;
