export interface Project {
  id: string
  title: string
  category: string
  year: string
  description: string
  tags: string[]
  image?: string
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    id: 'algovisualizer',
    title: 'AlgoVisualizer',
    category: 'Developer Tool',
    year: '2026',
    description:
      'An interactive algorithm visualizer that steps through sorting and pathfinding algorithms frame by frame, with adjustable speed and array size to build intuition for how each one actually behaves.',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    image: '/images/algovisualizer-image.png',
    github: 'https://github.com/kaorishio15/algovisualizer',
  },
  {
    id: 'tradescope',
    title: 'TradeScope',
    category: 'Data / Finance',
    year: '2026',
    description:
      'A market-data dashboard that pulls live equity prices and overlays technical indicators, built to explore how far a lightweight charting stack can go without a heavyweight framework.',
    tags: ['Python', 'React', 'REST API'],
    github: 'https://github.com/kaorishioyama/tradescope',
  },
  {
    id: 'blog',
    title: 'Technical Blog',
    category: 'Learning / Cybersecurity',
    year: '2026',
    description:
      'Developed a personal technical blog to document ongoing learning in programming and cybersecurity, featuring an automated content system and reusable client-side architecture for dynamically discovering, rendering, and organizing blog posts.',
    tags: ['React', 'TypeScript', 'MDX'],
    image: '/images/technical-blog-thumbnail.png',
    github: 'https://github.com/kaorishio15/technical-blog',
  },
  {
    id: 'campus-eats',
    title: 'CampusEats',
    category: 'Full-Stack Web App',
    year: '2025',
    description:
      'A campus dining companion that aggregates dining-hall menus and wait times into a single feed, with a Node/Express backend and a React front end deployed for A&M students.',
    tags: ['Next.js', 'Node.js', 'SQL'],
    github: 'https://github.com/kaorishioyama/campus-eats',
  },
]
