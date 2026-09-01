# John Joseph Florina — Next.js Portfolio V3

A responsive Next.js App Router portfolio for Full-Stack, DevOps, AI/automation, WordPress and Blender/3D work.

## V3 additions

- Added Chess Learning Academy to the Full-Stack / product portfolio
- Added a dedicated WordPress portfolio with:
  - https://cjsunsetview.com/
  - https://gwpengage.com/
  - https://captainronsaz.com/
- Added a live GitHub portfolio section for the `florinalabs` organization
- GitHub cards load public repositories directly from the GitHub REST API in the browser
- Added GitHub links to the hero, About section and Contact section
- Preserved the existing 3D / Blender gallery and video
- Preserved resume download, LinkedIn and legacy portfolio links

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Sign in to Vercel.
3. Choose **Add New → Project**.
4. Import the repository.
5. Vercel detects Next.js automatically. Click **Deploy**.

## Main files

- `app/page.tsx` — main portfolio content, projects, WordPress sites, experience, skills and 3D work
- `app/components/GitHubPortfolio.tsx` — live public `florinalabs` repository cards
- `app/globals.css` — complete responsive design
- `app/layout.tsx` — SEO metadata
- `public/3d/` — Blender renders and video
- `public/john-joseph-florina.jpg` — profile image
- `public/John_Joseph_Florina_Resume.pdf` — resume

## GitHub API note

The GitHub section uses the unauthenticated public GitHub API from the visitor's browser. If GitHub rate-limits a request, the section gracefully falls back to a direct link to the organization repository page.
