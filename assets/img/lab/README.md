# Homepage slideshow photos

This directory holds **real Q-SHIELD Lab photos**. None have been added yet.
Your existing portrait (`assets/img/director.jpg`) remains the first slide.

## Add lab photos

1. Save your photos here. For example: `research-group.jpg`, `student-showcase.jpg`.
2. Open **index.html** and find `HOME PHOTO SLIDESHOW`.
3. Inside `.lab-slideshow`, copy a `<figure class="lab-slide"> ... </figure>` block from the commented examples, then paste it **outside the HTML comment** (before `lab-slideshow-controls`).
4. Update each photo's `src`, meaningful `alt` description, and caption.
5. Commit the changes. With two or more real photos, the gallery automatically displays arrows, navigation dots, pause/play, and a gentle 6.5-second rotation.

**Image guidance:** use landscape photographs cropped to roughly **4:3**, ideally at least **1200 x 900 pixels**, and compress to a web-friendly size (ideally under 400 KB per photo). Photos must be yours or cleared for website use. Avoid showing student names or sensitive information without consent. Images can be .jpg, .png, or .webp. Consider showing lab meetings, student demos, research presentations, workshops, and group photos.

The slideshow stays in the existing homepage portrait position. If no additional photos are present, it displays your portrait without arrows or an unnecessary animation. Users who prefer reduced motion will see manual navigation but no automatic transitions.
