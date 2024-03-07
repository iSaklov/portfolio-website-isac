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
import TechStackListSkeleton from '@/components/skeletons/project/TechStackListSkeleton'

export default async function Project({ projectId }: { projectId: string }) {
  const {
    name,
    date,
    city,
    techStack,
    images,
    lighthouse,
    fullDescription,
    links
  } = (await getRecord(projectId, projectRecordType)) as Project

  return (
    <>
      <ProjectHeader name={name} date={date} city={city}>
        <Suspense fallback={<TechStackListSkeleton />}>
          <TechStackList projectTechStack={techStack} />
        </Suspense>
      </ProjectHeader>
      <ProjectCarousel images={images} />
      <ProjectLighthouse lighthouse={lighthouse} />
      <ProjectDescription description={fullDescription} />
      <ProjectLinks links={links} />
    </>
  )
}
