# Q-SHIELD Lab website

Plain HTML/CSS/JS site for Q-SHIELD Lab (Quantum and Software for Health
Informatics and Emerging Defense Lab), University of Central Arkansas.
No build step — open any `.html` file in a browser to preview, or push the
folder to GitHub Pages.

Layout follows a classic academic-lab pattern: a persistent left sidebar
(logo, lab name, address, map, quick links) plus a scrolling content column
with a tab bar and a purple gradient banner per page — in UCA's brand
purple, with a quantum-inspired interactive hero and orbit diagram.

## Pages

| File | Content |
|---|---|
| `index.html` | Home — interactive quantum-particle banner, lab intro, "Latest Updates" feed |
| `research.html` | The "Research to Impact" orbit diagram + four research pillars in depth |
| `awards.html` | Grants (Federal/University) and honors & recognition |
| `publications.html` | Filterable list of publications (search + pillar + year), grouped like the CV |
| `teaching.html` | Courses taught, with semester chips |
| `team.html` | Director bio, collaborators, and student researchers (grad/current/past) |
| `join.html` | How to join the lab (research areas, qualifications, how to apply) |
| `resources.html` | Quantum/AI tooling and open-source repositories |
| `events.html` | Conferences, presentations, workshops, and outreach |

## Making common edits

**Add a "Latest Update" on the home page** — open `index.html`, copy one `<div class="update-item">…</div>` block inside `.updates-list`, and edit the date/text. Newest items go at the top.

**Add a publication** — open `publications.html`, copy one `<article class="pub">…</article>` block inside the right `.pub-group`, and edit the title/authors/venue. Set `data-year="2027"` etc. and `data-topic` to any of `Health`, `Quantum`, `Cybersecurity`, `Software` (space-separate to tag more than one pillar) so it works with the search/filter bar.

**Add a grant or honor** — open `awards.html`. Grants are `.grant-card` blocks inside a `.grant-group`; honors are `<li>` rows inside the `.mini-cv` list.

**Add a course** — open `teaching.html` and copy one `.course-card` block.

**Add a team member** — open `team.html`. Collaborators use `.collab-card` (with a real photo); students use `.roster-card` (grid) or `.roster-row` (list) — both work fine with an `.avatar-mono` initials tile if you don't have a photo yet.

**Add an event** — open `events.html` and copy one `.event-card` block inside the right `.event-group`.

**Change contact info or how to apply** — open `join.html`. The address/email/map in the sidebar is duplicated at the top of every page — use find-and-replace across all `.html` files if it changes.

**Change colors, fonts, or spacing** — everything is controlled from the `:root` block at the top of `assets/css/style.css` (search for `DESIGN TOKENS`). The UCA purple scale is `--purple-950` … `--purple-500`; the quantum accent is `--cyan`. Change those and the whole site updates.

**Replace the logo** — the mark is `assets/img/logo-mark.svg` (used in the sidebar badge and orbit core) and `assets/img/favicon.svg` (browser tab icon). Both are plain SVG text files — open them in any editor, or swap in your own artwork at the same filenames.

**Replace the director's photo** — swap `assets/img/director.jpg` (keep the same filename).

**Replace a collaborator's photo** — swap the matching file in `assets/img/people/`.

## Interactive elements

- **Quantum banner (home page)** — `assets/js/quantum-hero.js` draws the animated particle network behind the "Welcome to Q-SHIELD Lab" banner and reacts to the cursor. Tune particle count/speed/link distance near the top of that file.
- **Research-to-Impact orbit (research page)** — CSS animation (`.orbit-*` rules in `style.css`, including the pulsing glow and spokes) plus `assets/js/orbit.js`, which pauses the rotation on hover/focus so the labels are readable and clickable.
- **Publications filter** — `assets/js/publications-filter.js` reads the `data-topic`/`data-year` attributes described above; no separate data file to maintain.
- **Mobile navigation** — below ~960px the sidebar hides and the tab bar becomes a hamburger-triggered dropdown, handled by `assets/js/main.js`.

Both animated effects respect `prefers-reduced-motion` automatically.

## Deploying to GitHub Pages

1. Create a repository (e.g. `Q-Shield-Lab2`) and push this folder to it.
2. In the repo settings → Pages, set the source to the `main` branch, root folder.
3. The canonical URLs in each page's `<head>` assume the site lives at
   `https://jobair-hossain.github.io/Q-Shield-Lab2/` — update them (find-and-replace
   across the `.html` files) if the repo name changes.
