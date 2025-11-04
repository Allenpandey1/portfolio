# DNS Configuration Guide for allenpandey.com

This guide will help you configure your domain `allenpandey.com` to point to your portfolio website.

## 🌐 Overview

To make your portfolio accessible at `allenpandey.com`, you need to:
1. Choose a hosting provider (Azure, Render, etc.)
2. Deploy your application
3. Configure DNS records to point your domain to the hosting provider

---

## 📋 Step 1: Choose Your Hosting Provider

### Option A: Azure App Service (Recommended)
- **Pros**: Excellent integration with .NET, easy SSL, reliable
- **Cost**: Free tier available, paid plans start at ~$13/month
- **Setup**: Connect domain directly in Azure Portal

### Option B: Render
- **Pros**: Easy setup, free tier available, good for small projects
- **Cost**: Free tier available, paid plans start at $7/month
- **Setup**: Add custom domain in Render dashboard

### Option C: Other Providers
- **AWS Elastic Beanstalk**
- **Google Cloud Platform**
- **DigitalOcean**
- **Heroku**

---

## 🔧 Step 2: Configure DNS Records

After deploying your application, you'll need to configure DNS records with your domain registrar (e.g., GoDaddy, Namecheap, Google Domains, Cloudflare).

### DNS Record Types Explained

#### A Record (IPv4 Address)
Points your domain to an IP address.
```
Type: A
Name: @ (or leave blank for root domain)
Value: [Your hosting provider's IP address]
TTL: 3600 (or default)
```

#### AAAA Record (IPv6 Address)
Points your domain to an IPv6 address (if your host supports it).
```
Type: AAAA
Name: @
Value: [IPv6 address]
TTL: 3600
```

#### CNAME Record
Points your domain to another domain name (commonly used for hosting services).
```
Type: CNAME
Name: @ (or www)
Value: [Your hosting provider's domain, e.g., yourapp.azurewebsites.net]
TTL: 3600
```

#### CAA Record (Optional)
For SSL certificate authorization.
```
Type: CAA
Name: @
Value: 0 issue "letsencrypt.org"
```

---

## 🚀 Step 3: DNS Configuration by Hosting Provider

### Azure App Service

1. **In Azure Portal**:
   - Go to your App Service → Custom domains
   - Click "Add custom domain"
   - Enter `allenpandey.com`
   - Azure will provide you with DNS instructions

2. **DNS Records to Add** (at your domain registrar):
   ```
   Type: A
   Name: @
   Value: [IP address provided by Azure]
   
   Type: CNAME
   Name: www
   Value: [your-app-name].azurewebsites.net
   
   Type: TXT
   Name: asuid
   Value: [Verification ID from Azure]
   ```

3. **Enable SSL**:
   - In Azure Portal → TLS/SSL settings
   - Enable "HTTPS Only"
   - Azure provides free SSL certificates via Let's Encrypt

### Render

1. **In Render Dashboard**:
   - Go to your service → Settings → Custom Domains
   - Click "Add Custom Domain"
   - Enter `allenpandey.com`

2. **DNS Records to Add**:
   ```
   Type: CNAME
   Name: @
   Value: [your-app-name].onrender.com
   
   Type: CNAME
   Name: www
   Value: [your-app-name].onrender.com
   ```
   
   **Note**: If your registrar doesn't support CNAME for root domain (@), use:
   ```
   Type: A
   Name: @
   Value: [Render's IP address - check Render docs]
   
   Type: CNAME
   Name: www
   Value: [your-app-name].onrender.com
   ```

3. **SSL Certificate**:
   - Render automatically provisions SSL certificates via Let's Encrypt
   - Enable "Force HTTPS" in Render settings

### AWS Elastic Beanstalk

1. **Get Load Balancer DNS Name**:
   - From AWS Console → Elastic Beanstalk → Your Environment

2. **DNS Records to Add**:
   ```
   Type: CNAME
   Name: @
   Value: [your-load-balancer-name].us-east-1.elb.amazonaws.com
   
   Type: CNAME
   Name: www
   Value: [your-load-balancer-name].us-east-1.elb.amazonaws.com
   ```

3. **SSL Certificate**:
   - Use AWS Certificate Manager (ACM) to get free SSL certificate
   - Configure in Load Balancer settings

---

## 📝 Step 4: Common DNS Providers Configuration

### GoDaddy

1. Log in to GoDaddy → My Products → DNS
2. Click "Add" to add new records
3. Add the DNS records provided by your hosting provider
4. Save changes
5. Wait 24-48 hours for DNS propagation

### Namecheap

1. Log in to Namecheap → Domain List → Manage → Advanced DNS
2. Click "Add New Record"
3. Add the DNS records
4. Save changes

### Google Domains

1. Go to Google Domains → DNS
2. Scroll to "Custom resource records"
3. Add the DNS records
4. Save

### Cloudflare (Recommended for Better Performance)

1. Add your domain to Cloudflare
2. Update nameservers at your registrar to Cloudflare's nameservers
3. In Cloudflare DNS, add:
   ```
   Type: CNAME
   Name: @
   Target: [your-hosting-domain]
   Proxy status: Proxied (orange cloud)
   
   Type: CNAME
   Name: www
   Target: [your-hosting-domain]
   Proxy status: Proxied
   ```
4. Enable SSL/TLS: Full (strict)
5. Enable "Always Use HTTPS"

---

## ✅ Step 5: Verify DNS Configuration

After adding DNS records, verify they're working:

### Check DNS Propagation

1. **Using Online Tools**:
   - Visit: https://www.whatsmydns.net
   - Enter `allenpandey.com`
   - Check A and CNAME records

2. **Using Command Line**:
   ```bash
   # Check A record
   dig allenpandey.com A
   
   # Check CNAME record
   dig www.allenpandey.com CNAME
   
   # Windows (PowerShell)
   nslookup allenpandey.com
   ```

3. **Test Website Access**:
   - Wait 24-48 hours for full DNS propagation
   - Visit `http://allenpandey.com` and `https://allenpandey.com`
   - Ensure HTTPS redirects work

### Common Issues

**Issue**: DNS not resolving
- **Solution**: Wait 24-48 hours for propagation. Check TTL settings (lower TTL = faster updates but more DNS queries).

**Issue**: SSL certificate errors
- **Solution**: Ensure "HTTPS Only" is enabled and SSL certificate is provisioned (automatic on Azure/Render).

**Issue**: www subdomain not working
- **Solution**: Add a CNAME record for `www` pointing to your hosting domain.

---

## 🔒 Step 6: Configure HTTPS/SSL

Most hosting providers automatically provision SSL certificates:

### Azure
- SSL is automatic via Let's Encrypt
- Enable "HTTPS Only" in App Service → TLS/SSL settings

### Render
- SSL is automatic
- Enable "Force HTTPS" in service settings

### Manual SSL Setup (if needed)
1. Generate certificate via Let's Encrypt
2. Upload certificate to your hosting provider
3. Configure in hosting settings

---

## 📧 Step 7: Configure Email (Optional)

If you want to use `contact@allenpandey.com`:

### Option 1: Google Workspace / Microsoft 365
- Professional email hosting
- ~$6/month per user
- Configure MX records in DNS

### Option 2: Zoho Mail
- Free tier available (limited)
- Paid plans start at $1/month
- Configure MX records

### Option 3: Forwarding Service
- Use your domain registrar's email forwarding
- Forward `contact@allenpandey.com` to your personal email

### Email MX Records Example
```
Type: MX
Name: @
Value: aspmx.l.google.com (for Google Workspace)
Priority: 10
TTL: 3600
```

---

## 🎯 Quick Checklist

- [ ] Deploy application to hosting provider
- [ ] Get DNS configuration instructions from hosting provider
- [ ] Add A or CNAME records at domain registrar
- [ ] Add www subdomain CNAME record
- [ ] Enable SSL/HTTPS in hosting settings
- [ ] Verify DNS propagation (24-48 hours)
- [ ] Test website at `http://allenpandey.com`
- [ ] Test website at `https://allenpandey.com`
- [ ] Configure email (optional)
- [ ] Set up redirect from www to non-www (or vice versa)

---

## 📞 Need Help?

- **DNS Issues**: Contact your domain registrar's support
- **Hosting Issues**: Check hosting provider's documentation
- **SSL Issues**: Most providers auto-provision, check their SSL settings

---

## 🔗 Useful Resources

- [DNS Propagation Checker](https://www.whatsmydns.net)
- [SSL Labs SSL Test](https://www.ssllabs.com/ssltest/)
- [Azure Custom Domain Docs](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-tutorial-custom-domain)
- [Render Custom Domain Docs](https://render.com/docs/custom-domains)

---

**Remember**: DNS changes can take 24-48 hours to fully propagate worldwide. Be patient! ⏰
