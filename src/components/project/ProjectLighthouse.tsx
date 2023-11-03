import { Project } from '@/interfaces/Project'
import Indicator from '@/components/common/Indicator'

export default function ProjectLighthouse({
  lighthouse
}: {
  lighthouse: Project['lighthouse']
}) {
  return (
    <div className='mx-auto my-10'>
      <div className='flex justify-center gap-x-8'>
        {Object.entries(lighthouse).map(([key, value]) => {
          return <Indicator key={key} keyName={key} value={value} />
        })}
      </div>
      <span className='__poppins_light_low mt-5 block text-center'>
        Généré par Lighthouse 10.4.0
      </span>
    </div>
  )
}
