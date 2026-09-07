import SectionLabel from '../../components/ui/SectionLabel'
import ProjectCard from '../../components/ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="01" label="Projects" />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
