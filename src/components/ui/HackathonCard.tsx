import { ExternalLink } from 'lucide-react'
import type { Hackathon } from '../../data/hackathons'

interface HackathonCardProps {
  hackathon: Hackathon
}

export default function HackathonCard({ hackathon }: HackathonCardProps) {
  return (
    <article className="border-l-2 border-border pl-6 py-1 hover:border-accent transition-colors duration-300">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-lg text-text">{hackathon.title}</h3>
        <span className="font-mono text-xs text-text-muted">{hackathon.event}</span>
      </div>

      {hackathon.award && (
        <p className="mt-1 font-mono text-xs text-tertiary">{hackathon.award}</p>
      )}

      <p className="mt-3 text-[0.95rem] leading-relaxed text-text-muted max-w-[62ch]">
        {hackathon.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {hackathon.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-sm border border-border px-2 py-1 font-mono text-[0.7rem] text-text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center gap-5">
        {hackathon.devpost && (
          <a
            href={hackathon.devpost}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-text hover:text-accent transition-colors"
          >
            Devpost
            <ExternalLink size={13} />
          </a>
        )}
      </div>
    </article>
  )
}
