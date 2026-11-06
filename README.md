# Q-SHIELD Lab Website

Website for the **Quantum and Software for Health Informatics and Emerging Layered Defense (Q-SHIELD) Lab**, Department of Computer Science and Engineering, **University of Central Arkansas (UCA)**.

Q-SHIELD conducts research at the intersection of artificial intelligence, quantum machine learning, health informatics, cybersecurity, and software engineering. This repository contains the lab's public-facing academic website.

**Website:** [Q-SHIELD Lab](https://jobair-hossain.github.io/Q-Shield-Lab/)  
**Host institution:** [University of Central Arkansas](https://uca.edu/)

## About this website

The site uses **HTML, CSS, and vanilla JavaScript**. No frontend framework, package installation, build process, or database is required. It can be hosted directly on GitHub Pages.

The layout includes a persistent sidebar with a map and institutional information, a responsive navigation bar, and page-specific content. The visual design uses UCA-inspired purple tones and a quantum-themed animated banner.

### Pages

| File | Purpose |
| --- | --- |
| `index.html` | Lab introduction, homepage photo slideshow, and latest updates |
| `research.html` | Interactive **Research to Impact** diagram, selected research projects across four areas, and selected completed projects |
| `awards.html` | Funded research, submitted proposals, and Q-SHIELD-related honors since August 2025 |
| `publications.html` | Searchable and filterable publication list organized by research area and year |
| `team.html` | Lab director, collaborators, graduate students, undergraduate students, and alumni |
| `join.html` | Research opportunities, qualifications, and application information |
| `resources.html` | Quantum/AI development tools and open-source research resources |
| `contact.html` | Lab contact details, office location, academic collaborations, and research inquiries |
| `events.html` | Historical events page retained in the repository; navigation entry commented out |

The four main research areas are **Health Informatics, Quantum AI, Cybersecurity, and Software Engineering**. Quantum AI includes cross-cutting methods, while the other areas highlight applications and systems research.

## Getting started

1. Download or clone this repository.
2. Open `index.html` in a browser for a quick preview.
3. For a more reliable local preview, start a simple web server from the repository root:

   ```bash
   python3 -m http.server 8000
   ```

Active homepage photographs use compressed WebP derivatives (approximately 1440 px maximum width) to reduce transfer size. The original JPEG files remain in `assets/img/lab/` for archival purposes and manual replacement. When adding a new photo, optimize a WebP display copy and use its exact, case-sensitive path in `index.html`. Keep commented-out future slide blocks untouched until their images are ready.
