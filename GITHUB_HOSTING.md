# GitHub Hosting Options for ASP.NET Core

## ❌ GitHub Pages Limitation

**GitHub Pages only supports static websites** (HTML, CSS, JavaScript). It cannot host:
- Server-side applications (like ASP.NET Core MVC)
- .NET runtime dependencies
- Server-side processing (like form submissions, database connections)

Your portfolio website uses **ASP.NET Core MVC**, which requires a .NET runtime server.

---

## ✅ Alternative Solutions

### Option 1: GitHub Actions + Azure/Render (Recommended) 🚀

**Best for**: Free automated deployments with full .NET support

Use GitHub Actions to automatically deploy your ASP.NET Core app to a hosting provider whenever you push code.

#### Setup GitHub Actions for Azure:

1. **Create GitHub Actions Workflow**:

Create `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy to Azure

on:
  push:
    branches: [ main ]
  workflow_dispatch:

env:
  AZURE_WEBAPP_NAME: your-app-name    # Set this to your Azure app name
  DOTNET_VERSION: '8.0.x'

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup .NET
        uses: actions/setup-dotnet@v3
        with:
          dotnet-version: ${{ env.DOTNET_VERSION }}
      
      - name: Restore dependencies
        run: dotnet restore
      
      - name: Build
        run: dotnet build --configuration Release --no-restore
      
      - name: Publish
        run: dotnet publish --configuration Release --output ./publish
      
      - name: Deploy to Azure
        uses: azure/webapps-deploy@v2
        with:
          app-name: ${{ env.AZURE_WEBAPP_NAME }}
          publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
          package: ./publish
```

2. **Get Azure Publish Profile**:
   - Azure Portal → Your App Service → Get publish profile
   - Copy the publish profile XML

3. **Add GitHub Secret**:
   - GitHub repo → Settings → Secrets and variables → Actions
   - Add new secret: `AZURE_WEBAPP_PUBLISH_PROFILE`
   - Paste the publish profile XML

4. **Push and Deploy**:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Actions deployment"
   git push
   ```
   - GitHub Actions will automatically deploy on every push!

#### Setup GitHub Actions for Render:

```yaml
name: Deploy to Render

on:
  push:
    branches: [ main ]

jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Render Deploy
        uses: johnbeynon/render-deploy-action@v0.0.8
        with:
          service-id: ${{ secrets.RENDER_SERVICE_ID }}
          api-key: ${{ secrets.RENDER_API_KEY }}
```

---

### Option 2: Convert to Static Site (Not Recommended) ⚠️

**Only if**: You're willing to lose server-side functionality (contact form won't work)

You could export the site as static HTML, but you'd lose:
- Contact form functionality
- Server-side rendering
- Dynamic features

This is **not recommended** for your current ASP.NET Core MVC application.

---

### Option 3: Free .NET Hosting Providers 🆓

These providers offer free tiers that support ASP.NET Core:

#### A. Render (Free Tier)
- **Free**: 750 hours/month
- **Supports**: .NET, automatic SSL, custom domains
- **Limitation**: Spins down after 15 min of inactivity
- **Setup**: Connect GitHub repo directly in Render dashboard

#### B. Azure App Service (Free Tier)
- **Free**: F1 tier available (limited)
- **Supports**: .NET, custom domains, SSL
- **Limitation**: Limited resources, shared infrastructure
- **Setup**: Deploy via GitHub Actions (see above)

#### C. Fly.io
- **Free**: Limited free tier
- **Supports**: .NET, Docker
- **Good for**: Small applications

#### D. Railway
- **Free**: Limited free tier
- **Supports**: .NET, easy GitHub integration
- **Setup**: Connect GitHub repo in Railway dashboard

---

### Option 4: Keep Code on GitHub, Host Elsewhere 💡

**Best Practice**: 
- **GitHub**: Store your source code, version control
- **Hosting Provider**: Deploy and run your application

This is the standard approach and gives you:
- ✅ Version control (GitHub)
- ✅ Free hosting (Render/Azure free tier)
- ✅ Custom domain (allenpandey.com)
- ✅ CI/CD automation (GitHub Actions)

---

## 🎯 Recommended Setup

For your `allenpandey.com` portfolio:

1. **Source Code**: GitHub (free, unlimited private repos)
2. **Hosting**: Render or Azure (free tier)
3. **Deployment**: GitHub Actions (automatic on push)
4. **Domain**: Configure DNS to point to hosting provider

### Step-by-Step:

```bash
# 1. Push your code to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main

# 2. Deploy to Render or Azure
# - Connect GitHub repo in hosting provider dashboard
# - Or use GitHub Actions workflow (see above)

# 3. Configure DNS
# - Follow DNS_SETUP.md instructions
# - Point allenpandey.com to your hosting provider
```

---

## 🔄 GitHub Actions Deployment Example

I can create a ready-to-use GitHub Actions workflow file for you. Would you like me to:

1. Create `.github/workflows/deploy.yml` for Azure?
2. Create `.github/workflows/deploy.yml` for Render?
3. Both?

---

## 📊 Comparison

| Option | Cost | .NET Support | Custom Domain | Easy Setup |
|--------|------|--------------|---------------|------------|
| GitHub Pages | Free | ❌ No | ✅ Yes | ✅ Yes |
| Render | Free* | ✅ Yes | ✅ Yes | ✅ Yes |
| Azure | Free* | ✅ Yes | ✅ Yes | ⚠️ Medium |
| GitHub Actions + Host | Free | ✅ Yes | ✅ Yes | ⚠️ Medium |
| Fly.io | Free* | ✅ Yes | ✅ Yes | ✅ Yes |

*Free tiers have limitations (bandwidth, resources, etc.)

---

## 💡 My Recommendation

**Use Render + GitHub Integration**:

1. ✅ Free tier available
2. ✅ Easy GitHub integration (auto-deploy on push)
3. ✅ Automatic SSL certificates
4. ✅ Supports .NET 8.0
5. ✅ Custom domain support (allenpandey.com)
6. ✅ Simple setup

**Steps**:
1. Push code to GitHub
2. Sign up at render.com
3. Create new Web Service
4. Connect your GitHub repository
5. Render auto-detects .NET and deploys
6. Add custom domain `allenpandey.com` in Render dashboard
7. Configure DNS (see DNS_SETUP.md)

---

## 🚀 Quick Start: Render Deployment

1. **Push to GitHub** (if not already):
   ```bash
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **In Render Dashboard**:
   - New → Web Service
   - Connect GitHub repository
   - Render will auto-detect .NET
   - Build: `dotnet publish -c Release -o ./publish`
   - Start: `dotnet Profile.dll`
   - Click "Create Web Service"

3. **Add Custom Domain**:
   - Settings → Custom Domains → Add `allenpandey.com`
   - Follow DNS instructions

4. **Done!** Your site will auto-deploy on every GitHub push.

---

**Need help setting up any of these options? Let me know!** 🎉
