# 📸 Complete Media Guide for Al Wakil Website

## 🖼️ **IMAGES REQUIRED** (9 images total)

### **1. Hero Section - Small Profile Images**
**Location:** Hero section, stacked circular images
**Files needed:**
- `images/interior-1.jpg`
- `images/interior-2.jpg` 
- `images/interior-3.jpg`

**Dimensions:** 60x60 pixels (minimum) - 200x200 pixels (recommended)
**Format:** JPG
**Content:** Interior design work samples, room photos
**Note:** Will be displayed as small circular images, so crop to square format

---

### **2. Hero Section - Floating Image**
**Location:** Right side of hero section (desktop only)
**File needed:** `images/hero-floating.jpg`

**Dimensions:** 300x400 pixels (minimum) - 600x800 pixels (recommended)
**Format:** JPG
**Content:** Beautiful interior design photo, room transformation
**Note:** Portrait orientation, will be rotated 15 degrees

---

### **3. Video Section - Poster/Thumbnail**
**Location:** Video section background (shows before video loads)
**File needed:** `images/video-poster.jpg`

**Dimensions:** 1920x1080 pixels (Full HD)
**Format:** JPG
**Content:** Interior design showcase, should match video content
**Note:** This appears as video thumbnail while loading

---

### **4. Services Preview Section**
**Location:** "What We Offer" section
**File needed:** `images/services-preview.jpg`

**Dimensions:** 800x600 pixels (minimum) - 1200x900 pixels (recommended)
**Format:** JPG
**Content:** Interior design showcase, multiple rooms or before/after
**Note:** Main showcase image for services

---

### **5. VR Announcement Section**
**Location:** "Home Scape VR" section
**File needed:** `images/vr-thumbnail.jpg`

**Dimensions:** 600x400 pixels (minimum) - 900x600 pixels (recommended)
**Format:** JPG
**Content:** VR headset, 3D room visualization, or modern tech setup
**Note:** Should represent VR/technology theme

---

### **6. Service Cards**
**Location:** Services section cards
**Files needed:**
- `images/renovation-cover.jpg`
- `images/styling-cover.jpg`

**Dimensions:** 400x300 pixels (minimum) - 800x600 pixels (recommended)
**Format:** JPG
**Content:** 
- renovation-cover.jpg: Construction, renovation work in progress
- styling-cover.jpg: Finished styled interior, decorative elements
**Note:** Landscape orientation, will have text overlay

---

## 🎥 **VIDEO REQUIRED** (1 video)

### **Main Showcase Video**
**Location:** Video section (full-width background)
**File needed:** `videos/interior-showcase.mp4`

**Specifications:**
- **Duration:** 30-60 seconds
- **Resolution:** 1920x1080 (Full HD) minimum
- **Format:** MP4 (H.264 codec)
- **File Size:** Under 50MB (for fast loading)
- **Content:** Interior design portfolio, room transformations, company showcase
- **Audio:** Optional (video will be muted by default)

---

## 📍 **WHERE TO FIND THESE IN THE CODE:**

### **In `index.html`:**
```html
<!-- Hero section images -->
<img src="images/interior-1.jpg" alt="Interior Work by Alwakil" class="stack-image">
<img src="images/interior-2.jpg" alt="Interior Work by Alwakil" class="stack-image">
<img src="images/interior-3.jpg" alt="Interior Work by Alwakil" class="stack-image">

<!-- Hero floating image -->
<img src="images/hero-floating.jpg" alt="Interior Work Hero Image">

<!-- Video with poster -->
<video autoplay muted loop playsinline poster="images/video-poster.jpg">
    <source src="videos/interior-showcase.mp4" type="video/mp4">
</video>

<!-- Services preview -->
<img src="images/services-preview.jpg" alt="What we offer thumbnail">

<!-- VR section -->
<img src="images/vr-thumbnail.jpg" alt="Home Scape VR Thumbnail">

<!-- Service cards -->
<img src="images/renovation-cover.jpg" alt="Renovation & Remodeling Cover">
<img src="images/styling-cover.jpg" alt="Interior Styling Cover">
```

---

## 🎨 **IMAGE STYLE RECOMMENDATIONS:**

### **Color Scheme:**
- Dark/moody interiors work well with the black background
- High contrast images
- Professional photography

### **Content Ideas:**
1. **interior-1,2,3.jpg:** Living rooms, bedrooms, kitchens
2. **hero-floating.jpg:** Luxury living room or bedroom
3. **video-poster.jpg:** Wide shot of beautiful interior
4. **services-preview.jpg:** Before/after comparison or multiple rooms
5. **vr-thumbnail.jpg:** Person using VR headset or 3D room model
6. **renovation-cover.jpg:** Construction/renovation in progress
7. **styling-cover.jpg:** Perfectly styled room with decorations

---

## 📱 **RESPONSIVE BEHAVIOR:**

- **Mobile:** Some images may be hidden or resized
- **Tablet:** Images scale proportionally
- **Desktop:** Full size display

---

## ⚡ **OPTIMIZATION TIPS:**

1. **Compress images** before uploading (use tools like TinyPNG)
2. **Use JPG** for photos, PNG for graphics with transparency
3. **Keep file sizes reasonable** (under 2MB per image)
4. **Use descriptive filenames** (already provided)

---

## 🔍 **HOW TO TEST:**

1. Add images to `images/` folder
2. Add video to `videos/` folder  
3. Open `index.html` in browser
4. Check each section to see if images load correctly
5. Test on mobile/tablet for responsive behavior

---

## 📋 **QUICK CHECKLIST:**

- [ ] interior-1.jpg (60x60+, square crop)
- [ ] interior-2.jpg (60x60+, square crop)
- [ ] interior-3.jpg (60x60+, square crop)
- [ ] hero-floating.jpg (300x400+, portrait)
- [ ] video-poster.jpg (1920x1080, landscape)
- [ ] services-preview.jpg (800x600+, landscape)
- [ ] vr-thumbnail.jpg (600x400+, landscape)
- [ ] renovation-cover.jpg (400x300+, landscape)
- [ ] styling-cover.jpg (400x300+, landscape)
- [ ] interior-showcase.mp4 (1920x1080, under 50MB)

**Total:** 9 images + 1 video = 10 media files needed