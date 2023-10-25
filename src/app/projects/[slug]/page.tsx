// import { getItem } from '@/utils/get-item'
import { Suspense } from 'react'
import ProjectHeader from '@/components/project/ProjectHeader'

export default function ProjectPage({
  params: { id }
}: {
  params: { id: string }
}) {
  // const item = await getItem(id)

  return (
    <div className='min-h-screen pt-80'>
      <h1>ID: {id}</h1>
      {/* <Suspense fallback={<Loading />}> */}
      <Suspense fallback={<p>Loading weather...</p>}>
        {/* <ProjectHeader /> */}
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        {/* <ProjectImages /> */}
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        {/* <ProjectLighthouse /> */}
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        {/* <ProjectDetails /> */}
      </Suspense>
    </div>
  )
}
