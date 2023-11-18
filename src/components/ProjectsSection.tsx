import { getRecords } from '@/database/get-records'
import Section from '@/components/layout/Section'
import ProjectsPagination from '@/components/ProjectsPagination'
import { projectRecordType } from '@/database/airtable'

export default async function ProjectsSection() {
  const idSection = 'projects'
  const title = 'Projects'

  const projects = (await getRecords(projectRecordType)) || []

  return (
    <Section id={idSection} title={title}>
      <ProjectsPagination projects={projects} />
    </Section>
  )
}
