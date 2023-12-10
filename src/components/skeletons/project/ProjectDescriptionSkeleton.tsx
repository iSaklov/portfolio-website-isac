import { Skeleton } from '@mui/material'

export default function ProjectDescriptionSkeleton() {
  return (
    <article className='prose max-w-none prose-p:text-justify'>
      {[...Array(3)].map((_, i) => (
        <div key={i}>
          <Skeleton
            animation='wave'
            height={32}
            width={i === 0 ? '20%' : i === 1 ? '15%' : '25%'}
            style={{ marginBottom: 12, marginTop: i !== 0 ? 32 : 0 }}
          />
          {[...Array(9)].map((_, i) => (
            <Skeleton
              key={i}
              animation='wave'
              height={24}
              width={i === 8 ? '80%' : '100%'}
            />
          ))}
        </div>
      ))}
    </article>
  )
}
