# 🖼️ Image Setup Guide

## Adding Your Hero Image

Your portfolio is designed to use a hero image on the homepage and about page. Follow these steps to add your image:

### Step 1: Prepare Your Image

1. Make sure your image is saved (the one you provided showing you on a bridge)
2. Recommended dimensions: **1200x800px** or larger
3. File format: **JPG** or **PNG**
4. Optimize the image size (keep it under 500KB for faster loading)

### Step 2: Add the Image

1. **Copy your image file** to the `public/images/` folder
2. **Rename it to:** `profile-hero.jpg`

   ```
   public/
   └── images/
       └── profile-hero.jpg  ← Your image here
   ```

### Step 3: Verify

1. The image will appear in **4 strategic locations**:
   - **Navigation Bar** - Small circular profile picture next to your name (top left)
   - **Homepage Hero Section** - Large featured image (right side) with 3D effects
   - **About Page Header** - Circular profile picture above the "About Me" title
   - **About Page Biography** - Large image in the biography card section

### Alternative: Use a Different Filename

If you want to use a different filename, update these files:

1. **Views/layout.ejs** (navbar - around line 28):
   ```html
   <img src="/images/YOUR-IMAGE-NAME.jpg" alt="Allen Pandey" class="navbar-profile-img">
   ```

2. **Views/Home/index.ejs** (hero section - around line 42):
   ```html
   <img src="/images/YOUR-IMAGE-NAME.jpg" alt="Allen Pandey">
   ```

3. **Views/About/index.ejs** (header - around line 7):
   ```html
   <img src="/images/YOUR-IMAGE-NAME.jpg" alt="Allen Pandey" class="about-header-img">
   ```

4. **Views/About/index.ejs** (biography - around line 25):
   ```html
   <img src="/images/YOUR-IMAGE-NAME.jpg" alt="Allen Pandey">
   ```

### Image Optimization Tips

- Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) to compress images
- For best results, crop/resize to focus on you (the subject)
- Consider adding a slight blur or gradient overlay if needed (handled by CSS)

---

## Current Status

✅ Image path is configured: `/images/profile-hero.jpg`  
📁 Folder created: `public/images/`  
⚠️ **Action needed:** Add your image file to `public/images/profile-hero.jpg`

Once you add the image, it will automatically appear with:

**Navigation Bar:**
- Small circular avatar (40px)
- Glowing border effect
- Smooth hover animation
- Scales down when navbar scrolls

**Homepage Hero:**
- Large featured image with 3D transform effects
- Gradient overlays
- Parallax effect on scroll
- Smooth hover animations

**About Page Header:**
- Circular profile picture (120px)
- Glowing border with gradient colors
- Hover scale effect

**About Page Biography:**
- Large image with rounded corners
- Glassmorphism card styling
- Responsive design

All images feature:
- ✅ Responsive design (mobile-friendly)
- ✅ Smooth animations and transitions
- ✅ Modern styling with glassmorphism effects
- ✅ Automatic fallback (hides gracefully if image not found)
