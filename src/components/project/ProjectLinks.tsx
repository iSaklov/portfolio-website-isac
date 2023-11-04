import Image from 'next/image'
import { Project } from '@/interfaces/Project'
import LinkToDeployIcon from '@/assets/images/icons/akar-icons_link-chain.svg'
import LinkToGithubIcon from '@/assets/images/icons/akar-icons_github-fill.svg'

export default function ProjectLinks({ links }: { links: Project['links'] }) {
  return (
    <div className='mt-10 flex justify-between'>
      <div>
        <a href={links.toDeploy} className='flex items-center'>
          <Image
            src={LinkToDeployIcon}
            alt='lien vers le projet en ligne'
            className='mr-2 inline-block'
          />{' '}
          Aperçu en direct
        </a>
      </div>
      <div>
        <a href={links.toGithub} className='flex items-center'>
          <Image
            src={LinkToGithubIcon}
            alt='lien vers le code du projet'
            className='mr-2 inline-block'
          />{' '}
          Afficher le code
        </a>
      </div>
    </div>
  )
}
