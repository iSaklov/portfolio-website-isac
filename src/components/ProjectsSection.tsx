import { getRecords } from '@/database/get-records'
import Section from './layout/Section'
import ProjectsPagination from '@/components/ProjectsPagination'
import Card from './Card'

export default async function ProjectsSection() {
  const idSection = 'projects'
  const title = 'Projects'

  const projects = await getRecords()

  return (
    <Section id={idSection} title={title}>
      <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        {/* {projects?.map((project) => (
          <Card key={project.id} project={project} />
        ))} */}
        <ProjectsPagination projects={projects} />
      </div>
    </Section>
  )
}
