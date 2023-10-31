import { Suspense } from 'react'
import { Project } from '@/interfaces/Project'
import { getRecord } from '@/database/get-record'
import ProjectHeader from '@/components/project/ProjectHeader'
import ProjectLighthouse from '@/components/project/ProjectLighthouse'
import ProjectDescription from '@/components/project/ProjectDescription'
import ProjectLinks from '@/components/project/ProjectLinks'

export default async function ProjectPage({
  params: { id }
}: {
  params: { id: string }
}) {
  //   params: { slug }
  // }: {
  //   params: { slug: string }
  // }) {

  const project : Project = await getRecord(id)

  return (
    <div className='min-h-screen pt-80 mx-auto px-4'>
      {/* <Suspense fallback={<Loading />}> */}
      <Suspense fallback={<p>Loading project...</p>}>
        <ProjectHeader
          name={project.name}
          date={project.date}
          city={project.city}
          techStack={project.techStack}
				/>
				<ProjectLighthouse lighthouse={project.lighthouse} />
				<ProjectDescription description={project.fullDescription} />
				<ProjectLinks links={project.links} />
      </Suspense>
    </div>
  )
}
