export interface SkillCategory {
  category: string
  skills: string[]
}

export interface Certificate {
  title: string
  issuer: string
  date: string
  status?: string
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['C++', 'Python', 'Java', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frameworks',
    skills: ['React', 'Node.js', 'Express', 'Next.js'],
  },
  {
    category: 'Cybersecurity',
    skills: ['Linux', 'Git', 'Docker', 'Wireshark', 'Nmap', 'Burp Suite'],
  },
]

export interface Certificate {
  title: string
  issuer: string
  date: string
  status?: string
  credentialUrl?: string // Can be a local path like "/certificates/az900.pdf" or an external URL
}

export const certificates: Certificate[] = [
  {
    title: 'AZ-900 | Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'Issued Jan 2025',
    credentialUrl: 'https://learn.microsoft.com/en-us/users/kaorishioyama-2187/credentials/3a6e9c6a91dd122c?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Google',
    date: 'Issued Jan 2025',
    credentialUrl: 'https://coursera.org/share/15d2c3ca4bf21f2577842167f80c3f20', // or Coursera verification link
  },
  {
    title: 'CompTIA Security+ Certification',
    issuer: 'CompTIA',
    date: 'Expected Sep 2026',
    status: 'In Progress',
  },
]