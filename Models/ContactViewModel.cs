using System.ComponentModel.DataAnnotations;

namespace Profile.Models
{
    /// <summary>
    /// ViewModel for the contact form
    /// </summary>
    public class ContactViewModel
    {
        [Required(ErrorMessage = "Name is required")]
        [Display(Name = "Your Name")]
        public string Name { get; set; } = string.Empty;

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email address")]
        [Display(Name = "Your Email")]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "Message is required")]
        [Display(Name = "Message")]
        [MinLength(10, ErrorMessage = "Message must be at least 10 characters")]
        public string Message { get; set; } = string.Empty;
    }
}

