import { Suspense } from 'react'
import Link from 'next/link'
// import { getRecord } from '@/database/getRecord'
// import { projectRecordType } from '@/database/airtable'
// import { Project } from '@/interfaces/Project'
import Project from '@/components/project/Project'
import ProjectSkeleton from '@/components/skeletons/project/ProjectSkeleton'
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

  return (
    <div className='container mx-auto min-h-screen max-w-2xl px-4 pb-10 pt-20 md:pt-60 lg:max-w-3xl lg:pb-20 lg:pt-80 xl:max-w-4xl'>
      <Suspense fallback={<ProjectSkeleton />}>
        <Project projectId={id} />
      </Suspense>
      <Link href='/' className='mx-auto mt-20 block w-max'>
        <Button type='button' variant='secondary'>
          {"< Retour à l'Accueil"}
        </Button>
      </Link>
    </div>
  )
}
