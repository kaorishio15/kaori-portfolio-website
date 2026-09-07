import SectionLabel from '../../components/ui/SectionLabel'
import { skillCategories, certificates } from '../../data/qualifications'
import { ExternalLink } from 'lucide-react'

export default function Qualifications() {
  return (
    <section id="qualifications" className="border-t border-border px-6 py-18 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="03" label="Qualifications" />

        {/* Skills Subsection */}
        <div className="mt-14">
          <p className="font-mono text-xs uppercase tracking-wider text-secondary">
            Skills
          </p>

          <div className="mt-6 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-3">
            {skillCategories.map((group) => (
              <div key={group.category}>
                <p className="font-mono text-xs uppercase tracking-wider text-secondary/80">
                  {group.category}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-[1.05rem] text-text">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Subsection */}
        <div className="mt-20 border-t border-border/60 pt-10">
          <p className="font-mono text-xs uppercase tracking-wider text-secondary">
            Certifications
          </p>

          {/* Full-Width Stacked List Layout */}
          <div className="mt-6 flex flex-col gap-4">
            {certificates.map((cert) => {
              // Determine whether it's expected or issued based on cert status/properties
              const isExpected = cert.status?.toLowerCase().includes('expected') || cert.status?.toLowerCase().includes('in progress')
              const dateLabel = isExpected ? 'Expected' : 'Issued'

              return (
                <div
                  key={cert.title}
                  className="group flex w-full flex-col justify-between rounded-lg border border-border/50 bg-background/50 p-5 transition-colors hover:border-border sm:flex-row sm:items-center"
                >
                  {/* Left Side: Title & Subtitle Date */}
                  <div className="flex flex-col">
                    <h3 className="font-sans text-[1.05rem] font-medium text-text">
                      {cert.title}
                    </h3>
                    {cert.date && (
                      <span className="mt-0.5 font-mono text-xs text-muted-text">
                        {dateLabel}: {cert.date}
                      </span>
                    )}
                  </div>

                  {/* Right Side: Status Tag & Verification Link */}
                  <div className="mt-4 flex items-center gap-3 sm:mt-0">
                    {cert.status && (
                      <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 font-sans text-xs font-medium text-secondary">
                        {cert.status}
                      </span>
                    )}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-secondary hover:underline"
                      >
                        Verify Credential
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}