# Kaori Shioyama — Portfolio

A personal portfolio site built with React, TypeScript, Vite, and Tailwind CSS.

## Getting started

```bash
pnpm install
pnpm dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
pnpm build
pnpm preview
```

## What's on the site

- **Hero** — name, Texas A&M / CS intro, and links to GitHub, LinkedIn, and email.
- **Projects** — pulled from `src/data/projects.ts`.
- **Hackathons** — pulled from `src/data/hackathons.ts`.
- **About** — headshot, background, interests, and what I'm looking for.
- **Skills** — grouped by category, pulled from `src/data/skills.ts`.

A light/dark theme toggle lives in the navbar (dark is the default).

## Project structure

```
public/
  images/            → static images (headshot, project screenshots)

src/
  app/
    App.tsx          → composes all sections into the page

  components/
    layout/
      Navbar.tsx      → nav links, mobile menu, active-section highlight, theme toggle
      Footer.tsx      → copyright + credit line

    sections/
      Hero.tsx        → landing/header section
      Projects.tsx    → renders a ProjectCard for each entry in data/projects.ts
      Hackathons.tsx  → renders a HackathonCard for each entry in data/hackathons.ts
      About.tsx       → headshot + bio
      Skills.tsx      → renders skill groups from data/skills.ts

    ui/
      SectionLabel.tsx   → the small "01 / Projects" marker above each section
      ProjectCard.tsx    → one project's card
      HackathonCard.tsx  → one hackathon's entry

  data/
    projects.ts     → edit this to add/remove/update projects — no UI code needed
    hackathons.ts   → same, for hackathons
    skills.ts       → same, for skills, grouped by category
    navigation.ts   → the navbar's links

  styles/
    fonts.css       → Google Fonts imports (Fraunces, DM Sans, DM Mono)
    tailwind.css    → Tailwind entry point
    theme.css       → color tokens, light/dark theme variables, base styles
    index.css       → combines the three above

  main.tsx          → React entry point
```

## Editing content

You generally don't need to touch component code to update the site's content:

- **New project** → add an object to `src/data/projects.ts`.
- **New hackathon** → add an object to `src/data/hackathons.ts`.
- **New skill** → add a string to the right category in `src/data/skills.ts`.
- **New nav link** → add an entry to `src/data/navigation.ts`.

## Replacing placeholder content

A few things are placeholders and worth swapping out before publishing:

- `public/images/headshot.jpg` — currently a generated monogram placeholder.
- `public/images/algovisualizer-image.png` — currently a generated placeholder chart.
- GitHub/LinkedIn/email links in `Hero.tsx`, and GitHub/Devpost links in `data/projects.ts` and `data/hackathons.ts`.
- The Blog link in `data/navigation.ts` points to a placeholder URL.

## Built with

- React + TypeScript
- Vite
- Tailwind CSS v4
- lucide-react (icons)
