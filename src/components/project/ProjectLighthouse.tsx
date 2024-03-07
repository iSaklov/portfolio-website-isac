import { Project } from '@/interfaces/Project'
import IndicatorLighthouse from '@/components/common/indicatorLigthhouse/Default'

export default async function ProjectLighthouse({
  lighthouse
}: {
  lighthouse: Project['lighthouse']
}) {
  return (
    <div className='container mx-auto my-10 px-4'>
      <div className='flex flex-wrap justify-center gap-8'>
        {Object.entries(lighthouse).map(([key, value]) => {
          return <IndicatorLighthouse key={key} keyName={key} value={value} />
        })}
      </div>
      <span className='mt-5 block text-center text-[0.9375rem]/7 font-light'>
        Généré par Lighthouse 10.4.0
      </span>
    </div>
  )
}
