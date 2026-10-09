# Q-SHIELD Lab Website

Website for the **Quantum and Software for Health Informatics and Emerging Defense (Q-SHIELD) Lab**, Department of Computer Science and Engineering, **University of Central Arkansas (UCA)**.

Q-SHIELD conducts research at the intersection of artificial intelligence, quantum machine learning, health informatics, cybersecurity, and software engineering. This repository contains the lab's public-facing academic website.

**Website:** [Q-SHIELD Lab](https://jobair-hossain.github.io/Q-Shield-Lab2/)  
**Host institution:** [University of Central Arkansas](https://uca.edu/)

## About this website

The site uses **HTML, CSS, and vanilla JavaScript**. No frontend framework, package installation, build process, or database is required. It can be hosted directly on GitHub Pages.

The layout includes a persistent sidebar with contact and institutional information, a responsive navigation bar, and page-specific content. The visual design uses UCA-inspired purple tones and a quantum-themed animated banner.

### Pages

| File | Purpose |
| --- | --- |
| `index.html` | Lab introduction, homepage photo slideshow, and latest updates |
| `research.html` | Interactive **Research to Impact** diagram, selected research projects across four areas, and selected completed projects |
| `awards.html` | Federal and university research grants and proposal information, with funding status shown for each entry |
| `publications.html` | Searchable and filterable publication list organized by research area and year |
| `teaching.html` | Courses taught, scheduled courses, and faculty development workshops |
| `team.html` | Lab director, collaborators, graduate students, undergraduate students, and alumni |
| `join.html` | Research opportunities, qualifications, and application information |
| `resources.html` | Quantum/AI development tools and open-source research resources |
| `events.html` | Conferences, research presentations, workshops, and outreach activities |

The four main research areas are **Health Informatics, Quantum AI, Cybersecurity, and Software Engineering**. Quantum AI includes cross-cutting methods, while the other areas highlight applications and systems research.

## Getting started

1. Download or clone this repository.
2. Open `index.html` in a browser for a quick preview.
3. For a more reliable local preview, start a simple web server from the repository root:

   ```bash
   python3 -m http.server 8000
   ```

4. Visit <http://localhost:8000/>.

A local web server more closely resembles GitHub Pages, although external resources such as Google Maps, Google Fonts, and the UCA-hosted logo still require an internet connection.

## Repository structure

```text
.
├── index.html
├── research.html
├── awards.html
├── publications.html
├── teaching.html
├── team.html
├── join.html
├── resources.html
├── events.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── main.js
    │   ├── quantum-hero.js
    │   ├── slideshow.js
    │   ├── orbit.js
    │   └── publications-filter.js
    └── img/
        ├── logo-mark.svg
        ├── favicon.svg
        ├── director.jpg
        ├── lab/         # Lab photographs and photo guide
        ├── people/      # Team and collaborator portraits
        ├── research/    # Research-area graphics
        └── logos/       # Grant and institutional assets
```

## Maintaining website content

Most content is edited directly in its corresponding HTML file. Preserve the existing structure and CSS classes when adding a new entry.

| Task | Where to edit | What to do |
| --- | --- | --- |
| Add a homepage update | `index.html` | Copy an `.update-item` within `.updates-list`; put the newest update first |
| Add a research project | `research.html` | Add a `.research-project-card` within the appropriate `.research-project-grid` under Health, Quantum, Cybersecurity, or Software Engineering |
| Add a completed project | `research.html` | Follow the existing `.research-past-card` structure |
| Add a publication | `publications.html` | Copy an `<article class="pub">` in the appropriate `.pub-group`, updating its citation, `data-year`, and `data-topic` |
| Add or revise a grant | `awards.html` | Update a `.grant-card` inside the appropriate `.grant-group`; retain the correct award/proposal status |
| Add a course | `teaching.html` | Copy a `.course-card`; distinguish **Semesters Taught** from **Scheduled Semester** |
| Add a collaborator | `team.html` | Follow the `.collab-card` structure and add the matching portrait to `assets/img/people/` |
| Add a student | `team.html` | Use the existing `.roster-card` or `.roster-row` in the appropriate graduate, undergraduate, or alumni group |
| Add an event | `events.html` | Copy an `.event-card` into the relevant `.event-group` |
| Update recruitment details | `join.html` | Revise eligibility, research interests, and application instructions |
| Update resources | `resources.html` | Edit the relevant tools or repository links |

### Publication filtering

Each `.pub` element uses `data-year` and `data-topic` attributes. Valid topic identifiers are:

- `Health`
- `Quantum`
- `Cybersecurity`
- `Software`

Use a space-separated value for multidisciplinary publications, for example:

```html
<article class="pub" data-year="2026" data-topic="Health Quantum">
  <!-- Publication content -->
</article>
```

The search and filtering logic is implemented in `assets/js/publications-filter.js`. Maintain accurate publication details and clearly distinguish published papers, accepted papers, submissions, and manuscripts in progress.

### Teaching schedule

The Teaching page distinguishes completed or current teaching assignments from upcoming scheduled offerings. In particular, **CSCI 4360 / CSCI 6397: AI for Cybersecurity** is identified as **scheduled for Spring 2027**. Keep that status accurate when updating the site after the semester begins.

## Homepage photo slideshow

The homepage slideshow occupies the original portrait position in `index.html`; it is **not** a separate page section. Its behavior is implemented by `assets/js/slideshow.js` and styled in `assets/css/style.css`.

To add or update photographs:

1. Put the actual image file in `assets/img/lab/`.
2. Open `index.html` and find the comment `HOME PHOTO SLIDESHOW`.
3. Inside `.lab-slideshow`, add an active `<figure class="lab-slide">` before `.lab-slideshow-controls`.
4. Set the image `src` to the **exact** filename and location, and write accurate alternative text and a concise caption.
5. Preserve any commented-out photo figures you want to keep for later. An HTML-commented figure does **not** appear in the slideshow.

Example:

```html
<figure class="lab-slide" role="group" aria-roledescription="slide">
  <img src="assets/img/lab/student-presentation.jpg"
       alt="Q-SHIELD student presenting research at a conference"
       loading="lazy" decoding="async">
  <figcaption>
    <span class="lab-slide-overline">RESEARCH PRESENTATION</span>
    <span class="lab-slide-caption">Student Research at a Conference</span>
  </figcaption>
</figure>
```

When two or more *active* slides are present, the slideshow enables arrows, navigation dots, a pause/play control, and automatic transitions (default: **6.5 seconds**). It pauses on hover or keyboard focus and respects `prefers-reduced-motion`. With only one active slide, it remains static.

**Image paths are case-sensitive on GitHub Pages.** For example, `photo.JPG` and `photo.jpg` may refer to different files. Use exact filenames, include the `lab/` folder when appropriate, and prefer simple lowercase names with hyphens and no spaces. If an image does not appear, open its URL directly or check the browser's developer tools for a missing-file (`404`) error.

For image sizing, permission, and troubleshooting guidance, see [`assets/img/lab/README.md`](assets/img/lab/README.md).

## Interactive features

| Feature | Implementation |
| --- | --- |
| Animated quantum-themed page banners | `assets/js/quantum-hero.js` |
| Research to Impact orbit graphic | CSS `.orbit-*` styles and `assets/js/orbit.js` |
| Homepage photo slideshow | `assets/js/slideshow.js` |
| Publication search and filters | `assets/js/publications-filter.js` |
| Responsive mobile navigation and shared behavior | `assets/js/main.js` |

Interactive components include reduced-motion support where applicable. Preserve descriptive image `alt` text, semantic HTML, and keyboard-accessible controls when editing.

## Branding and shared site settings

- **Lab mark:** `assets/img/logo-mark.svg`
- **Browser icon:** `assets/img/favicon.svg`
- **Director portrait:** `assets/img/director.jpg`
- **Collaborator and student photographs:** `assets/img/people/`
- **Research-area illustrations:** `assets/img/research/`
- **Site colors, typography, spacing, and responsive styles:** `assets/css/style.css` (see `DESIGN TOKENS` and `:root`)

### University affiliation

All nine pages display a **Host Institution** panel in the sidebar, beneath the Website and ORCID links. It references the UCA academic logo hosted on `uca.edu` and links to the university's homepage. A text fallback is included in the markup.

If replacing the remote image with a locally hosted version, use an **approved UCA logo asset**, maintain its original proportions and clear space, and update the image path consistently in all nine HTML files. Do not redraw or alter the official university mark.

### Contact details and navigation

The sidebar and top navigation are repeated in every HTML page. If the lab name, contact email, address, institutional logo path, or navigation items change, update **all nine pages** to keep the interface consistent.

## Publishing with GitHub Pages

1. Commit the website files to the intended GitHub repository.
2. In **Settings → Pages**, configure deployment from the appropriate branch (typically `main`) and `/ (root)`.
3. Confirm that the site's published base path matches the repository name.
4. Check the canonical URL in each page's `<head>`; the current HTML is configured for:

   `https://jobair-hossain.github.io/Q-Shield-Lab2/`

5. After deployment, inspect Home, Research, Publications, Teaching, and Team on desktop and mobile, then verify navigation, downloadable assets, images, and external links.

If the repository is renamed or moved, update canonical URLs and any absolute links pointing to the previous site. Most local CSS, JavaScript, and image paths are relative and do not require changes as long as the folder structure is preserved.

## Before publishing changes

- [ ] Check all image filenames and relative paths, including `.jpg` versus `.JPG`.
- [ ] Confirm that commented-out HTML blocks remain preserved if intended for future use.
- [ ] Verify publication citations, links, dates, and manuscript status.
- [ ] Distinguish funded awards from submitted or proposed grants.
- [ ] Verify faculty, collaborator, and student names and roles.
- [ ] Check course numbers and whether semesters are taught or scheduled.
- [ ] Obtain appropriate permission before publishing photos, especially images of minors.
- [ ] Preview desktop and mobile layouts and test navigation and keyboard controls.

## Maintenance

This README documents the website's structure and editing workflow as of **October 2026**. Update it when the page structure, asset locations, interactive scripts, or publication process changes. Routine content edits generally do not require a README revision unless they change these instructions.
