namespace Profile.Models
{
    /// <summary>
    /// Model representing a project in the portfolio
    /// </summary>
    public class Project
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Technologies { get; set; } = string.Empty;
        public string GitHubUrl { get; set; } = string.Empty;
        public string? LiveUrl { get; set; }
    }
}

