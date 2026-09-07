export interface NavLink {
  label: string
  href: string
  /** true if this should open in a new tab rather than scroll to a section */
  external?: boolean
}

export const navLinks: NavLink[] = [
  { label: 'Blog', href: 'https://technical-blog-nu.vercel.app/', external: true },
  { label: 'Projects', href: '#projects' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Qualifications', href: '#qualifications' },
  { label: 'About', href: '#about' },
]
