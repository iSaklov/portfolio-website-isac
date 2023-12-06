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
      <a href={links.toDeploy} target='_blank' className='flex items-center'>
        <Image
          src={LinkToDeployIcon}
          alt='lien vers le déploiement du projet'
          className='mr-2 inline-block h-8 max-h-[32px] w-auto max-w-[32px]'
        />{' '}
        Aperçu en direct
      </a>

      <a href={links.toGithub} target='_blank' className='flex items-center'>
        <Image
          src={LinkToGithubIcon}
          alt='lien vers le code source du projet'
          className='mr-2 inline-block h-8 max-h-[32px] w-auto max-w-[32px]'
        />{' '}
        Afficher le code
      </a>
    </div>
  )
}
