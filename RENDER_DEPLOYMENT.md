# Render Deployment Guide

## Quick Setup Steps

1. **Go to Render Dashboard**: https://dashboard.render.com
2. **Create New Web Service** (or edit existing one)
3. **Connect your GitHub repository**
4. **Configure the service with these settings:**

### Build & Deploy Settings:

- **Environment**: `Node`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start` (or use `node .next/standalone/server.js` if using standalone mode)
- **Node Version**: `18` or higher (specified in package.json)

### Environment Variables:

- `NODE_ENV`: `production` (optional, Render sets this automatically)
- `PORT`: Render automatically sets this, but you can use `10000` if needed

### Advanced Settings:

- **Health Check Path**: `/`
- **Auto-Deploy**: `Yes` (deploys on every push to main branch)

## Troubleshooting: Site Not Live

### Step 1: Check Build Status
1. Go to Render Dashboard → Your Service
2. Click on "Events" or "Logs" tab
3. Check if build completed successfully
4. Look for any error messages (red text)

### Step 2: Check Service Status
1. In Render Dashboard, check if service shows:
   - ✅ **Live** (green) - Service is running
   - ⚠️ **Building** - Still deploying
   - ❌ **Failed** - Build/start failed
   - ⏸️ **Suspended** - Service is paused

### Step 3: Common Issues & Solutions

#### Issue 1: Build Fails
**Symptoms**: Red error messages in build logs
**Solutions**:
- Make sure all dependencies are in `package.json`
- Commit `package-lock.json` to repository
- Check for TypeScript errors: run `npm run build` locally first
- Ensure Node.js version is 18+ (check `package.json` engines)

#### Issue 2: Service Won't Start
**Symptoms**: Build succeeds but service shows "Failed" or won't start
**Solutions**:
- Try changing Start Command to: `npm start`
- If using standalone mode, try: `node .next/standalone/server.js`
- Check Render logs for specific error messages
- Verify `next.config.js` is correct

#### Issue 3: Service Shows "Live" But Site Doesn't Load
**Symptoms**: Service is green but URL shows error
**Solutions**:
- Check the service URL in Render dashboard
- Try accessing the URL directly
- Check browser console for errors
- Verify custom domain is properly configured (if using one)

#### Issue 4: 404 or Blank Page
**Solutions**:
- Clear browser cache
- Check that all files are committed to GitHub
- Verify `public` folder is in repository
- Check Render logs for routing errors

### Step 4: Manual Deployment Check

Run these commands locally to verify everything works:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start the server (test locally)
npm start
```

If these work locally but not on Render, check the Render logs for differences.

## Alternative: Use Standard Next.js Mode

If standalone mode causes issues, you can switch to standard mode:

1. Update `next.config.js`:
```js
const nextConfig = {
  reactStrictMode: true,
  // Remove: output: 'standalone',
};
```

2. Use Start Command: `npm start`

## Current Configuration

- ✅ Next.js 14 with App Router
- ✅ Standalone output mode (can be changed if needed)
- ✅ Node.js 18+ required
- ✅ All dependencies properly listed
- ✅ TypeScript configured

## Quick Fix Checklist

- [ ] Service is not suspended in Render dashboard
- [ ] Build completed successfully (check logs)
- [ ] Start command is correct (`npm start`)
- [ ] All files committed to GitHub
- [ ] Node version is 18+ (check package.json)
- [ ] No TypeScript/build errors locally
- [ ] Service URL is correct

## Need More Help?

1. **Check Render Logs**: Dashboard → Your Service → Logs tab
2. **Share Error Messages**: Copy any red error text from logs
3. **Verify Local Build**: Run `npm run build` locally and fix any errors first
4. **Check Service Status**: Make sure service is not paused/suspended

## Render Dashboard Links

- **Dashboard**: https://dashboard.render.com
- **Documentation**: https://render.com/docs
- **Next.js Guide**: https://render.com/docs/deploy-nextjs

