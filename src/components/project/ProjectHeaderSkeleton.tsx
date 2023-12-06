import { Skeleton } from '@mui/material'

export default function ProjectHeaderSkeleton() {
  return (
    <div>
      <h1 className='__heading-1 lowercase'>
        titre<span className='text-accent-orange'>.</span> <Skeleton />
      </h1>
      <div className='mt-10'>
        <h6 className='__heading-6'>
          date<span className='text-accent-orange'>.</span>{' '}
          <span className='text-base/7 font-light'>
            <Skeleton />
          </span>
        </h6>
        <h6 className='__heading-6'>
          city<span className='text-accent-orange'>.</span>{' '}
          <span className='text-base/7 font-light'>
            <Skeleton />
          </span>
        </h6>
      </div>
    </div>
  )
}
