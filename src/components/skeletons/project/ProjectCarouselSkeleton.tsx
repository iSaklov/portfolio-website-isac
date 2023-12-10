import { Skeleton } from '@mui/material'

export default function ProjectCarouselSkeleton() {
  return (
    <div className='my-10 aspect-[16/9] h-[384px] w-full shadow-sm md:h-[448px] lg:h-[512px] xl:h-[576px] 2xl:h-[640px]'>
      <Skeleton animation='wave' height='100%' width='100%' />
    </div>
  )
}
