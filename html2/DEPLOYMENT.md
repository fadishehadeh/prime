# Deployment Guide - Dukhan Bank Prime HTML Version

This guide covers deploying the standalone HTML version of the Dukhan Bank Prime website.

## 📦 What's Included

The `html2` folder is now **completely self-contained** with all necessary files:

```
html2/
├── index.html              # Main HTML file
├── styles.css              # All CSS styling
├── script.js               # JavaScript functionality
├── assets/
│   ├── images/            # All images (26 files)
│   │   ├── hero-doha.jpg
│   │   ├── prime_logo.png
│   │   ├── whitelogo.png
│   │   ├── consultation.jpg
│   │   ├── support.jpg
│   │   ├── visa-card.jpg
│   │   ├── valet-2.jpg
│   │   ├── gym-2.jpg
│   │   ├── cinema-2.jpg
│   │   ├── club-2.jpg
│   │   ├── parking-2.jpg
│   │   ├── dining-2.jpg
│   │   ├── wealth.jpg
│   │   ├── privileges.jpg
│   │   ├── eligibility.jpg
│   │   └── ... (more images)
│   └── fonts/             # All fonts (4 files)
│       ├── DiodrumArabic-Regular.otf
│       ├── DiodrumArabic-Medium.otf
│       ├── Indian Type Foundry - Diodrum Arabic Semibold.otf
│       └── DiodrumArabic-Bold.otf
├── README.md              # Documentation
├── QUICKSTART.md          # Quick start guide
├── COMPARISON.md          # React vs HTML comparison
└── DEPLOYMENT.md          # This file
```

## ✅ Pre-Deployment Checklist

Before deploying, verify:

- [ ] All images load correctly (open index.html locally)
- [ ] Fonts display properly
- [ ] Navbar scroll effect works
- [ ] All navigation links work
- [ ] Carousel auto-advances
- [ ] Carousel buttons work
- [ ] All hover effects work
- [ ] Responsive on mobile, tablet, desktop
- [ ] No console errors (F12 in browser)

## 🚀 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

**Via Drag & Drop:**
1. Go to [netlify.com](https://netlify.com)
2. Sign up or log in
3. Drag the entire `html2` folder onto the Netlify dashboard
4. Wait for deployment (usually < 1 minute)
5. Get your live URL: `https://your-site-name.netlify.app`

**Via Git:**
```bash
# Initialize git in html2 folder
cd html2
git init
git add .
git commit -m "Initial commit"

# Push to GitHub
git remote add origin https://github.com/yourusername/prime-banking.git
git push -u origin main

# Connect to Netlify
# 1. Go to Netlify dashboard
# 2. Click "New site from Git"
# 3. Select your repository
# 4. Deploy!
```

**Custom Domain:**
- In Netlify: Domain settings → Add custom domain
- Update DNS records as instructed
- Free SSL certificate included

### Option 2: Vercel

**Via CLI:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd html2
vercel

# Follow prompts
# Get live URL instantly
```

**Via Dashboard:**
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import from Git or upload folder
4. Deploy

### Option 3: GitHub Pages

**Setup:**
```bash
# Create a new repository on GitHub
# Push html2 contents to the repository

cd html2
git init
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M main
git remote add origin https://github.com/yourusername/prime-banking.git
git push -u origin main

# Enable GitHub Pages
# Go to repository Settings → Pages
# Source: Deploy from branch
# Branch: main / (root)
# Save
```

**Access:** `https://yourusername.github.io/prime-banking/`

### Option 4: AWS S3 + CloudFront

**Setup S3 Bucket:**
```bash
# Install AWS CLI
# Configure credentials: aws configure

# Create bucket
aws s3 mb s3://prime-banking-website

# Upload files
cd html2
aws s3 sync . s3://prime-banking-website --acl public-read

# Enable static website hosting
aws s3 website s3://prime-banking-website --index-document index.html
```

**Add CloudFront (CDN):**
1. Go to CloudFront console
2. Create distribution
3. Origin: Your S3 bucket
4. Default root object: `index.html`
5. Wait for deployment (~15 minutes)
6. Get CloudFront URL

**Custom Domain:**
- Add CNAME record pointing to CloudFront URL
- Request SSL certificate in AWS Certificate Manager
- Attach to CloudFront distribution

### Option 5: Traditional Web Hosting (cPanel)

**Via FTP/SFTP:**
1. Connect to your hosting via FTP client (FileZilla, etc.)
2. Navigate to `public_html` or `www` folder
3. Upload all files from `html2` folder
4. Maintain folder structure:
   ```
   public_html/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── assets/
       ├── images/
       └── fonts/
   ```
5. Access: `https://yourdomain.com`

**Via cPanel File Manager:**
1. Log into cPanel
2. Open File Manager
3. Navigate to `public_html`
4. Upload zip of `html2` folder
5. Extract in place
6. Move contents to root if needed

### Option 6: Azure Static Web Apps

**Via Azure CLI:**
```bash
# Install Azure CLI
# Login: az login

# Create resource group
az group create --name prime-banking-rg --location eastus

# Create static web app
az staticwebapp create \
  --name prime-banking \
  --resource-group prime-banking-rg \
  --source html2 \
  --location eastus \
  --branch main

# Get URL from output
```

## 🔧 Performance Optimization

### Before Deployment

**1. Optimize Images:**
```bash
# Install ImageMagick or use online tools
# Compress JPGs to 80-85% quality
# Convert to WebP for better compression

# Example with ImageMagick:
cd html2/assets/images
for img in *.jpg; do
  convert "$img" -quality 85 "optimized-$img"
done
```

**2. Minify CSS:**
```bash
# Install clean-css
npm install -g clean-css-cli

# Minify
cd html2
cleancss -o styles.min.css styles.css

# Update index.html to reference styles.min.css
```

**3. Minify JavaScript:**
```bash
# Install terser
npm install -g terser

# Minify
cd html2
terser script.js -o script.min.js -c -m

# Update index.html to reference script.min.js
```

**4. Enable Gzip Compression:**

For Apache (`.htaccess`):
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>
```

For Nginx (`nginx.conf`):
```nginx
gzip on;
gzip_types text/html text/css application/javascript;
gzip_min_length 1000;
```

## 📊 Analytics Integration

### Google Analytics

Add before `</head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Microsoft Clarity

Add before `</head>` in `index.html`:
```html
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "YOUR_PROJECT_ID");
</script>
```

## 🔒 Security Headers

Add to your hosting configuration:

**Netlify (`netlify.toml`):**
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

**Vercel (`vercel.json`):**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

## 🌐 Custom Domain Setup

### DNS Configuration

Add these records to your domain registrar:

**For Netlify/Vercel:**
```
Type: CNAME
Name: www
Value: your-site.netlify.app (or vercel.app)

Type: A
Name: @
Value: [IP provided by host]
```

**For CloudFront:**
```
Type: CNAME
Name: www
Value: d1234567890.cloudfront.net

Type: A (Alias)
Name: @
Value: CloudFront distribution
```

## 📱 Testing After Deployment

### Checklist
- [ ] Visit live URL
- [ ] Test on mobile device
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Check all images load
- [ ] Verify fonts display correctly
- [ ] Test all interactive features
- [ ] Check page load speed (PageSpeed Insights)
- [ ] Verify SSL certificate (https://)
- [ ] Test all navigation links
- [ ] Check console for errors

### Tools
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)
- [SSL Labs](https://www.ssllabs.com/ssltest/)

## 🔄 Updates & Maintenance

### Making Updates

1. Edit files locally in `html2` folder
2. Test changes locally
3. Deploy updated files:

**Netlify/Vercel (Git):**
```bash
git add .
git commit -m "Update content"
git push
# Auto-deploys
```

**Manual Upload:**
- Re-upload changed files via FTP/dashboard
- Clear CDN cache if applicable

### Backup Strategy

```bash
# Create backup
cd C:/Github/prime-experience
tar -czf html2-backup-$(date +%Y%m%d).tar.gz html2/

# Or zip
zip -r html2-backup-$(date +%Y%m%d).zip html2/
```

## 💰 Cost Estimates

| Platform | Free Tier | Paid Plans |
|----------|-----------|------------|
| **Netlify** | 100GB bandwidth/month | $19/month (Pro) |
| **Vercel** | 100GB bandwidth/month | $20/month (Pro) |
| **GitHub Pages** | Unlimited (public repos) | Free |
| **AWS S3 + CloudFront** | ~$1-5/month | Pay as you go |
| **Traditional Hosting** | N/A | $5-20/month |

## 🎯 Recommended Setup

**For Production:**
1. **Hosting:** Netlify or Vercel (easy, fast, free SSL)
2. **Domain:** Custom domain with SSL
3. **Analytics:** Google Analytics
4. **Monitoring:** UptimeRobot or Pingdom
5. **CDN:** Included with Netlify/Vercel
6. **Backup:** Git repository + periodic exports

## 📞 Support

For deployment issues:
- Check hosting provider documentation
- Review browser console for errors
- Verify all file paths are correct
- Ensure folder structure is maintained

## ✅ Post-Deployment

After successful deployment:
1. ✅ Test all functionality
2. ✅ Set up monitoring
3. ✅ Configure analytics
4. ✅ Add to search engines (Google Search Console)
5. ✅ Create sitemap.xml (optional)
6. ✅ Set up regular backups
7. ✅ Document any custom configurations

---

**Your site is now live! 🎉**

Share your URL and enjoy your high-performance, standalone HTML website!

