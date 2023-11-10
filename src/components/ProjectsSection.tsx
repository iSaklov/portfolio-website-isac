import { getRecords } from '@/database/get-records'
import Section from './layout/Section'
import ProjectsPagination from '@/components/ProjectsPagination'
import { Project } from '@/interfaces/Project'

export default async function ProjectsSection() {
  const idSection = 'projects'
  const title = 'Projects'

  const projects: Project[] = (await getRecords()) || []

  return (
    <Section id={idSection} title={title}>
      <ProjectsPagination projects={projects} />
    </Section>
  )
}
