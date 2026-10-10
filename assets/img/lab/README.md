# Q-SHIELD Lab homepage photographs

This folder contains real Q-SHIELD Lab photographs used in the **homepage slideshow** in `index.html`. The slideshow is part of the existing homepage introduction, not a separate gallery page.

## Current active photographs

The current slideshow uses six compressed `.webp` display copies for Kody and Aiden's IEEE SSCET presentations, an elementary-school STEM visit, the NAIRR classroom conference, IEEE ICHI 2026, and the COSE student research symposium. Original `.JPG`, `.jpg`, and `.jpeg` photographs are retained beside these files, and additional original photographs (such as `IMG_7751.jpg`) are intentionally preserved.

## Adding a photograph

1. Save the original photograph in this folder.
2. Create a display-sized `.webp` copy, preferably around 1200–1440 px wide and under 400 KB, without deleting your original image.
3. Open `index.html` and locate `HOME PHOTO SLIDESHOW`.
4. Add a `<figure class="lab-slide">` element before `.lab-slideshow-controls`, or uncomment an existing figure. Set the `img src` to the actual, case-sensitive WebP filename.
5. Supply descriptive `alt` text and a short two-line caption using `.lab-slide-overline` and `.lab-slide-caption`.
6. If the slide should appear first, move it to the first *active* figure, add `is-active`, and use `loading="eager"`. Remove `is-active` from every other active figure. Subsequent images should use `loading="lazy"`.

**Preserve the commented-out director portrait and student award slides** until you choose to activate them. HTML comments are deliberately ignored by the slideshow script.

At least two active figures enable navigation arrows, dot indicators, pause/play, and automatic transitions approximately every 6.5 seconds. The script respects reduced-motion preferences and pauses on keyboard focus or mouse hover.

## Publishing and image troubleshooting

- Match directory names and filename capitalization exactly. `photo.JPG` and `photo.jpg` are different filenames on GitHub Pages.
- Use `assets/img/lab/photo.webp` in `index.html`, not just the image name.
- Test the complete relative URL directly if an image does not load. The browser developer console can show `404` failures.
- Do not publicly post photographs of children without appropriate guardian/school permission or other required authorization. Obtain appropriate consent for identifiable students and conference attendees, and check that images do not show private information.
- Keep high-resolution originals if useful for future printing or replacement, but serve compressed copies to web visitors.
