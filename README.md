# Al Wakil Interior Design - Local Website

This is a clean, local version of the Al Wakil Interior Design website with all external dependencies removed and Framer connections eliminated.

## Project Structure

```
├── index.html              # Main HTML file
├── html/
│   └── index-main.html     # Alternative HTML structure
├── css/
│   └── styles.css          # All styles (no external CSS)
├── js/
│   └── script.js           # Clean JavaScript (no minified/encoded code)
├── images/                 # Local images folder
├── videos/                 # Local videos folder
├── faviconsvg.svg         # Website favicon
└── README.md              # This file
```

## Features Removed

- ✅ All external links to Framer
- ✅ All external font loading (Google Fonts, etc.)
- ✅ All tracking scripts and analytics
- ✅ All minified/encoded JavaScript
- ✅ All external module preloading
- ✅ All Framer-specific attributes and classes

## Features Added

- ✅ Clean, readable HTML structure
- ✅ Custom CSS with modern styling
- ✅ Vanilla JavaScript with animations
- ✅ Responsive design
- ✅ Mobile-friendly navigation
- ✅ Smooth scrolling
- ✅ Particle animation background
- ✅ Scroll animations
- ✅ Image lazy loading
- ✅ Video controls

## Required Local Assets

To make the website fully functional, you need to add these files to the respective folders:

### Images Folder (`/images/`)
- `interior-1.jpg` - Interior work sample 1
- `interior-2.jpg` - Interior work sample 2  
- `interior-3.jpg` - Interior work sample 3
- `hero-floating.jpg` - Hero section floating image
- `video-poster.jpg` - Video poster/thumbnail
- `services-preview.jpg` - Services section preview image
- `vr-thumbnail.jpg` - VR section thumbnail
- `renovation-cover.jpg` - Renovation service cover
- `styling-cover.jpg` - Interior styling service cover

### Videos Folder (`/videos/`)
- `interior-showcase.mp4` - Main showcase video

### Root Folder
- `faviconsvg.svg` - Website favicon (already referenced)

## How to Run Locally

1. **Download/Place Images**: Add the required images to the `images/` folder
2. **Download/Place Videos**: Add the required video to the `videos/` folder
3. **Open in Browser**: Simply open `index.html` in any modern web browser
4. **Local Server (Optional)**: For best performance, serve via local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Customization

### Colors
Edit the CSS custom properties in `css/styles.css`:
```css
:root {
  --primary-color: #ffffff;
  --secondary-color: #cccccc;
  --background-color: #000000;
}
```

### Content
- Edit text content directly in `index.html`
- Replace images in the `images/` folder
- Update contact information in both HTML and JavaScript

### Animations
- Modify animation parameters in `js/script.js`
- Adjust CSS animations in `css/styles.css`

## Performance Optimizations

- ✅ Lazy loading for images
- ✅ Optimized animations with `requestAnimationFrame`
- ✅ Debounced scroll events
- ✅ Minimal DOM manipulation
- ✅ CSS-based animations where possible

## Mobile Responsiveness

- ✅ Mobile-first design approach
- ✅ Touch-friendly navigation
- ✅ Responsive images and videos
- ✅ Optimized for various screen sizes

## No External Dependencies

This website runs completely offline with no external dependencies:
- No CDN links
- No external fonts
- No tracking scripts
- No third-party libraries
- No Framer connections

## License

This is a clean, local implementation of the Al Wakil Interior Design website for local development and hosting purposes.