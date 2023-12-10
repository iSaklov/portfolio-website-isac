import { Suspense } from 'react'
import { getRecord } from '@/database/getRecord'
import { projectRecordType } from '@/database/airtable'
import { Project } from '@/interfaces/Project'
import ProjectHeader from './ProjectHeader'
import TechStackList from './TechStackList'
import ProjectCarousel from './ProjectCarousel'
import ProjectLighthouse from './ProjectLighthouse'
import ProjectDescription from './ProjectDescription'
import ProjectLinks from './ProjectLinks'
import ProjectTechsSkeleton from '@/components/skeletons/project/ProjectTechsSkeleton'

export default async function Project({ projectId }: { projectId: string }) {
  const project: Project = await getRecord(projectId, projectRecordType)

  return (
    <>
      <ProjectHeader project={project}>
        <Suspense fallback={<ProjectTechsSkeleton />}>
          <TechStackList projectTechStack={project.techStack} />
        </Suspense>
      </ProjectHeader>
      <ProjectCarousel projectId={projectId} project={project} />
      <ProjectLighthouse projectId={projectId} />
      <ProjectDescription projectId={projectId} />
      <ProjectLinks projectId={projectId} />
    </>
  )
}
