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

1. The image should appear on:
   - **Homepage** - Hero section (right side)
   - **About page** - Biography section

### Alternative: Use a Different Filename

If you want to use a different filename, update these files:

1. **Views/Home/index.ejs** (around line 32):
   ```html
   <img src="/images/YOUR-IMAGE-NAME.jpg" alt="Allen Pandey">
   ```

2. **Views/About/index.ejs** (around line 17):
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
- Modern 3D transform effects on hover
- Gradient overlays
- Responsive design
- Smooth animations
