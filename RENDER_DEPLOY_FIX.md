# Fix: Render Showing Old Code After GitHub Push

## Problem
You've pushed new code to GitHub, but Render is still showing the old site.

## Solution Steps

### Step 1: Commit & Push All Changes

Make sure ALL your new files are committed and pushed:

```bash
# Add all files
git add .

# Commit with message
git commit -m "Complete portfolio rebuild with new design"

# Push to GitHub
git push origin main
```

### Step 2: Verify Code is on GitHub

1. Go to: https://github.com/Allenpandey1/portfolio
2. Check that your latest files are there:
   - `components/About.tsx`
   - `components/Hero.tsx`
   - `server.js`
   - `next.config.js`
   - All other new components

### Step 3: Force Render to Deploy

**Option A: Manual Deploy (Recommended)**
1. Go to Render Dashboard: https://dashboard.render.com
2. Click on your service
3. Go to **"Events"** or **"Manual Deploy"** tab
4. Click **"Deploy latest commit"** or **"Clear build cache & deploy"**
5. Wait for deployment to complete

**Option B: Trigger via Git Push**
1. Make a small change (add a comment or space)
2. Commit and push:
   ```bash
   git commit --allow-empty -m "Trigger Render deployment"
   git push origin main
   ```

### Step 4: Check Render Settings

1. In Render Dashboard → Your Service → **Settings**
2. Verify:
   - **Branch**: Should be `main` (or `master`)
   - **Root Directory**: Should be empty (or `/` if you have subdirectory)
   - **Auto-Deploy**: Should be `Yes`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

### Step 5: Check Build Logs

1. In Render Dashboard → Your Service → **Logs** tab
2. Look for:
   - ✅ "Build successful"
   - ✅ "Deploy successful"
   - ❌ Any red error messages

### Step 6: Clear Build Cache (If Needed)

If deployment still shows old code:

1. Render Dashboard → Your Service → **Settings**
2. Scroll to bottom
3. Click **"Clear build cache"**
4. Then manually deploy again

## Common Issues

### Issue: Render deploying wrong branch
**Fix**: Check Settings → Branch is set to `main`

### Issue: Build cache showing old files
**Fix**: Clear build cache and redeploy

### Issue: Auto-deploy not working
**Fix**: Manually trigger deployment

### Issue: Code not on GitHub
**Fix**: Make sure you pushed to the correct repository

## Quick Checklist

- [ ] All files committed locally (`git status` shows clean)
- [ ] Code pushed to GitHub (`git push origin main`)
- [ ] Verified files on GitHub.com
- [ ] Render service connected to correct GitHub repo
- [ ] Render branch set to `main`
- [ ] Manually triggered deployment in Render
- [ ] Checked build logs for errors
- [ ] Cleared build cache if needed

## Verify Deployment

After deployment completes:
1. Check Render URL: `your-app.onrender.com` (should show new site)
2. Check custom domain: `allenpandey.com` (may take a few minutes)
3. Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

