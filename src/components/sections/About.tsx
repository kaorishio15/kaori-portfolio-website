import SectionLabel from '../../components/ui/SectionLabel'

export default function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-18 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 md:grid-cols-[320px_1fr]">
        <div>
          <SectionLabel index="04" label="About" />
          <div className="aspect-[4/5] w-full max-w-xs overflow-hidden border border-border bg-bg-raised">
            <img
              src="/images/kaori-sec-headshot-2.jpg"
              alt="Headshot picture"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-2xl">
          <h2 className="font-display text-2xl text-text md:text-3xl">
            Computer Science at Texas A&M
          </h2>

          <p className="mt-6 text-[1.05rem] leading-relaxed text-text-muted">
            I got into programming through wanting to know why things worked the way
            they did, and that habit hasn't really gone away &mdash; I still end up
            reading source code and RFCs for fun. Most of my time outside class goes
            into hackathons, personal projects, and slowly getting better at breaking
            things in a controlled way.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p className="font-mono text-xs text-secondary">Interests</p>
              <ul className="mt-3 space-y-1.5 text-text-muted">
                <li>Network security</li>
                <li>Cybersecurity</li>
                <li>Software development</li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs text-secondary">Currently learning</p>
              <ul className="mt-3 space-y-1.5 text-text-muted">
                <li>Offensive security fundamentals</li>
                <li>Distributed systems</li>
                <li>Rust</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-l-2 border-accent pl-5">
            <p className="font-mono text-xs text-secondary">Looking for</p>
            <p className="mt-2 text-text-muted">
              Junior Computer Science student seeking a Summer 2027 Software Engineering or
              Cybersecurity Internship where I can apply my technical skills, contribute to
              impactful solutions, gain hands-on industry experience, and continue expanding
              my knowledge in software development and cybersecurity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
