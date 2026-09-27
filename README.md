# Portfolio Website — Kaori Shioyama

[![Built with React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

Welcome! I'm Kaori, a Computer Science student at Texas A&M University. 

This repository contains the source code for my personal portfolio website, where I showcase software projects, hackathon submissions, technical write-ups, and verified qualifications.

---

## 📌 Features & Sections

- **Projects:** Featured software engineering and technical builds with interactive links, tech stack details, and repository access.
- **Hackathons:** Highlighting team hackathon projects, awards, Devpost links, and code repos.
- **About Me:** Overview of my academic journey, technical interests, and leadership roles.
- **Qualifications & Skills:** Clean categorization of programming languages, frameworks, cybersecurity tools, and certifications.
- **Blog / Learning Tracker:** Documenting hands-on practice across platforms like TryHackMe and PicoCTF, plus home lab setups.

---

## 🛠️ Tech Stack & Design

- **Framework & Language:** React, TypeScript, Vite
- **Styling & Icons:** Tailwind CSS, Lucide React, FontAwesome / React Icons
- **Design Palette:** Minimalist steel-blue and ice-white theme with responsive layouts and custom dark/light mode accents.

---

## 🚀 Getting Started

To run this project locally on your machine:

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ (recommended)
- [pnpm](https://pnpm.io/) (this repo uses a `pnpm-lock.yaml`)

If you don't have pnpm yet:

```bash
npm install -g pnpm
```

### Installation & Local Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kaorishio15/kaori-portfolio-website.git
   cd kaori-portfolio-website
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Start the development server:**

   ```bash
   pnpm dev
   ```

   Vite will print a local URL, usually `http://localhost:5173`. Open that in your browser.

If you already have the repo cloned, skip step 1 and run `pnpm install` then `pnpm dev` from the project folder.

### Other scripts

- `pnpm build` — production build
- `pnpm preview` — serve the production build locally
- `pnpm lint` — run ESLint

If you prefer npm instead of pnpm, you can use `npm install` and `npm run dev` (and the matching `npm run` commands above).