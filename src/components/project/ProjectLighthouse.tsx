import { Project } from '@/interfaces/Project'

export default function ProjectLighthouse({
  lighthouse
}: {
  lighthouse: Project['lighthouse']
}) {
  return (
    <div>
      <div className='flex gap-x-4'>
        <p>Performances : {lighthouse.performance}</p>
        <p>Accessibilité : {lighthouse.accessibility}</p>
        <p>Bonnes pratiques : {lighthouse.bestPractices}</p>
        <p>SEO : {lighthouse.seo}</p>
        <p>Progressive Web App : {lighthouse.pwa ? 'Oui' : 'Non'}</p>
      </div>
      <p>Généré par Lighthouse 10.4.0</p>
    </div>
  )
}
