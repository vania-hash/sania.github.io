Sania Digital Studio — Portfolio (local files)

This repository contains a small static portfolio and three sample project pages designed as mini-sites.

Files

- `portfolio.html` — main portfolio / landing page
- `bakery.html` — bakery sample site
- `salon.html` — salon sample site
- `tutor.html` — tutor sample site
- `css/styles.css` — shared site CSS
- `css/bakery.css`, `css/salon.css`, `css/tutor.css` — optional per-page CSS (if present)
- `js/app.js` — shared JavaScript (theme toggle + form handlers)
- `images/` — placeholder project images

Quick local preview (Windows PowerShell)

Open the pages in your default browser:

```powershell
Start-Process "C:\Users\admin\Desktop\sania's portfolio\portfolio.html"
Start-Process "C:\Users\admin\Desktop\sania's portfolio\bakery.html"
Start-Process "C:\Users\admin\Desktop\sania's portfolio\salon.html"
Start-Process "C:\Users\admin\Desktop\sania's portfolio\tutor.html"
```

Or run a simple local HTTP server (recommended for correct relative paths):

```powershell
cd "C:\Users\admin\Desktop\sania's portfolio"
python -m http.server 8000
# then open http://localhost:8000/portfolio.html in your browser
```

Notes & next steps

- Contact form: `portfolio.html` uses a Formspree-style placeholder. Replace the action with your real Formspree ID or configure a different backend.
- Images: Replace the placeholder images in `images/` with real screenshots for a stronger portfolio.
- Deployment: Fast options — GitHub Pages, Netlify, Vercel. I can help create a repo and push these files, or prepare a deploy script if you want.

If you want, I can:
- Commit and push to a GitHub repository for you (I will create the repo and push the files), or
- Run the local server and open the pages for visual review, or
- Clean up duplicate CSS rules and split shared vs. page-specific styles for maintainability.
