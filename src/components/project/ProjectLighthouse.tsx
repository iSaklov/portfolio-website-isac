import { Project } from '@/interfaces/Project'
import Indicator from '@/components/common/Indicator'

export default function ProjectLighthouse({
  lighthouse
}: {
  lighthouse: Project['lighthouse']
}) {
  return (
    <div>
      <div className='flex items-center justify-center gap-x-4'>
        <Indicator result={lighthouse.performance} />
        <Indicator result={lighthouse.accessibility} />
        <Indicator result={lighthouse.bestPractices} />
        <Indicator result={lighthouse.seo} />
        <Indicator result={lighthouse.pwa} />
      </div>
      <p>Généré par Lighthouse 10.4.0</p>
    </div>
  )
}
