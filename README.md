# Shivam Kumar Jha — GitHub Pages Research Portfolio

This repository is a **static academic research portfolio** designed to be hosted directly from the `main` branch with GitHub Pages. It does not require Node.js, a build step, server-side rendering, or paid infrastructure.

## Resume analysis used as source of truth

- **Name:** Shivam Kumar Jha
- **Current role:** Senior Engineer – Inspection & Reliability, GAIL (India) Limited, Pata Petrochemical Complex
- **Education:** B.Tech. Mechanical Engineering, IIT (ISM) Dhanbad, May 2023, GPA 8.77/10
- **Research interests:** Scientific Machine Learning, Computational Science, Physics-Informed Neural Networks, Numerical Simulation, Mechanical Engineering
- **Research experience:** Numerical wave propagation with Dr. Tapan K. Sengupta; Arctic lead/front analysis with Dr. Georgy Manucharyan; floe dynamics/Oceananigans work with Dr. Mukund Gupta
- **Publication:** `Continuum perturbation field in quiescent ambience: Common foundation of flows and acoustics.` Details are intentionally marked pending until DOI/venue/link are provided.
- **Projects:** AI radiographic weld defect classifier, digital inspection data platform, pressure vessel criticality and FFS computation, Oceananigans exploration, and other simulation/mechanical projects from the resume.
- **Known links:** Email is available. GitHub, LinkedIn, Google Scholar, and ORCID are placeholders because they were not present in the resume.

No publications, links, awards, or research claims were invented.

## Architecture

The site is intentionally plain static HTML/CSS/JavaScript for GitHub Pages:

- `index.html` — homepage sections for research, projects, publications, about, CV, education, experience, and contact.
- `projects/*.html` — static project detail shells. Each page reads the matching project from `content.js`.
- `admin.html` — static content editor helper for browser-local drafts and JSON export.
- `content.js` — structured content source separated from UI rendering.
- `app.js` — rendering, theme persistence, project lookup, and admin JSON export logic.
- `styles.css` — responsive scientific visual design, dark/light mode, accessibility states, and reduced-motion support.
- `assets/media` — images, SVGs, GIFs, MP4, WebM files.
- `assets/cv` — replaceable CV PDF.
- `robots.txt`, `sitemap.xml`, and `404.html` — GitHub Pages-friendly SEO/support files.

This approach is reliable, free, beginner-friendly, and compatible with **GitHub Pages from `main`** without dependency installation.

## How to host on GitHub Pages from `main`

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**.
5. Save. GitHub Pages will serve `index.html` directly.

## How to run locally

No packages are required. Use any static server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## How to edit content without touching layout code

All public content lives in `content.js` as structured data. The layout reads that file and renders sections automatically.

You can also open `admin.html`, edit JSON, save a browser-local draft, export JSON, and copy the exported data back into `content.js` for publication.

Because GitHub Pages is static, browser edits are not automatically written to the repository. To publish edits, commit the updated `content.js` to `main`.

## How to add a project

Add an object to `PORTFOLIO_CONTENT.projects` in `content.js` with:

- `title`
- `slug`
- `shortDescription`
- `description`
- `category`
- `date`
- `status`
- `technologies`
- `thumbnail`
- `images`
- `videos`
- `links`
- `researchSignificance`
- `keyResults`
- `contribution`
- `featured`
- `overview`
- `motivation`
- `methodology`

Then create a matching shell page at `projects/your-slug.html` using one of the existing project files as a template, and set `data-slug="your-slug"`.

## How to add images

1. Put image files in `assets/media`.
2. Use paths such as `assets/media/figure.webp` in `content.js`.
3. Prefer compressed WebP/JPG/PNG and meaningful alt text.

Supported: JPG, PNG, WebP, SVG, GIF.

## How to add videos

For external videos, add a YouTube/Vimeo URL to a project's `links.video` field. For direct hosting, put compressed MP4/WebM files in `assets/media` and reference them in the project's `videos` array.

Supported: MP4 and WebM.

## How to add GitHub repositories

Paste the repository URL into `links.github` for a project. The project detail page will show it as a resource button. Since this is a static GitHub Pages site, automatic GitHub metadata fetching should be done sparingly or prefilled manually to avoid unnecessary API calls and rate limits.

## How to add publications

Add a publication object to `PORTFOLIO_CONTENT.publications` with title, authors, venue/status, DOI, paper link, PDF link, GitHub, dataset, demo, video, and figures when available. If a detail is unknown, leave it blank or mark it pending.

## How to replace CV

Replace `assets/cv/Shivam-Kumar-Jha-CV-placeholder.pdf` with your final CV PDF and keep the same filename, or update `profile.cv` in `content.js` to point to the new PDF.

## Authentication and admin security

GitHub Pages is static and cannot safely enforce private server-side authentication. The included `admin.html` is a local editing helper, not a secure database-backed CMS. Do not place private data or secrets in it.

If you later need a truly private web admin with uploads and authentication, connect this frontend to a service such as Decap CMS with GitHub OAuth, Supabase, Firebase, or another headless CMS.

## Deployment notes

- Keep all file paths relative so the site works at `username.github.io/repository-name/` and custom domains.
- Commit changes directly to `main` for GitHub Pages publication.
- Replace placeholder social links, DOI/publication metadata, and the placeholder CV before sharing the website with professors.
