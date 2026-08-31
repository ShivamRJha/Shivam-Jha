# Shivam Kumar Jha — Research Portfolio

A modern academic research portfolio for PhD applications, research supervisors, collaborators, internships, and professional networking.

## Resume analysis used as source of truth

- **Name:** Shivam Kumar Jha
- **Current role:** Senior Engineer – Inspection & Reliability, GAIL (India) Limited, Pata Petrochemical Complex
- **Education:** B.Tech. Mechanical Engineering, IIT (ISM) Dhanbad, May 2023, GPA 8.77/10
- **Research interests:** Scientific Machine Learning, Computational Science, Physics-Informed Neural Networks, Numerical Simulation, Mechanical Engineering
- **Research experience:** Numerical wave propagation with Dr. Tapan K. Sengupta; Arctic lead/front analysis with Dr. Georgy Manucharyan; floe dynamics/Oceananigans work with Dr. Mukund Gupta
- **Publication:** `Continuum perturbation field in quiescent ambience: Common foundation of flows and acoustics.` Details are intentionally marked pending until DOI/venue/link are provided.
- **Projects:** AI radiographic weld defect classifier, digital inspection data platform, pressure vessel criticality and FFS computation, Oceananigans exploration, Rayleigh-Taylor simulation, conduction/convection simulation, 12 Steps to Navier-Stokes, portable wire EDM development.
- **Known links:** Email is available. GitHub, LinkedIn, Google Scholar, and ORCID are placeholders because they were not present in the resume.

No publications, links, awards, or claims were invented.

## Architecture

This project uses **Next.js + TypeScript** with structured content in `lib/content.ts`. The site is built as a low-cost static/SSR portfolio with a lightweight admin prototype at `/admin`.

Why this architecture:

- Fast and deployable on free/low-cost hosts such as Vercel, Netlify, or a VPS.
- Content is separated from UI components through typed content models.
- The admin dashboard demonstrates the intended Create → Edit → Preview → Publish workflow without requiring a paid CMS.
- It is easy to later connect `/admin` to Supabase, Firebase, GitHub-backed CMS storage, or a headless CMS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build and checks

```bash
npm run build
npm run lint
```

## Content models

`lib/content.ts` contains typed models for:

- Profile and homepage text
- Projects
- Publications
- Research interests
- Education
- Experience
- Awards/leadership
- Skills

Each project supports title, slug, descriptions, category, date, status, technologies, thumbnail, galleries, videos, GitHub/paper/dataset/demo/documentation links, results, contribution, overview, motivation, and methodology.

## How to add a project

Use `/admin` as the beginner-friendly interface concept. Until persistent storage is connected, add a project object to `projects` in `lib/content.ts` with:

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
- `overview`
- `motivation`
- `methodology`

The project detail page is generated automatically at `/projects/[slug]`.

## How to add images

Upload images to `public/media` and reference them as `/media/file-name.webp` or `/media/file-name.png` in a project's `thumbnail` or `images` array. Use descriptive `alt` text and captions.

Supported formats: JPG, PNG, WebP, SVG, GIF.

## How to add videos

For lightweight pages, prefer YouTube/Vimeo URLs in `links.video`. For direct video files, place compressed MP4/WebM files in `public/media` and add them to the `videos` array.

Supported formats: MP4 and WebM.

## How to add GitHub repositories

Paste the repository URL into a project's `links.github` field. The UI displays a repository button. A future production enhancement can fetch GitHub metadata on demand and cache repository name, description, stars, and primary language, while allowing manual override.

## How to add publications

Add a publication object in `publications` with title, authors, venue/status, year, DOI, paper link, PDF link, GitHub, dataset, demo, video, and figure links when available. If information is unknown, leave it blank or mark it pending.

## How to replace CV

Replace `public/cv/Shivam-Kumar-Jha-CV-placeholder.pdf` with the final CV PDF, or upload a new PDF through a future connected admin storage workflow and update `profile.cv`.

## Authentication configuration

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Set strong values:

```bash
ADMIN_USERNAME=your-admin-name
ADMIN_PASSWORD=your-long-random-password
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

For production, implement middleware or a CMS provider authentication layer before exposing editing actions. Do not commit `.env.local`.

## Deployment

1. Push the repository to GitHub.
2. Import it into Vercel or Netlify.
3. Set `NEXT_PUBLIC_SITE_URL` and admin credentials in the deployment dashboard.
4. Run the production build command: `npm run build`.
5. Replace placeholder social profile links and CV before sharing with professors.

## Important production notes

- The `/admin` page is currently a secure-design prototype and must be connected to real authentication and persistence before live editing is enabled.
- The committed CV is a placeholder, not the original resume PDF.
- Social links are placeholders because GitHub, LinkedIn, Google Scholar, and ORCID URLs were not provided.
