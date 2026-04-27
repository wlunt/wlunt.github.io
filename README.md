# Practice Social — Landing Page

Bespoke AI social media automation for therapists and therapy clinics.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Landing page — all 8 sections |
| `styles.css` | All styles — design tokens, layout, responsive |
| `script.js` | Nav scroll behaviour, smooth scroll, fade-in animations |
| `pretext.js` | Pretext text layout library (vendored, no CDN dependency) |

## Deploying to GitHub Pages

1. Push all four files to the root of your `gh-pages` branch (or `main` if configured).
2. Go to **Settings → Pages** in your GitHub repo.
3. Set source to your branch and `/ (root)`.
4. Your site will be live at `https://<username>.github.io/<repo>/` within a minute or two.

No build step. No dependencies to install. Open `index.html` directly in a browser to preview locally.

## Customising

### Contact email

The demo request button and footer contact link both use `mailto:`. Search for `williamlunt3@gmail.com` in `index.html` and replace with your address.

### Brand colours

All colours are CSS custom properties in `:root` at the top of `styles.css`:

```css
--teal-700:  #1a7a8e;   /* primary — buttons, step numbers */
--teal-500:  #2d9bb5;   /* accent — outcome borders, icons */
--teal-50:   #f0f9fb;   /* light background sections */
```

### Adding the demo video

Replace the `.video-placeholder` block in `index.html` with your actual video embed:

```html
<div class="video-placeholder">
  <iframe
    src="YOUR_VIDEO_URL"
    title="Workflow walkthrough"
    allow="autoplay; fullscreen"
    allowfullscreen
    style="position:absolute;inset:0;width:100%;height:100%;border:0;"
  ></iframe>
</div>
```

### Practice name

Search for `Practice Social` in `index.html` and replace with your practice name or service name.

## Structure

The page follows this section order:

1. **Hero** — headline, subheadline, primary CTA
2. **Video intro** — workflow overview (video placeholder)
3. **The workflow** — 5 numbered steps (Prompt → Post)
4. **Tailored to your practice** — 6 customisation areas
5. **Safety and oversight** — 4 professional safeguards
6. **Example output** — sample post card
7. **How your system is built** — 5 implementation steps
8. **Final CTA** — demo request with trust badges
