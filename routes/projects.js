const express = require('express');
const router = express.Router();

// Sample projects data
const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution built with Node.js and Express. Features include user authentication, product management, shopping cart, and payment integration.',
        technologies: 'Node.js, Express, MongoDB, Bootstrap, JavaScript',
        githubUrl: 'https://github.com/allenpandey/ecommerce-platform',
        liveUrl: 'https://ecommerce-demo.example.com'
    },
    {
        id: 2,
        title: 'Task Management API',
        description: 'RESTful API for task management with JWT authentication. Includes CRUD operations, user management, and real-time updates using WebSockets.',
        technologies: 'Node.js, Express, MongoDB, JWT, Socket.io',
        githubUrl: 'https://github.com/allenpandey/task-management-api'
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        description: 'Interactive weather dashboard that displays current conditions and forecasts. Integrates with multiple weather APIs and features responsive design.',
        technologies: 'Node.js, Express, Chart.js, Weather API',
        githubUrl: 'https://github.com/allenpandey/weather-dashboard',
        liveUrl: 'https://weather-demo.example.com'
    },
    {
        id: 4,
        title: 'Portfolio Website',
        description: 'Personal portfolio website showcasing projects, skills, and experience. Built with modern web technologies and responsive design principles.',
        technologies: 'Node.js, Express, Bootstrap 5, HTML5, CSS3',
        githubUrl: 'https://github.com/allenpandey/portfolio'
    }
];

// Projects page
router.get('/', (req, res) => {
    res.render('projects/index', {
        title: 'Projects - Allen Pandey',
        page: 'projects',
        projects: projects
    });
});

module.exports = router;
