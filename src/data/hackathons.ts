export interface Hackathon {
  id: string
  title: string
  event: string
  description: string
  technologies: string[]
  award?: string
  github?: string
  devpost?: string
}

export const hackathons: Hackathon[] = [
  {
    id: 'wingspan',
    title: 'Wingspan',
    event: 'HackTAMU 2026',
    description:
      'A flight-delay predictor for student travelers that combines historical carrier data with live weather feeds to flag high-risk connections before check-in.',
    technologies: ['Python', 'Flask', 'React', 'Weather API'],
    award: 'Winner: AggieX Startup',
    github: 'https://github.com/kaorishioyama/wingspan',
    devpost: 'https://devpost.com/software/wingspan',
  },
  {
    id: 'how-de-gree',
    title: 'How-De-gree',
    event: 'TAMUhack 2025',
    description:
      'A degree-plan simulator that lets students test "what if" course sequences against Texas A&M requirements and immediately see the effect on graduation timeline.',
    technologies: ['TypeScript', 'Next.js', 'PostgreSQL'],
    github: 'https://github.com/kaorishioyama/how-de-gree',
    devpost: 'https://devpost.com/software/how-de-gree',
  },
  {
    id: 'seatflex',
    title: 'SeatFlex',
    event: 'HowdyHack 2025',
    description:
      'A dynamic seating-chart tool for large lecture halls that balances group requests with accessibility needs, generating a conflict-free layout in seconds.',
    technologies: ['JavaScript', 'Node.js', 'Express'],
    award: 'Best Beginner Software Hack',
    github: 'https://github.com/kaorishioyama/seatflex',
    devpost: 'https://devpost.com/software/seatflex',
  },
]
