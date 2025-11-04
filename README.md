# Allen Pandey - Personal Portfolio Website

A modern, responsive personal portfolio website built with ASP.NET Core MVC, showcasing projects, skills, and experience.

## 🚀 Features

- **Home Page**: Introduction with photo placeholder, bio, and navigation buttons
- **About Page**: Detailed sections for education, experience, and skills
- **Projects Page**: Showcase of 3-4 sample projects with GitHub links
- **Contact Page**: Functional contact form with validation
- **Responsive Design**: Mobile-friendly layout using Bootstrap 5
- **Modern UI**: Clean design with blue, white, and gray color scheme
- **Navigation Bar**: Fixed navigation with active page highlighting

## 🛠️ Technologies Used

- **ASP.NET Core 8.0** (MVC)
- **C#** (Latest version)
- **Bootstrap 5.3.2** (UI Framework)
- **Bootstrap Icons** (Icons)
- **jQuery** (Form validation)
- **HTML5 & CSS3**

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0) or later
- A code editor (Visual Studio, Visual Studio Code, or JetBrains Rider)
- Git (optional, for version control)

## 🏃 Running Locally

### Step 1: Install .NET SDK

Download and install the .NET 8.0 SDK from [Microsoft's official website](https://dotnet.microsoft.com/download/dotnet/8.0).

Verify installation:
```bash
dotnet --version
```

### Step 2: Clone or Navigate to Project Directory

If using Git:
```bash
git clone <repository-url>
cd Profile
```

Or simply navigate to the project directory if you already have it.

### Step 3: Restore Dependencies

```bash
dotnet restore
```

### Step 4: Run the Application

```bash
dotnet run
```

The application will start and you should see output like:
```
Now listening on: https://localhost:5001
Now listening on: http://localhost:5000
```

### Step 5: Open in Browser

Open your browser and navigate to:
- **HTTPS**: `https://localhost:5001`
- **HTTP**: `http://localhost:5000`

## 🎨 Customization Guide

### Updating Personal Information

1. **Home Page Bio**: Edit `Views/Home/Index.cshtml`
2. **Photo Placeholder**: Replace the placeholder image URL in `Views/Home/Index.cshtml` with your actual photo URL
3. **About Page**: Update education, experience, and skills in `Views/About/Index.cshtml`
4. **Projects**: Modify project data in `Controllers/ProjectsController.cs`
5. **Contact Links**: Update email, GitHub, and LinkedIn links in `Views/Contact/Index.cshtml`

### Changing Colors

The site uses Bootstrap 5's primary blue color scheme. To change colors:

1. Edit `wwwroot/css/site.css` and modify the color values
2. Update Bootstrap color classes in the views (e.g., `bg-primary`, `text-primary`)

### Adding More Projects

Edit `Controllers/ProjectsController.cs` and add more `Project` objects to the list:

```csharp
new Project
{
    Id = 5,
    Title = "Your Project Title",
    Description = "Project description here...",
    Technologies = "ASP.NET Core, C#, Bootstrap",
    GitHubUrl = "https://github.com/yourusername/project",
    LiveUrl = "https://your-live-url.com" // Optional
}
```

## 📧 Contact Form Configuration

The contact form currently logs submissions. To enable email sending:

1. Install an email service package (e.g., SendGrid, SMTP, or Azure Communication Services)
2. Configure email settings in `appsettings.json`
3. Implement email sending logic in `Controllers/ContactController.cs` (see the TODO comment)

### Example with SendGrid:

```bash
dotnet add package SendGrid
```

Then implement in `ContactController.cs`:

```csharp
// Add email service injection and implementation
```

## 🚢 Deployment Instructions

> 💡 **Using GitHub?** See [GITHUB_HOSTING.md](GITHUB_HOSTING.md) for GitHub Actions deployment and hosting options!

### Deploying to Azure

1. **Create Azure Web App**:
   - Go to [Azure Portal](https://portal.azure.com)
   - Create a new Web App (App Service)
   - Choose .NET 8.0 runtime stack

2. **Publish the Application**:
   ```bash
   dotnet publish -c Release -o ./publish
   ```

3. **Deploy via Azure CLI**:
   ```bash
   az webapp deploy --resource-group <resource-group-name> --name <app-name> --src-path ./publish
   ```

4. **Or Use Visual Studio**:
   - Right-click project → Publish
   - Select Azure → Azure App Service
   - Follow the wizard

5. **Configure Custom Domain**:
   - In Azure Portal → App Service → Custom domains
   - Add `allenpandey.com` and `www.allenpandey.com`
   - Follow Azure's DNS configuration instructions
   - See [DNS_SETUP.md](DNS_SETUP.md) for detailed DNS setup

### Deploying to Render

1. **Create a Render Account**: Sign up at [render.com](https://render.com)

2. **Create New Web Service**:
   - Connect your GitHub repository (or use Render's Git integration)
   - Build Command: `dotnet publish -c Release -o ./publish`
   - Start Command: `dotnet Profile.dll`
   - Environment: `.NET`

3. **Configure Environment Variables** (if needed):
   - `ASPNETCORE_ENVIRONMENT`: `Production`

4. **Configure Custom Domain**:
   - In Render Dashboard → Settings → Custom Domains
   - Add `allenpandey.com` and `www.allenpandey.com`
   - Update DNS records as instructed by Render
   - See [DNS_SETUP.md](DNS_SETUP.md) for detailed DNS setup

5. **Deploy**: Render will automatically deploy on each push to your repository

### Deploying to Other Platforms

The application can be deployed to:
- **IIS** (Windows Server)
- **Linux** (using Kestrel or behind a reverse proxy like Nginx)
- **Docker** (create a Dockerfile and deploy to any container platform)
- **AWS Elastic Beanstalk**
- **Google Cloud Platform**

## 📁 Project Structure

```
Profile/
├── Controllers/          # MVC Controllers
│   ├── HomeController.cs
│   ├── AboutController.cs
│   ├── ProjectsController.cs
│   └── ContactController.cs
├── Models/              # Data Models
│   ├── ContactViewModel.cs
│   └── Project.cs
├── Views/               # Razor Views
│   ├── Home/
│   ├── About/
│   ├── Projects/
│   ├── Contact/
│   └── Shared/
├── wwwroot/            # Static Files
│   ├── css/
│   │   └── site.css
│   └── js/
│       └── site.js
├── Properties/
│   └── launchSettings.json
├── Program.cs          # Application Entry Point
├── appsettings.json    # Configuration
└── Profile.csproj      # Project File
```

## 🔧 Configuration Files

- **appsettings.json**: Application configuration
- **Properties/launchSettings.json**: Development server settings
- **Profile.csproj**: Project dependencies and settings

## 🐛 Troubleshooting

### Issue: `dotnet: command not found`
**Solution**: Ensure .NET SDK is installed and added to your PATH.

### Issue: Port already in use
**Solution**: Change the port in `Properties/launchSettings.json` or stop the process using the port.

### Issue: CSS/JS not loading
**Solution**: Ensure `wwwroot` folder is included in the project and `UseStaticFiles()` is called in `Program.cs`.

### Issue: Contact form not submitting
**Solution**: Ensure jQuery validation scripts are loaded (check `_ValidationScriptsPartial.cshtml`).

## 📝 License

This project is open source and available for personal use. Feel free to customize it for your own portfolio.

## 🌐 Domain Configuration

This portfolio is configured for **allenpandey.com**. 

📖 **See [DNS_SETUP.md](DNS_SETUP.md) for detailed DNS configuration instructions.**

Quick steps:
1. Deploy your application to a hosting provider (Azure, Render, etc.)
2. Configure DNS records to point `allenpandey.com` to your hosting provider
3. Enable SSL/HTTPS (usually automatic)
4. Wait 24-48 hours for DNS propagation

## 👤 Author

**Allen Pandey**
- Portfolio: https://allenpandey.com
- Email: contact@allenpandey.com
- GitHub: [@allenpandey](https://github.com/allenpandey)
- LinkedIn: [Allen Pandey](https://linkedin.com/in/allenpandey)

## 🙏 Acknowledgments

- Bootstrap team for the amazing UI framework
- Microsoft for ASP.NET Core
- Bootstrap Icons for the icon set

---

**Note**: 
- Domain `allenpandey.com` is configured. See [DNS_SETUP.md](DNS_SETUP.md) for DNS configuration.
- Update project details and personal information as needed before deploying.

