# How to Create Your Resume PDF

## Option 1: Print to PDF from Browser (Easiest)

1. **Visit the resume page**: Go to `https://allenpandey.com/resume` (or `your-site.onrender.com/resume`)
2. **Print the page**:
   - Mac: Press `Cmd + P`
   - Windows: Press `Ctrl + P`
3. **Save as PDF**:
   - In the print dialog, select "Save as PDF" as the destination
   - Click "Save"
   - Save it as `Allen_Pandey_Resume.pdf`
4. **Replace the file**:
   - Replace the file in `public/Allen_Pandey_Resume.pdf` with your new PDF
   - Commit and push to GitHub

## Option 2: Use Online PDF Converter

1. Visit: https://html2pdf.com/ or https://www.ilovepdf.com/html-to-pdf
2. Enter URL: `https://allenpandey.com/resume`
3. Convert to PDF
4. Download and replace `public/Allen_Pandey_Resume.pdf`

## Option 3: Use Google Docs / Microsoft Word

1. Copy the resume content from `public/resume-content.txt`
2. Format it nicely in Google Docs or Word
3. Export as PDF
4. Replace `public/Allen_Pandey_Resume.pdf`

## Option 4: Use Canva / Resume Builder

1. Use a professional resume builder like Canva
2. Create your resume with the content from `resume-content.txt`
3. Export as PDF
4. Replace `public/Allen_Pandey_Resume.pdf`

## Quick Steps to Update:

```bash
# After creating the PDF:
1. Save it as: Allen_Pandey_Resume.pdf
2. Replace: public/Allen_Pandey_Resume.pdf
3. Commit and push:
   git add public/Allen_Pandey_Resume.pdf
   git commit -m "Update resume PDF with content"
   git push origin main
```

## Current Resume Content

All your resume information is in:
- `public/resume-content.txt` (text format)
- `components/Resume.tsx` (component with all data)
- `app/resume/page.tsx` (printable HTML page)

The printable resume page at `/resume` is ready to use for creating your PDF!

