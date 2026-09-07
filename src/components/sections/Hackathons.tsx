import SectionLabel from '../../components/ui/SectionLabel'
import HackathonCard from '../../components/ui/HackathonCard'
import { hackathons } from '../../data/hackathons'

export default function Hackathons() {
  return (
    <section id="hackathons" className="border-t border-border px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="02" label="Hackathons" />
    
        <div className="mt-14 flex flex-col gap-10">
          {hackathons.map((hackathon) => (
            <HackathonCard key={hackathon.id} hackathon={hackathon} />
          ))}
        </div>
      </div>
    </section>
  )
}
