# Allen Pandey - Personal Portfolio Website

A modern, responsive personal portfolio website built with Node.js and Express, showcasing projects, skills, and experience.

## 🚀 Features

- **Home Page**: Introduction with photo placeholder, bio, and navigation buttons
- **About Page**: Detailed sections for education, experience, and skills
- **Projects Page**: Showcase of 3-4 sample projects with GitHub links
- **Contact Page**: Functional contact form with validation
- **Responsive Design**: Mobile-friendly layout using Bootstrap 5
- **Modern UI**: Clean design with blue, white, and gray color scheme
- **Navigation Bar**: Fixed navigation with active page highlighting

## 🛠️ Technologies Used

- **Node.js** (Runtime)
- **Express.js** (Web Framework)
- **EJS** (Templating Engine)
- **Bootstrap 5.3.2** (UI Framework)
- **Bootstrap Icons** (Icons)
- **express-validator** (Form Validation)
- **HTML5 & CSS3**

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher) - comes with Node.js
- A code editor (Visual Studio Code, WebStorm, etc.)
- Git (optional, for version control)

## 🏃 Running Locally

### Step 1: Install Node.js

Download and install Node.js from [nodejs.org](https://nodejs.org/).

Verify installation:
```bash
node --version
npm --version
```

### Step 2: Clone or Navigate to Project Directory

If using Git:
```bash
git clone <repository-url>
cd Profile
```

Or simply navigate to the project directory if you already have it.

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Run the Application

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

The application will start and you should see:
```
Server is running on port 3000
Visit http://localhost:3000
```

### Step 5: Open in Browser

Open your browser and navigate to:
- **http://localhost:3000**

## 🎨 Customization Guide

### Updating Personal Information

1. **Home Page Bio**: Edit `views/home/index.ejs`
2. **Photo Placeholder**: Replace the placeholder image URL in `views/home/index.ejs` with your actual photo URL
3. **About Page**: Update education, experience, and skills in `views/about/index.ejs`
4. **Projects**: Modify project data in `routes/projects.js`
5. **Contact Links**: Update email, GitHub, and LinkedIn links in `views/contact/index.ejs`

### Changing Colors

The site uses Bootstrap 5's primary blue color scheme. To change colors:

1. Edit `public/css/site.css` and modify the color values
2. Update Bootstrap color classes in the views (e.g., `bg-primary`, `text-primary`)

### Adding More Projects

Edit `routes/projects.js` and add more project objects to the array:

```javascript
{
    id: 5,
    title: 'Your Project Title',
    description: 'Project description here...',
    technologies: 'Node.js, Express, Bootstrap',
    githubUrl: 'https://github.com/yourusername/project',
    liveUrl: 'https://your-live-url.com' // Optional
}
```

## 📧 Contact Form Configuration

The contact form currently logs submissions to the console. To enable email sending:

1. Install an email service package (e.g., Nodemailer, SendGrid, or Resend)
2. Configure email settings in `.env` file
3. Implement email sending logic in `routes/contact.js` (see the TODO comment)

### Example with Nodemailer:

```bash
npm install nodemailer
```

Then implement in `routes/contact.js`:
```javascript
const nodemailer = require('nodemailer');
// Add email service configuration and implementation
```

## 🚢 Deployment Instructions

> 💡 **Using GitHub?** See [GITHUB_HOSTING.md](GITHUB_HOSTING.md) for GitHub Actions deployment and hosting options!

### Deploying to Render

1. **Create a Render Account**: Sign up at [render.com](https://render.com)

2. **Create New Web Service**:
   - Connect your GitHub repository
   - **Environment**: Select `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - Instance Type: Choose free tier

3. **Configure Environment Variables** (if needed):
   - `NODE_ENV`: `production`
   - `PORT`: (Render sets this automatically)

4. **Configure Custom Domain**:
   - In Render Dashboard → Settings → Custom Domains
   - Add `allenpandey.com` and `www.allenpandey.com`
   - Update DNS records as instructed by Render
   - See [DNS_SETUP.md](DNS_SETUP.md) for detailed DNS setup

5. **Deploy**: Render will automatically deploy on each push to your repository

### Deploying to Other Platforms

The application can be deployed to:
- **Heroku** (Easy Node.js deployment)
- **Vercel** (Serverless functions)
- **Railway** (Simple deployment)
- **DigitalOcean App Platform**
- **AWS Elastic Beanstalk**
- **Google Cloud Platform**

## 📁 Project Structure

```
Profile/
├── routes/              # Express Routes
│   ├── home.js
│   ├── about.js
│   ├── projects.js
│   └── contact.js
├── views/               # EJS Templates
│   ├── layout.ejs
│   ├── home/
│   │   └── index.ejs
│   ├── about/
│   │   └── index.ejs
│   ├── projects/
│   │   └── index.ejs
│   ├── contact/
│   │   └── index.ejs
│   └── error.ejs
├── public/             # Static Files
│   ├── css/
│   │   └── site.css
│   └── js/
│       └── site.js
├── server.js          # Application Entry Point
├── package.json       # Dependencies
└── .env              # Environment Variables (create this)
```

## 🔧 Configuration Files

- **package.json**: Project dependencies and scripts
- **server.js**: Express server configuration
- **.env**: Environment variables (create this file)

## 🐛 Troubleshooting

### Issue: `node: command not found`
**Solution**: Ensure Node.js is installed and added to your PATH.

### Issue: Port already in use
**Solution**: Change the PORT in `.env` file or stop the process using the port.

### Issue: CSS/JS not loading
**Solution**: Ensure `public` folder exists and `express.static()` is configured in `server.js`.

### Issue: Contact form not submitting
**Solution**: Check that form validation is working. Check server logs for errors.

## 🌐 Domain Configuration

This portfolio is configured for **allenpandey.com**. 

📖 **See [DNS_SETUP.md](DNS_SETUP.md) for detailed DNS configuration instructions.**

Quick steps:
1. Deploy your application to a hosting provider (Render, Heroku, etc.)
2. Configure DNS records to point `allenpandey.com` to your hosting provider
3. Enable SSL/HTTPS (usually automatic)
4. Wait 24-48 hours for DNS propagation

## 📝 License

This project is open source and available for personal use. Feel free to customize it for your own portfolio.

## 👤 Author

**Allen Pandey**
- Portfolio: https://allenpandey.com
- Email: contact@allenpandey.com
- GitHub: [@allenpandey](https://github.com/allenpandey)
- LinkedIn: [Allen Pandey](https://linkedin.com/in/allenpandey)

## 🙏 Acknowledgments

- Bootstrap team for the amazing UI framework
- Express.js team for the excellent web framework
- Bootstrap Icons for the icon set

---

**Note**: 
- Domain `allenpandey.com` is configured. See [DNS_SETUP.md](DNS_SETUP.md) for DNS configuration.
- Update project details and personal information as needed before deploying.

