import { Skeleton } from '@mui/material'

export default function ProjectTechsSkeleton({
  length = 3
}: {
  length?: number
}) {
  return (
    <>
      {Array.from({ length }).map((_, i) => (
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
      ))}
    </>
  )
}
