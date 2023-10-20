import { Suspense } from 'react'
import ProjectHeader from '@/components/project/ProjectHeader'

export default function Project({ params }: { params: { slug: string } }) {
  return (
    <div className='min-h-screen pt-80'>
      {/* <Suspense fallback={<Loading />}> */}
      <Suspense fallback={<p>Loading weather...</p>}>
        <ProjectHeader name={params.slug} />
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
