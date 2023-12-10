import { Skeleton } from '@mui/material'

export default function ProjectLighthouseSkeleton() {
  function getCategory(index: number) {
    switch (index) {
      case 0:
        return 'Performance'
      case 1:
        return 'Accessibilité'
      case 2:
        return 'Meilleures pratiques'
      case 3:
        return 'SEO'
      case 4:
        return 'PWA'
    }
  }

  return (
    <div className='container mx-auto my-10 px-4'>
      <div className='flex flex-wrap justify-center gap-8'>
        {[...Array(5)].map((_, i) => (
          <div key={i} className='flex w-28 flex-col items-center'>
            <Skeleton
              animation='wave'
              variant='circular'
              height={64}
              width={64}
            />
            <span className='mt-2 text-center text-sm font-medium lg:text-[0.9375rem]'>
              {getCategory(i)}
            </span>
          </div>
        ))}
      </div>
      <span className='mt-5 block text-center text-[0.9375rem]/7 font-light'>
        Généré par Lighthouse 10.4.0
      </span>
    </div>
  )
}
