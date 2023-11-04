import { Suspense } from 'react'
import Link from 'next/link'
import { Project } from '@/interfaces/Project'
import { getRecord } from '@/database/get-record'
import ProjectHeader from '@/components/project/ProjectHeader'
import ProjectCarousel from '@/components/project/ProjectCarousel'
import ProjectLighthouse from '@/components/project/ProjectLighthouse'
import ProjectDescription from '@/components/project/ProjectDescription'
import ProjectLinks from '@/components/project/ProjectLinks'
import Button from '@/components/common/Button'

export default async function ProjectPage({
  params: { id }
}: {
  params: { id: string }
}) {
  //   params: { slug }
  // }: {
  //   params: { slug: string }
  // }) {

  const project: Project = await getRecord(id)

  if (!project.images) {
    // Handling the case when 'images' is equal to undefined
    project.images = []
  }

  return (
    <div className='container mx-auto min-h-screen px-4 pb-20 pt-80'>
      {/* <Suspense fallback={<Loading />}> */}
      <Suspense fallback={<p>Loading project...</p>}>
        <ProjectHeader
          name={project.name}
          date={project.date}
          city={project.city}
          techStack={project.techStack}
        />
        <ProjectCarousel images={project.images} />
        <ProjectLighthouse lighthouse={project.lighthouse} />
        <ProjectDescription description={project.fullDescription} />
        <ProjectLinks links={project.links} />
      </Suspense>
      <Link
        href='/#projects'
        className='mt-20 flex items-center justify-center'
      >
        <Button type='secondary'>{'< Retour aux Projets'}</Button>
      </Link>
    </div>
  )
}
