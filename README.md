# EGIDIT - Personal Business Card

A minimal, fast, and accessible digital business card website showcasing professional identity and social links.

## Features

- **Fully Responsive** - Mobile-first design with breakpoints at 480px and 768px
- **Accessible** - WCAG 2.1 AA compliant with semantic HTML5, ARIA labels, and keyboard navigation support
- **SEO Optimized** - Open Graph tags, Twitter Cards, JSON-LD structured data, and sitemap.xml
- **Performance Focused** - Zero external dependencies, system fonts only, lightweight CSS and minimal JavaScript
- **Security Headers Ready** - Structured for easy implementation of security policies

## Project Structure

```
.
├── index.html              # Main landing page
├── style.css               # All styling with CSS variables
├── script.js               # Minimal JavaScript for UX enhancements
├── 404.html                # Error page
├── sitemap.xml             # SEO sitemap for search engines
├── robots.txt              # Search engine crawl directives
├── LICENSE                 # MIT License
├── README.md               # This file
└── media/
    ├── pfp.jpg             # Profile photo (140px × 140px recommended)
    ├── email.svg           # Email icon
    ├── home.svg            # Home icon
    ├── instagram.svg       # Instagram icon
    ├── linkedin.svg        # LinkedIn icon
    └── favicon/
        └── favicon.svg
```

## Setup & Deployment

### Local Testing
1. Open `index.html` in your browser
2. Test responsive design using browser DevTools (F12 → Toggle device toolbar)
3. Verify keyboard navigation with Tab key

### Before Deployment
1. **Update domain references** - Replace `https://egidit.com` with your actual domain in:
   - `index.html` (canonical tag, Open Graph, JSON-LD)
   - `sitemap.xml`
   - `robots.txt`

2. **Update profile content** - Edit in `index.html`:
   - Name and title
   - Social links
   - Profile photo in `media/pfp.jpg`

3. **Verify social links** - Ensure all hrefs are correct and use `target="_blank"`

### Deploy to Hosting
Choose one platform:

- **GitHub Pages** (Free)
  1. Push code to GitHub repository
  2. Enable Pages in Settings → Pages
  3. Select main branch as source
  
- **Netlify** (Free tier available)
  1. Connect GitHub repo or drag & drop files
  2. Deploy automatically on push
  
- **Vercel** (Free tier available)
  1. Import GitHub repo
  2. Auto-deploys on updates

- **Traditional Hosting** (Bluehost, Namecheap, etc.)
  1. Upload files via FTP/SFTP
  2. Configure domain DNS settings

### Post-Deployment
1. **Submit to Google Search Console** (https://search.google.com/search-console)
   - Verify domain ownership
   - Upload/submit sitemap.xml
   - Monitor indexing status

2. **Submit to Bing Webmaster Tools** (https://www.bing.com/webmasters)
   - Same verification and sitemap process

3. **Test with Lighthouse** (Chrome DevTools → Lighthouse)
   - Check Performance, Accessibility, Best Practices, SEO scores

## Customization

### Change Colors
Edit CSS variables in `style.css` (`:root` section):
```css
:root {
    --primary-color: #d4d0c8;      /* Accent color */
    --text-primary: #1f2937;       /* Main text */
    --text-secondary: #6b7280;     /* Secondary text */
    --background: #ffffff;         /* Page background */
    --shadow-lg: 0 8px 24px rgba(120, 120, 128, 0.12);
}
```

### Add More Social Links
In `index.html`, add new buttons inside `.social-buttons` section:
```html
<a 
    href="https://github.com/username" 
    target="_blank" 
    rel="noopener noreferrer" 
    class="social-btn"
    aria-label="Visit GitHub profile"
>
    <img src="media/github.svg" alt="" class="icon" aria-hidden="true">
    GitHub
</a>
```

### Update Profile Photo
1. Replace `media/pfp.jpg` with your photo (1:1 aspect ratio recommended)
2. Keep filename the same or update the src path in `index.html`
3. Compress before uploading (use TinyPNG or ImageOptim for performance)

### Enable Dark Mode
Add this media query to `style.css`:
```css
@media (prefers-color-scheme: dark) {
    :root {
        --primary-color: #a8a39b;
        --text-primary: #f3f4f6;
        --text-secondary: #d1d5db;
        --background: #111827;
        --card-background: #1f2937;
    }
}
```

## Accessibility

- Semantic HTML5 elements (`<main>`, `<section>`, `<h1>`)
- ARIA labels for screen readers (`aria-label`, `aria-labelledby`)
- Focus-visible styles for keyboard navigation
- Proper alt text on images
- Color contrast meets WCAG AA standards

Test with:
- **axe DevTools** (Chrome extension)
- **WAVE** (https://wave.webaim.org)
- **Lighthouse** (Chrome DevTools)

## Performance

- **No external dependencies** - System fonts, no CDNs
- **Single CSS file** - No preprocessors or build step
- **Minimal JavaScript** - Only ~150 lines for UX enhancements
- **Optimized images** - Consider WebP format with JPG fallback

PageSpeed Insights target: 90+ on all metrics.

## Technical Details

### SEO
- Meta description optimized for search snippets
- Open Graph tags for social sharing
- Twitter Card tags for X/Twitter
- JSON-LD structured data (Person schema)
- Canonical URL to prevent duplicate content
- Sitemap and robots.txt for crawlability

### Security Headers (configure on hosting)
Recommended headers to set on your web server:
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Content-Security-Policy: default-src 'self'; img-src 'self' https:; script-src 'self'
```

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 14+, Chrome Android

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Egidijus Tamašauskas** (EGIDIT)  
IT Support Specialist  
[LinkedIn](https://linkedin.com/in/egidit)

---

For questions or suggestions, feel free to reach out through the social links.

