# Domain Configuration Guide for allenpandey.com

## Issue: Domain Showing Old Page

If allenpandey.com is showing an old page, here's how to fix it:

## Step 1: Verify Render Service

1. **Go to Render Dashboard**: https://dashboard.render.com
2. **Check your service**:
   - Is it showing "Live" (green)?
   - What's the Render URL? (e.g., `your-app.onrender.com`)
   - Check the "Events" tab - is the latest deployment successful?

## Step 2: Check Domain Configuration in Render

1. In your Render service dashboard:
   - Go to **Settings** tab
   - Scroll to **Custom Domains** section
2. **Verify domain is added**:
   - Should see `allenpandey.com` listed
   - Status should be "Active" or "Provisioned"
3. **If domain is NOT added**:
   - Click "Add Custom Domain"
   - Enter: `allenpandey.com`
   - Also add: `www.allenpandey.com` (optional but recommended)
   - Render will provide DNS records to configure

## Step 3: Check DNS Records

Your domain registrar (where you bought allenpandey.com) needs these DNS records:

### Option A: Using CNAME (Recommended)
```
Type: CNAME
Name: @ (or leave blank, or use "www")
Value: your-app-name.onrender.com
TTL: 3600 (or default)
```

### Option B: Using A Record (If CNAME not supported for root domain)
```
Type: A
Name: @ (or leave blank)
Value: [Render's IP address - check Render dashboard for this]
TTL: 3600
```

### For www subdomain:
```
Type: CNAME
Name: www
Value: your-app-name.onrender.com
TTL: 3600
```

## Step 4: Verify DNS Propagation

1. **Check DNS propagation**:
   - Visit: https://dnschecker.org
   - Enter: `allenpandey.com`
   - Check if it's pointing to Render's servers

2. **Check current DNS**:
   ```bash
   # In terminal
   nslookup allenpandey.com
   # or
   dig allenpandey.com
   ```

## Step 5: Clear Cache

1. **Browser cache**:
   - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
   - Or clear browser cache completely

2. **DNS cache** (if needed):
   ```bash
   # Mac
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   
   # Windows
   ipconfig /flushdns
   ```

## Step 6: Common Issues

### Issue: Domain points to old hosting
**Solution**: Update DNS records at your domain registrar to point to Render

### Issue: DNS not propagated
**Solution**: Wait 24-48 hours for DNS propagation (usually faster, but can take time)

### Issue: Multiple services in Render
**Solution**: Make sure `allenpandey.com` is connected to the CORRECT service (the one with your latest code)

### Issue: SSL Certificate not ready
**Solution**: Render automatically provisions SSL. Wait a few minutes after adding domain.

## Step 7: Verify Everything

1. ✅ Service is "Live" in Render
2. ✅ Domain is added in Render Settings → Custom Domains
3. ✅ DNS records are correct at domain registrar
4. ✅ Latest code is deployed (check Events tab)
5. ✅ Test Render URL directly: `your-app.onrender.com` (should show new site)

## Quick Checklist

- [ ] Render service is Live
- [ ] Domain added in Render dashboard
- [ ] DNS records updated at domain registrar
- [ ] Waited for DNS propagation (can take up to 48 hours)
- [ ] Cleared browser cache
- [ ] Tested Render URL directly (bypasses domain)

## Need Help?

1. **Check Render Logs**: Dashboard → Your Service → Logs
2. **Check DNS**: Use dnschecker.org to see where domain points
3. **Contact Domain Registrar**: If DNS records aren't updating
4. **Render Support**: If domain shows as "Provisioned" but not working

