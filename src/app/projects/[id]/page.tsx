import { Suspense } from 'react'
import Link from 'next/link'
import { getRecord } from '@/database/getRecord'
import { projectRecordType } from '@/database/airtable'
import CircularIndeterminate from '@/components/common/CircularIndeterminate'
import ProjectHeader from '@/components/project/ProjectHeader'
import ProjectHeaderSkeleton from '@/components/project/ProjectHeaderSkeleton'
import TechStackList from '@/components/project/TechStackList'
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

  // const project: Project = await getRecord(id, projectRecordType)
  const initialProjectData = await getRecord(id, projectRecordType)

  return (
    <div className='container mx-auto min-h-screen max-w-2xl px-4 pb-10 pt-20 md:pt-60 lg:max-w-3xl lg:pb-20 lg:pt-80 xl:max-w-4xl'>
      {/* <Suspense fallback={<ProjectHeaderSkeleton />}> */}
      <ProjectHeader id={id} project={initialProjectData}>
        <Suspense fallback={<CircularIndeterminate />}>
          <TechStackList projectTechStack={initialProjectData.techStack} />
        </Suspense>
      </ProjectHeader>
      {/* </Suspense> */}
      <Suspense fallback={<CircularIndeterminate />}>
        <ProjectCarousel projectId={id} project={initialProjectData} />
      </Suspense>
      <Suspense fallback={<CircularIndeterminate />}>
        <ProjectLighthouse projectId={id} />
      </Suspense>
      <Suspense fallback={<CircularIndeterminate />}>
        <ProjectDescription projectId={id} />
      </Suspense>
      <Suspense fallback={<CircularIndeterminate />}>
        <ProjectLinks projectId={id} />
      </Suspense>
      <Link href='/' className='mt-20 flex items-center justify-center'>
        <Button type='button' variant='secondary'>
          {"< Retour à l'Accueil"}
        </Button>
      </Link>
    </div>
  )
}
