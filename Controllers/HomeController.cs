using Microsoft.AspNetCore.Mvc;
using Profile.Models;

namespace Profile.Controllers
{
    /// <summary>
    /// Controller for the home page
    /// </summary>
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Display the home page with introduction
        /// </summary>
        public IActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Error page for handling exceptions
        /// </summary>
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View();
        }
    }
}

