# Quick Start Guide - Dukhan Bank Prime HTML Version

Get the HTML version of Dukhan Bank Prime up and running in minutes!

## 🚀 Instant Start (No Setup Required)

### Method 1: Double-Click to Open
1. Navigate to the `html2` folder
2. Double-click `index.html`
3. Your default browser will open the website
4. Done! ✅

**Note:** This works because all assets are referenced from the parent React project directory.

## 🌐 Local Server (Recommended)

For the best experience, especially if you're testing on mobile devices or need to share locally:

### Using Python (Built-in on Mac/Linux)

```bash
# Navigate to the project root
cd C:/Github/prime-experience

# Start server
python -m http.server 8000

# Open in browser
# http://localhost:8000/html2/
```

### Using Node.js

```bash
# Install http-server globally (one-time)
npm install -g http-server

# Navigate to project root
cd C:/Github/prime-experience

# Start server
http-server -p 8000

# Open in browser
# http://localhost:8000/html2/
```

### Using PHP

```bash
# Navigate to project root
cd C:/Github/prime-experience

# Start server
php -S localhost:8000

# Open in browser
# http://localhost:8000/html2/
```

### Using VS Code Live Server Extension

1. Install "Live Server" extension in VS Code
2. Right-click on `html2/index.html`
3. Select "Open with Live Server"
4. Browser opens automatically

## 📱 Testing on Mobile Devices

### Same Network Method

1. Start a local server (see above)
2. Find your computer's IP address:
   - **Windows**: `ipconfig` (look for IPv4 Address)
   - **Mac/Linux**: `ifconfig` or `ip addr`
3. On your mobile device, open browser and go to:
   ```
   http://YOUR_IP_ADDRESS:8000/html2/
   ```
   Example: `http://192.168.1.100:8000/html2/`

### Browser DevTools

1. Open the website in Chrome/Edge/Firefox
2. Press `F12` to open DevTools
3. Click the device toolbar icon (or press `Ctrl+Shift+M`)
4. Select different device sizes to test responsiveness

## 🎨 Quick Customization

### Change Colors

Edit `styles.css` (lines 33-50):

```css
:root {
    --background: hsl(230, 100%, 6%);     /* Main background */
    --foreground: hsl(0, 0%, 100%);       /* Text color */
    --gold: hsl(0, 0%, 100%);             /* Accent color */
    --muted-foreground: hsl(0, 0%, 75%);  /* Secondary text */
    /* ... more colors */
}
```

### Update Contact Information

Edit `index.html` (around line 480):

```html
<p class="discovery-info-text">
    <span class="text-gold">Dedicated Prime Call Center:</span> +974 800 0007
</p>
<p class="discovery-info-text">
    <span class="text-gold">Prime Offices:</span> Tajawal & Al Sadd locations
</p>
```

### Modify Carousel Items

Edit `script.js` (lines 77-104):

```javascript
const carouselData = [
    {
        image: '../src/assets/valet-2.jpg',
        title: 'Valet Parking',
        description: '15 free accesses per month'
    },
    // Add or modify items here
];
```

### Change Section Content

Edit `index.html` directly - all content is in plain HTML!

## 🔧 Troubleshooting

### Images Not Loading

**Problem:** Images show as broken links

**Solution:** 
- Ensure you're in the correct directory structure
- Images are referenced from `../src/assets/`
- Make sure the React project assets exist

### Fonts Not Displaying

**Problem:** Custom fonts not loading

**Solution:**
- Check that font files exist in `../src/fonts/`
- Browser may fall back to system fonts (Inter, sans-serif)

### Animations Not Working

**Problem:** Scroll animations or carousel not functioning

**Solution:**
- Check browser console for JavaScript errors (F12)
- Ensure `script.js` is loading correctly
- Try hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### Carousel Not Auto-Advancing

**Problem:** Carousel stays on first slide

**Solution:**
- Check that all carousel images exist
- Look for JavaScript errors in console
- Verify `carouselData` array in `script.js`

### Navbar Not Changing on Scroll

**Problem:** Navbar stays transparent

**Solution:**
- Scroll down more than 50px
- Check JavaScript console for errors
- Verify `navbar` ID exists in HTML

## 📊 Browser Compatibility

### ✅ Fully Supported
- Chrome 90+
- Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

### ⚠️ Partial Support
- Internet Explorer 11 (not recommended)
  - Some CSS features may not work
  - Intersection Observer requires polyfill

### 🔧 Required Features
- CSS Grid & Flexbox
- CSS Custom Properties
- Intersection Observer API
- ES6 JavaScript

## 🎯 Testing Checklist

Before deploying, test these features:

- [ ] Navbar changes appearance on scroll
- [ ] All navigation links work (smooth scroll)
- [ ] Hero section displays with background image
- [ ] Particles animate in hero section
- [ ] All sections fade in on scroll
- [ ] Carousel advances automatically
- [ ] Carousel prev/next buttons work
- [ ] Carousel dots work
- [ ] Keyboard arrows control carousel
- [ ] Touch swipe works on mobile
- [ ] All images load correctly
- [ ] Hover effects work on cards
- [ ] Buttons have hover states
- [ ] Footer displays current year
- [ ] Responsive on mobile (320px+)
- [ ] Responsive on tablet (768px+)
- [ ] Responsive on desktop (1024px+)

## 📦 Deployment Options

### Static Hosting (Recommended)

Upload the `html2` folder to any static hosting service:

1. **Netlify**
   - Drag and drop the `html2` folder
   - Instant deployment
   - Free SSL certificate

2. **Vercel**
   - Import from Git or upload
   - Automatic deployments
   - Free tier available

3. **GitHub Pages**
   - Push to GitHub repository
   - Enable Pages in settings
   - Free hosting

4. **AWS S3**
   - Upload to S3 bucket
   - Enable static website hosting
   - Configure CloudFront for CDN

5. **Azure Static Web Apps**
   - Deploy from GitHub
   - Free tier available
   - Global CDN

### Traditional Hosting

Upload via FTP/SFTP to any web hosting:
- cPanel hosting
- Shared hosting
- VPS/Dedicated server

### Important: Asset Paths

When deploying, you'll need to either:

**Option A:** Copy assets to `html2` folder
```
html2/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── images/
│   └── fonts/
```

Then update paths in files:
- `index.html`: Change `../src/assets/` to `assets/images/`
- `styles.css`: Change `../src/fonts/` to `assets/fonts/`
- `script.js`: Change `../src/assets/` to `assets/images/`

**Option B:** Deploy entire project
- Keep directory structure intact
- Deploy from project root
- Paths remain as-is

## 🚀 Performance Tips

### Optimize Images
```bash
# Use tools like ImageOptim, TinyPNG, or:
npm install -g imagemin-cli
imagemin assets/images/* --out-dir=assets/images/optimized
```

### Minify CSS
```bash
# Use online tools or:
npm install -g clean-css-cli
cleancss -o styles.min.css styles.css
```

### Minify JavaScript
```bash
# Use online tools or:
npm install -g terser
terser script.js -o script.min.js -c -m
```

### Enable Gzip Compression
Add to `.htaccess` (Apache):
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css text/javascript
</IfModule>
```

## 📞 Support

### Common Questions

**Q: Can I use this commercially?**
A: Check with Dukhan Bank for licensing terms.

**Q: How do I add a new section?**
A: Add HTML in `index.html`, styles in `styles.css`, and any JS in `script.js`.

**Q: Can I integrate with a CMS?**
A: Yes! The HTML structure is CMS-friendly. Use template tags for dynamic content.

**Q: How do I add analytics?**
A: Add Google Analytics or other tracking code before `</head>` in `index.html`.

**Q: Can I add a contact form?**
A: Yes! Add form HTML and use a service like Formspree, Netlify Forms, or custom backend.

## 🎓 Next Steps

1. **Customize Content** - Update text, images, and colors
2. **Test Thoroughly** - Use the testing checklist above
3. **Optimize Assets** - Compress images and minify code
4. **Deploy** - Choose a hosting option and go live
5. **Monitor** - Add analytics and monitor performance

## 📚 Additional Resources

- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JS reference
- [Can I Use](https://caniuse.com/) - Browser compatibility checker
- [PageSpeed Insights](https://pagespeed.web.dev/) - Performance testing
- [WebAIM](https://webaim.org/) - Accessibility guidelines

---

**Ready to go live?** Follow the deployment steps above and your site will be online in minutes! 🎉

