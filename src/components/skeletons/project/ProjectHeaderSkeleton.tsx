import { Skeleton } from '@mui/material'
import TechStackListSkeleton from './TechStackListSkeleton'

export default function ProjectHeaderSkeleton() {
  return (
    <div>
      <h1 className='font-serif text-[2.125rem] lowercase tracking-tight md:text-5xl lg:text-[3.125rem]'>
        titre<span className='text-accent-orange'>.</span>{' '}
        <Skeleton
          animation='wave'
          width={200}
          style={{
            display: 'inline-block',
            verticalAlign: 'middle'
          }}
        />
      </h1>
      <div className='mt-10'>
        <h6 className='text-[0.9375rem]/7'>
          date<span className='text-accent-orange'>.</span>{' '}
          <span className='text-base font-light'>
            {' '}
            <Skeleton
              animation='wave'
              width={160}
              style={{
                display: 'inline-block',
                verticalAlign: 'middle'
              }}
            />
          </span>
        </h6>
        <h6 className='text-[0.9375rem]/7'>
          city<span className='text-accent-orange'>.</span>{' '}
          <span className='text-base font-light'>
            {' '}
            <Skeleton
              animation='wave'
              width={120}
              style={{
                display: 'inline-block',
                verticalAlign: 'middle'
              }}
            />
          </span>
        </h6>
        <h6 className='text-[0.9375rem]/7'>
          tech stack <span className='text-accent-orange'>:</span>{' '}
          {/* {[...Array(3)].map((_, i) => (
            <Skeleton
              key={i}
              animation='wave'
              variant='circular'
              height={32}
              width={32}
              style={{
                display: 'inline-block',
                verticalAlign: 'middle',
                marginLeft: '0.5rem',
                marginRight: '0.5rem'
              }}
            />
          ))} */}
          <TechStackListSkeleton />
        </h6>
      </div>
    </div>
  )
}
