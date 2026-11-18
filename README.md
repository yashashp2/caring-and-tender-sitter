# Caring and Tender Sitter

A responsive pet-care website for Anastasia Kovaliova-Davies in Ashford, Kent, developed from the supplied C&TS homepage and assets.

- Website: https://yashashp2.github.io/caring-and-tender-sitter/
- Source: `site/cts-homepage/`
- No runtime dependencies, build step, analytics or database.

## Preview locally

Run `python -m http.server 4173 --directory site/cts-homepage`, then open http://localhost:4173.

## Features

Responsive mobile navigation, service-specific enquiry links, native expandable FAQs, keyboard-accessible photo and certificate viewer, and an enquiry builder with date validation and WhatsApp/email handoff. All essential contact links work without JavaScript.

The enquiry builder creates a draft locally. It does not send messages, accept payments, store submissions or confirm availability. Visitors review and send their own message in WhatsApp or their email app. Dates and final prices are agreed directly with Anastasia.

## Updating the website

- `index.html`: copy, services, supplied prices, images and contact information.
- `styles.css`: original cream, gold and navy design.
- `enhancements.css`: mobile navigation, gallery, enquiry builder and dialog styles.
- `site.js`: menu, image viewer and enquiry interactions.
- `privacy.html`: website data-handling information.
- `assets/`: curated public photos, logo and course certificates.

The original uncurated source photographs in the workspace's top-level `assets/` directory are excluded from Git. The public website uses only the curated assets already selected for the supplied demo.

## Deployment

GitHub Pages deploys `site/cts-homepage` using `.github/workflows/deploy.yml` whenever a commit is pushed to `main`. Repository Settings → Pages must use **GitHub Actions** as its build source. See https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages.

If moving the site to a new URL, update the canonical and Open Graph URLs, structured data, `sitemap.xml`, and the link in `404.html`.

## Business details

Prices, contact details, course claims and images come from the supplied demo. No reviews, insurance claims, visit lengths or availability guarantees have been added. Keep prices and care terms current; the website directs customers to confirm the complete quote before booking.
