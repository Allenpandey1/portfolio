# 🔄 GitHub Actions Workflows Guide

## Overview

This repository includes two optional GitHub Actions workflows for automated deployment:

1. **Render Deployment** (`.github/workflows/deploy-render.yml`)
2. **Azure Deployment** (`.github/workflows/deploy-azure.yml`)

## Current Issue Fix

✅ **Fixed**: The Azure workflow was missing the authentication step and was still configured for .NET.  
✅ **Updated**: Now properly configured for Node.js deployment.

## Disable Azure Workflow (If Using Render Only)

Since you're using **Render** for hosting, you can disable the Azure workflow to prevent errors:

### Option 1: Delete the File (Recommended)
```bash
rm .github/workflows/deploy-azure.yml
git add .github/workflows/deploy-azure.yml
git commit -m "Remove Azure workflow - using Render"
git push
```

### Option 2: Rename to Disable
```bash
mv .github/workflows/deploy-azure.yml .github/workflows/deploy-azure.yml.disabled
git add .github/workflows/
git commit -m "Disable Azure workflow"
git push
```

### Option 3: Keep but Update Secrets
If you want to keep the Azure workflow for future use, you need to:

1. **Get Azure Publish Profile**:
   - Go to [Azure Portal](https://portal.azure.com)
   - Navigate to your App Service
   - Click "Get publish profile"
   - Download the `.PublishSettings` file

2. **Add GitHub Secret**:
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `AZURE_WEBAPP_PUBLISH_PROFILE`
   - Value: Copy the entire content of the `.PublishSettings` file
   - Click "Add secret"

3. **Update Workflow**:
   - Edit `.github/workflows/deploy-azure.yml`
   - Update `AZURE_WEBAPP_NAME` with your actual app name

## Render Workflow

The Render workflow is **optional** because:
- Render auto-deploys on git push if connected to GitHub
- The workflow can trigger manual deployments

If you want to use the Render workflow, add these secrets:

1. **RENDER_SERVICE_ID**:
   - Go to Render Dashboard
   - Select your service
   - Copy the Service ID from the URL or settings

2. **RENDER_API_KEY**:
   - Go to Render Dashboard
   - Account Settings → API Keys
   - Generate a new API key
   - Copy it

Then add them in GitHub:
- Repository → Settings → Secrets and variables → Actions
- Add both secrets

## Current Recommendation

Since you're using **Render**, I recommend:

1. **Disable Azure workflow** (Option 1 or 2 above)
2. **Keep Render workflow** (optional, since auto-deploy works)
3. **Commit and push** the changes

This will stop the deployment errors you're seeing.
