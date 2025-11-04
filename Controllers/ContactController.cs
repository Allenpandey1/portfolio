using Microsoft.AspNetCore.Mvc;
using Profile.Models;

namespace Profile.Controllers
{
    /// <summary>
    /// Controller for the contact page and form handling
    /// </summary>
    public class ContactController : Controller
    {
        private readonly ILogger<ContactController> _logger;

        public ContactController(ILogger<ContactController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Display the contact form
        /// </summary>
        [HttpGet]
        public IActionResult Index()
        {
            return View(new ContactViewModel());
        }

        /// <summary>
        /// Handle form submission
        /// In a real application, you would send an email here
        /// </summary>
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Index(ContactViewModel model)
        {
            if (ModelState.IsValid)
            {
                // TODO: Implement email sending logic here
                // You can use services like SendGrid, SMTP, or Azure Communication Services
                
                _logger.LogInformation($"Contact form submitted by {model.Name} ({model.Email})");
                
                // Set success message
                TempData["SuccessMessage"] = "Thank you for your message! I'll get back to you soon.";
                
                // Return to the form with success message
                return RedirectToAction(nameof(Index));
            }

            // If validation fails, return to form with errors
            return View(model);
        }
    }
}

