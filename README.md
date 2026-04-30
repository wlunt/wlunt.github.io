# OnePsyche — Landing Page

Bespoke AI social media automation for therapists and therapy clinics.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main landing page |
| `workflow.html` | How the system works — two workflow flows (on-demand & batch) |
| `how-we-build.html` | Working with us — 5-step build process |
| `styles.css` | All styles — design tokens, layout, responsive |
| `script.js` | Nav scroll behaviour, smooth scroll, fade-in animations |
| `pretext.js` | Pretext text layout library (vendored, no CDN dependency) |

## Assets

| Path | Purpose |
|------|---------|
| `img/logo-icon.png` | Nav bar brand mark (64×64) |
| `img/favicon-32.png` | Browser tab favicon (32×32) |
| `img/favicon-16.png` | Browser tab favicon (16×16) |
| `img/apple-touch-icon.png` | iPhone home screen icon (180×180) |
| `img/clinician_hero.png` | Hero section photo |
| `img/carousel/` | Full-width showcase images (one per practitioner) |
| `video/hero_vid.mp4` | How it works walkthrough video |

## Deploying to GitHub Pages

1. Push all files to the root of your `main` branch.
2. Go to **Settings → Pages** in your GitHub repo.
3. Set source to `main` and `/ (root)`.
4. Your site will be live at `https://<username>.github.io` within a minute or two.

No build step. No dependencies to install. Open `index.html` directly in a browser to preview locally.

## Customising

### Demo booking link

All CTAs point to `https://calendly.com/williamlunt`. Search for this URL across the HTML files to update it.

### Brand colours

All colours are CSS custom properties in `:root` at the top of `styles.css`:

```css
--teal-700:  #1a7a8e;   /* primary — buttons, accents */
--teal-500:  #2d9bb5;   /* secondary accent — borders, icons */
--teal-50:   #f0f9fb;   /* light tinted backgrounds */
```

### Carousel images

Add full-width composite screenshots to `img/carousel/` using these filenames:

| Filename | Practitioner |
|----------|-------------|
| `sofia_martinez_full.jpg` | Sofia Martinez |
| `daniel_foster_full.jpg` | Daniel Foster |
| `aisha_rahman_full.jpg` | Aisha Rahman |
| `rafael_ortiz_full.jpg` | Rafael Ortiz |
| `maya_chen_full.jpg` | Maya Chen |
| `jordan_ellis_b_full.jpg` | Jordan Ellis — Boundaries |
| `jordan_ellis_bu_full.jpg` | Jordan Ellis — Burnout |

Images display at 420px tall at their natural aspect ratio in a scrolling marquee.

## Page structure

### index.html

1. **Hero** — headline, subheadline, primary CTA, trust indicators
2. **How it works** — walkthrough video + workflow steps summary
3. **The workflow** — 5 numbered steps (Prompt → Post)
4. **Tailored to your practice** — customisation areas
5. **Safety and oversight** — professional safeguards
6. **Example output** — scrolling showcase carousel
7. **Final CTA** — Calendly booking link

### workflow.html

- **Flow A (On-demand)** — 5 steps for single post generation
- **Flow B (Scheduled batch)** — 5 steps for weekly batch generation

### how-we-build.html

- **5-step build process** — Discovery → Voice → Configure → Test → Launch
