# Dukhan Bank Prime - HTML/CSS/JavaScript Version

This is a standalone HTML/CSS/JavaScript version of the Dukhan Bank Prime website, converted from the original React-based implementation.

## Overview

This version maintains the exact same visual design, layout, animations, and user experience as the React version, but uses pure HTML, CSS, and vanilla JavaScript instead of React components.

## File Structure

```
html2/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete CSS styling (converted from Tailwind)
├── script.js           # JavaScript for interactivity and animations
└── README.md           # This file
```

## Features

### Sections Included
1. **Hero Section** - Full-screen hero with Doha skyline background
2. **Introduction** - Overview of Prime Banking services
3. **Relationship Management** - Dedicated banking experience details
4. **Support Channels** - 24/7 support and priority service information
5. **Visa Infinite** - Credit card benefits and privileges
6. **Lifestyle Benefits** - Interactive carousel with exclusive advantages
7. **Wealth Services** - Investment and wealth management offerings
8. **Banking Privileges** - Exclusive banking benefits
9. **Eligibility** - Membership requirements
10. **Discovery** - Contact and consultation section
11. **Footer** - Terms and copyright information

### Interactive Features
- **Sticky Navigation Bar** - Changes appearance on scroll
- **Smooth Scrolling** - Seamless navigation between sections
- **Scroll Animations** - Elements fade in as you scroll
- **Interactive Carousel** - Lifestyle benefits with:
  - Previous/Next buttons
  - Dot indicators
  - Keyboard navigation (arrow keys)
  - Touch swipe support (mobile)
  - Auto-advance (5-second intervals)
  - Pause on hover
- **Animated Particles** - Floating particles in hero section
- **Hover Effects** - Interactive cards and buttons throughout

### Responsive Design
- Fully responsive layout that works on:
  - Mobile devices (320px+)
  - Tablets (768px+)
  - Desktops (1024px+)
  - Large screens (1400px+)

## Assets Required

The HTML version references assets from the parent React project:

### Images
- `../src/assets/prime_logo.png` - Prime Banking logo
- `../src/assets/whitelogo.png` - Dukhan Bank logo
- `../src/assets/hero-doha.jpg` - Hero background
- `../src/assets/bg.png` - Background texture
- `../src/assets/consultation.jpg` - Relationship management
- `../src/assets/support.jpg` - Support channels
- `../src/assets/visa-card.jpg` - Visa Infinite card
- `../src/assets/valet-2.jpg` - Valet parking
- `../src/assets/gym-2.jpg` - Gym access
- `../src/assets/cinema-2.jpg` - Cinema offers
- `../src/assets/club-2.jpg` - Club privileges
- `../src/assets/parking-2.jpg` - Reserved parking
- `../src/assets/dining-2.jpg` - Family privileges
- `../src/assets/wealth.jpg` - Wealth services
- `../src/assets/privileges.jpg` - Banking privileges
- `../src/assets/eligibility.jpg` - Eligibility requirements

### Fonts
- `../src/fonts/DiodrumArabic-Regular.otf`
- `../src/fonts/DiodrumArabic-Medium.otf`
- `../src/fonts/Indian Type Foundry - Diodrum Arabic Semibold.otf`
- `../src/fonts/DiodrumArabic-Bold.otf`

## How to Use

### Option 1: Open Directly
Simply open `index.html` in a modern web browser. The file references assets from the parent React project directory.

### Option 2: Local Server (Recommended)
For best results, serve the files through a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000/html2/`

## Browser Compatibility

This version works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

### Features Used
- CSS Grid & Flexbox
- CSS Custom Properties (CSS Variables)
- Intersection Observer API
- ES6+ JavaScript
- CSS Animations & Transitions

## Design System

### Color Palette
- **Primary Background**: `hsl(230, 100%, 6%)` - Deep navy blue
- **Foreground**: `hsl(0, 0%, 100%)` - White
- **Gold Accent**: `hsl(0, 0%, 100%)` - White/Gold
- **Muted Text**: `hsl(0, 0%, 75%)` - Light gray
- **Navy Dark**: `hsl(230, 100%, 4%)` - Darker navy

### Typography
- **Font Family**: Diodrum Arabic, Inter, sans-serif
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Spacing & Layout
- **Container Max Width**: 1400px
- **Section Padding**: 6rem - 8rem (vertical)
- **Border Radius**: 0.75rem - 1.5rem

## JavaScript Functionality

### Core Features
1. **Navbar Scroll Detection** - Adds/removes 'scrolled' class
2. **Smooth Scroll Navigation** - Handles anchor link clicks
3. **Scroll Animations** - Intersection Observer for fade-in effects
4. **Carousel Management** - Full carousel functionality
5. **Particle Animation** - Dynamic particle generation
6. **Year Display** - Auto-updates copyright year

### Performance Optimizations
- Image preloading
- Debounced resize handlers
- Efficient scroll listeners
- CSS-based animations (GPU accelerated)

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --background: hsl(230, 100%, 6%);
    --foreground: hsl(0, 0%, 100%);
    --gold: hsl(0, 0%, 100%);
    /* ... more variables */
}
```

### Modifying Content
Edit the HTML directly in `index.html` or update the carousel data in `script.js`:
```javascript
const carouselData = [
    {
        image: 'path/to/image.jpg',
        title: 'Your Title',
        description: 'Your description'
    },
    // ... more items
];
```

### Adjusting Animations
Modify animation timings in `styles.css`:
```css
.scroll-animate {
    transition: all 1s ease; /* Change duration here */
}
```

## Differences from React Version

### Similarities
- ✅ Identical visual design
- ✅ Same layout and structure
- ✅ All animations preserved
- ✅ Responsive behavior maintained
- ✅ Interactive features replicated

### Technical Differences
- Uses vanilla JavaScript instead of React hooks
- CSS classes instead of Tailwind utilities
- Direct DOM manipulation instead of virtual DOM
- No build process required
- Smaller bundle size (no framework overhead)

## Maintenance

To update content:
1. Edit `index.html` for structural changes
2. Edit `styles.css` for styling changes
3. Edit `script.js` for functionality changes

## Support

For issues or questions about this HTML version, please refer to the original React implementation or contact the development team.

## License

© 2025 Dukhan Bank. All rights reserved.

