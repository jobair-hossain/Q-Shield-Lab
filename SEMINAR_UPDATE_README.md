# Q-SHIELD Lab: Quantum-AI Seminar 2026 update

This update uses your uploaded Q-SHIELD Lab repository as the baseline.

## Intended URLs
- Lab Events page: `https://jobair-hossain.github.io/Q-Shield-Lab/events.html`
- Seminar page: `https://jobair-hossain.github.io/Q-Shield-Lab/Quantum-AI-Seminar-2026/`

## Exactly what changed
1. Activated the **Events** navigation link across all existing root HTML pages, including `events.html` (which correctly has `aria-current="page"`).
2. Added a prominent seminar feature and CTA at the beginning of `events.html`. The button points to `Quantum-AI-Seminar-2026/`.
3. Created `Quantum-AI-Seminar-2026/index.html` with four speaker profiles, full supplied talk abstracts where provided, a seminar overview, venue and organizer information, and an RSVP placeholder.
4. Copied `Quantum-AI-Seminar-2026/event.ics` for add-to-calendar.
5. Created `assets/css/events-promo.css` for the feature card; no edits to the global `assets/css/style.css` were needed.
6. **No content was added to `resources.html`.** Its only change is the common navigation bar, which now includes Events.

## How to deploy
You have two options:
- **Recommended:** Copy the files and folders from the UPDATED_REPOSITORY ZIP into your existing `Q-Shield-Lab` GitHub repo, preserving their paths, then commit.
- **Minimal patch:** Copy just the files from CHANGED_FILES ZIP over the matching files in your repo. Note that all root HTML pages are included because the Events menu is repeated on each page.

GitHub Pages generally redirects `/Quantum-AI-Seminar-2026` to `/Quantum-AI-Seminar-2026/` and serves the folder's `index.html`.

## RSVP registration link
When the Google Form is ready, edit `Quantum-AI-Seminar-2026/index.html` near the bottom:
```js
const RSVP_URL = '';
```
Replace `''` with the actual **respondent** Google Form URL, e.g. `const RSVP_URL = 'https://docs.google.com/forms/d/e/ACTUAL_ID/viewform';`.
Do not publish a QR code pointing to an unverified placeholder.

## Pending items
- Dr. Hossain Shahriar's talk title is as provided by the organizer; detailed abstract has not yet been supplied.
- Individual talk order/timing has not been confirmed; the four thematic focus sections are not a timetable.
- No attendee form exists on this site; participant data should go to your Google Form.

## Testing
Check Events appears in the navigation on desktop and mobile, the feature CTA opens the seminar page, the seminar's Back to Events link works, all four abstracts display correctly, the calendar link downloads, and the page works on a phone.
