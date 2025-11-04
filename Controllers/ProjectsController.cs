using Microsoft.AspNetCore.Mvc;
using Profile.Models;

namespace Profile.Controllers
{
    /// <summary>
    /// Controller for the projects page
    /// </summary>
    public class ProjectsController : Controller
    {
        /// <summary>
        /// Display the projects page with sample projects
        /// </summary>
        public IActionResult Index()
        {
            // Sample projects data - can be moved to a database or service later
            var projects = new List<Project>
            {
                new Project
                {
                    Id = 1,
                    Title = "E-Commerce Platform",
                    Description = "A full-stack e-commerce solution built with ASP.NET Core MVC and SQL Server. Features include user authentication, product management, shopping cart, and payment integration.",
                    Technologies = "ASP.NET Core, C#, SQL Server, Bootstrap, JavaScript",
                    GitHubUrl = "https://github.com/allenpandey/ecommerce-platform",
                    LiveUrl = "https://ecommerce-demo.example.com"
                },
                new Project
                {
                    Id = 2,
                    Title = "Task Management API",
                    Description = "RESTful API for task management with JWT authentication. Includes CRUD operations, user management, and real-time updates using SignalR.",
                    Technologies = "ASP.NET Core Web API, Entity Framework Core, JWT, SignalR",
                    GitHubUrl = "https://github.com/allenpandey/task-management-api"
                },
                new Project
                {
                    Id = 3,
                    Title = "Weather Dashboard",
                    Description = "Interactive weather dashboard that displays current conditions and forecasts. Integrates with multiple weather APIs and features responsive design.",
                    Technologies = "ASP.NET Core, Blazor, Chart.js, Weather API",
                    GitHubUrl = "https://github.com/allenpandey/weather-dashboard",
                    LiveUrl = "https://weather-demo.example.com"
                },
                new Project
                {
                    Id = 4,
                    Title = "Portfolio Website",
                    Description = "Personal portfolio website showcasing projects, skills, and experience. Built with modern web technologies and responsive design principles.",
                    Technologies = "ASP.NET Core MVC, Bootstrap 5, HTML5, CSS3",
                    GitHubUrl = "https://github.com/allenpandey/portfolio"
                }
            };

            return View(projects);
        }
    }
}

