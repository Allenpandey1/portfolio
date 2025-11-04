using Microsoft.AspNetCore.Mvc;

namespace Profile.Controllers
{
    /// <summary>
    /// Controller for the about page
    /// </summary>
    public class AboutController : Controller
    {
        /// <summary>
        /// Display the about page with education, experience, and skills
        /// </summary>
        public IActionResult Index()
        {
            return View();
        }
    }
}

