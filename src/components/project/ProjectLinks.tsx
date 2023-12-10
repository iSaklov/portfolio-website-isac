import Image from 'next/image'
import { getRecord } from '@/database/getRecord'
import { projectRecordType } from '@/database/airtable'
import { Project } from '@/interfaces/Project'
import LinkToDeployIcon from '@/assets/images/icons/akar-icons_link-chain.svg'
import LinkToGithubIcon from '@/assets/images/icons/akar-icons_github-fill.svg'

export default async function ProjectLinks({
  // links,
  projectId
}: {
  // links: Project['links']
  projectId: string
}) {
  const { links }: Project = await getRecord(projectId, projectRecordType)

  return (
    <div className='mt-10 flex justify-between'>
      <a
        href={links.toDeploy}
        target='_blank'
        className='group/link relative flex items-center'
      >
        <Image
          src={LinkToDeployIcon}
          alt='icone du lien vers le déploiement du projet'
          className='mr-2 h-8 max-h-[32px] w-auto max-w-[32px] transition-transform duration-300 group-hover/link:scale-105'
        />{' '}
        <span className='text-lg font-light transition-transform duration-300 group-hover/link:scale-105'>
          Aperçu en direct
        </span>
        <span className='invisible absolute inset-x-0 bottom-1 left-9 h-px origin-bottom-left scale-x-100 transform bg-primary-dark transition-transform duration-300 group-hover/link:scale-x-0 md:visible md:block' />
      </a>

      <a
        href={links.toGithub}
        target='_blank'
        className='group/link relative flex items-center'
      >
        <Image
          src={LinkToGithubIcon}
          alt='icone du lien vers le code source du projet'
          className='mr-2 h-8 max-h-[32px] w-auto max-w-[32px] transition-transform duration-300 group-hover/link:scale-105'
        />{' '}
        <span className='text-lg font-light transition-transform duration-300 group-hover/link:scale-105'>
          Afficher le code
        </span>
        <span className='invisible absolute inset-x-0 bottom-1 left-9 h-px origin-bottom-left scale-x-100 transform bg-primary-dark transition-transform duration-300 group-hover/link:scale-x-0 md:visible md:block' />
      </a>
    </div>
  )
}
