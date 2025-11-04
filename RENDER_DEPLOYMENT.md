# Render Deployment Guide for Node.js/Express

## ✅ Environment: Node.js

**Your application uses Node.js**, so make sure the Environment is set to **Node** (not .NET, not Python).

### How to Fix:

1. **Go to your Render service** → **Settings** tab
2. Scroll down to **"Environment"** section
3. **Change from "Node" to ".NET"**
4. Scroll down and click **"Save Changes"**
5. Render will automatically trigger a new deployment

**Important**: Render might auto-detect Node.js if it sees certain files. You need to manually override this.

---

## 🔧 Render Configuration Settings

When creating your Web Service on Render, use these exact settings:

### ✅ CRITICAL: Environment Selection

**Environment**: Select `.NET` (NOT Node.js, NOT Python, NOT Static Site)

**If you already created the service with wrong environment:**
- Go to Settings → Change Environment to `.NET` → Save

### Build Command
```
npm install
```

This command:
- Installs all Node.js dependencies from package.json
- Prepares the application for deployment

### Start Command
```
npm start
```

This command:
- Starts the Node.js Express server
- Uses the PORT environment variable that Render provides

---

## 📋 Complete Render Setup Steps

### Step 1: Create New Web Service

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository (or use public Git repo)

### Step 2: Configure Build Settings

**Environment**: Select `Node` ⚠️ **THIS IS CRITICAL**

**Build Command**:
```bash
npm install
```

**Start Command**:
```bash
npm start
```

**Instance Type**: 
- Free tier: Choose the free option
- Paid tier: Choose Starter ($7/month) for better performance

### Step 3: Configure Environment Variables (Optional)

If needed, add these environment variables:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |

**Note**: Render automatically sets the PORT environment variable, and Node.js will use it automatically. Your server.js already handles this with `process.env.PORT || 3000`.

### Step 4: Deploy

1. Click **"Create Web Service"**
2. Render will:
   - Clone your repository
   - Run the build command
   - Start your application
   - Provide a URL (e.g., `https://your-app.onrender.com`)

### Step 5: Add Custom Domain

1. Go to your service → **Settings** → **Custom Domains**
2. Click **"Add Custom Domain"**
3. Enter: `allenpandey.com`
4. Render will show DNS configuration instructions
5. Add DNS records at your domain registrar (see `DNS_SETUP.md`)

---

## 🔍 Troubleshooting

### Issue: Build fails with "command not found: npm"

**Error**: `bash: line 1: npm: command not found`

**Root Cause**: Render is not using the Node.js environment.

**Solution**:
1. Go to your Render service → **Settings** tab
2. Scroll to **"Environment"** dropdown
3. **Make sure it says "Node"** (not .NET, not Python)
4. Click **"Save Changes"**
5. Render will redeploy automatically

### Issue: Application doesn't start

**Check**:
1. Build command completed successfully (look for "added X packages")
2. Start command is correct: `npm start`
3. server.js exists in the root directory

**Verify in logs**:
- Build logs should show: `added X packages` and `npm install` succeeded
- Start logs should show: `Server is running on port XXXX`

### Issue: Port binding error

**Solution**: Node.js automatically uses the PORT environment variable that Render provides. Your `server.js` already handles this with `process.env.PORT || 3000`. No manual configuration needed.

### Issue: Static files (CSS/JS) not loading

**Solution**: 
- Ensure `wwwroot` folder is included in the project (it is)
- Check that `UseStaticFiles()` is called in `Program.cs` (it already is)
- Verify files exist in the published output

---

## 📝 Alternative Start Commands (if needed)

If `dotnet ./publish/Profile.dll` doesn't work, try these alternatives:

**Option 1** (if Render's working directory is the publish folder):
```bash
dotnet Profile.dll
```

**Option 2** (explicit path change):
```bash
cd ./publish && dotnet Profile.dll
```

**Most common working command** (use this first):
```bash
dotnet ./publish/Profile.dll
```

---

## ✅ Quick Checklist

- [ ] **Environment set to `Node`** (CRITICAL - check Settings tab)
- [ ] Build Command: `npm install`
- [ ] Start Command: `npm start`
- [ ] Instance type selected (free or paid)
- [ ] Environment variables added (optional: `NODE_ENV=production`)
- [ ] Service created and deploying
- [ ] Build logs show "Build succeeded"
- [ ] Start logs show "Now listening on"
- [ ] Application accessible at Render URL
- [ ] Custom domain `allenpandey.com` added
- [ ] DNS records configured
- [ ] SSL certificate active (automatic on Render)

---

## 🚀 After Deployment

Your site will be available at:
- Render URL: `https://your-app-name.onrender.com`
- Custom domain: `https://allenpandey.com` (after DNS propagation)

Every time you push to your GitHub repository, Render will automatically:
1. Pull the latest code
2. Run the build command
3. Restart the application with the new version

---

## 🎯 Summary: Fix Your Current Error

**Your error**: `==> Using Node.js version X.X.X` and `bash: line 1: npm: command not found`

**Fix**:
1. Go to your Render dashboard
2. Click on your service
3. Go to **Settings** tab
4. Find **"Environment"** dropdown (should say "Node")
5. If it doesn't say "Node", **change it to "Node"**
6. Click **"Save Changes"**
7. Wait for automatic redeploy

This will fix the issue immediately!

**Note**: For this Node.js application, the Environment MUST be set to "Node".

---

**Need help?** Check the build logs in Render dashboard if something goes wrong!
