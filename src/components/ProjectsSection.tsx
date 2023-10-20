import Section from './layout/Section'
import projects from '@/datas/projects'
import Card from './Card'

export default function ProjectsSection() {
  const idSection = 'projects'
  const title = 'Projects'
  return (
    <Section id={idSection} title={title}>
      {/* <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'> */}
      <div className='flex flex-wrap justify-between'>
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
