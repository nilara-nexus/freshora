# Freshora — Cinematic Dairy Website

A responsive 3-page dairy brand website built with HTML5, Bootstrap 5, CSS and vanilla JavaScript.

## Pages
- `index.html` — cinematic video hero, brand values, featured products, story banner and CTA
- `products.html` — responsive dairy product catalog with working category filters
- `about.html` — brand story, values, farm-inspired section and CTA

## Included
- Local images stored in `assets/`
- `assets/hero-video.mp4` — generated 10-second cinematic-style animated hero video
- Responsive Bootstrap navigation and shared footer on all pages
- Scroll-triggered blur + lift reveals, staggered animations, hover image zoom, glassy header and animated preloader
- Reduced-motion accessibility support

## Run locally
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Recommended: install the **Live Server** extension.
4. Right-click `index.html` → **Open with Live Server**.

You can also open `index.html` directly in a modern browser. A local server is recommended for consistent video playback.

## Customise
- Replace the demo brand name “Freshora” in the HTML files.
- Replace `assets/hero-video.mp4` with your final generated cinematic video, keeping the same filename.
- Replace demo contact `hello@freshora.example` with your real email.
- Edit colors and layout in `css/style.css`.
- Product filters use the `data-filter` and `data-category` attributes in `products.html`.

## Notes
- Bootstrap, Bootstrap Icons and Google Fonts load from CDNs, so those resources need an internet connection.
- Product visuals in `assets/` are locally stored generated storyboard crops; swap them for individual final product renders if you want even more detailed product photography.
- This is a frontend concept site; it does not include a backend, checkout, or real order processing.
