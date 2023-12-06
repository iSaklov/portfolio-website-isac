import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/interfaces/Project'
import { Tech } from '@/interfaces/Tech'
import LinkIcon from '@/assets/images/icons/akar-icons_link-chain.svg'
import GithubIcon from '@/assets/images/icons/akar-icons_github-fill.svg'

export default function Card({
  project,
  techs
}: {
  project: Project
  techs: Tech[]
}) {
  return (
    <Link
      key={project.id}
      // href={`/projects/${encodeURIComponent(project.slug)}`}
      href={`/projects/${project.id}`}
      legacyBehavior
    >
      <div className='group mx-auto flex w-full max-w-sm flex-col justify-between overflow-hidden rounded-lg shadow-md hover:shadow-xl'>
        <div className='relative aspect-[4/3]'>
          <Image
            src={project.cover[0].url}
            alt={`Screenshot du projet ${project.name}`}
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8FqhbDwAFbgHl+9JQRQAAAABJRU5ErkJggg=='
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='h-full w-full object-cover object-center group-hover:opacity-75'
          />
        </div>
        <div className='flex-1 px-5 py-5'>
          <h4 className='text-2xl font-medium md:text-3xl lg:text-[1.75rem]'>
            {project.name}
          </h4>
          <p className='mt-5 line-clamp-5 text-justify font-light leading-relaxed'>
            {project.shortDescription}
          </p>
          <h5 className='mt-5 text-base text-highlight-gray'>
            Tech stack :{' '}
            {project.techStack.map((techId, index) => {
              const matchingTech = techs.find((tech) => tech.id === techId)

              return (
                <span
                  key={techId}
                  className='text-sm font-light text-subtle-blue'
                >
                  {matchingTech?.name}
                  {index < project.techStack.length - 1 && ', '}
                </span>
              )
            })}
          </h5>
        </div>
        <div className='flex justify-between px-5 pb-5'>
          <a
            href={project.links.toDeploy}
            target='_blank'
            rel='noreferrer noopener'
            className='group/link relative mr-2 inline-block text-sm leading-6 md:mr-0'
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <Image
              src={LinkIcon}
              alt=''
              className='mr-2 inline-block h-auto w-6 align-middle transition-transform duration-300 group-hover/link:scale-110 lg:mr-1 xl:mr-2'
            />
            <span className=''>Aperçu en direct</span>
            <span className='invisible absolute bottom-1 left-0 right-0 ml-8 h-px origin-bottom-left scale-x-100 transform bg-primary-dark transition-transform duration-300 group-hover/link:scale-x-0 md:visible md:block'></span>
          </a>
          <a
            href={project.links.toGithub}
            target='_blanck'
            className='group/link relative inline-block text-sm leading-6'
            rel='noreferrer noopener'
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <Image
              src={GithubIcon}
              alt=''
              className='mr-2 inline-block h-auto w-6 align-middle transition-transform duration-300 group-hover/link:scale-110 lg:mr-1 xl:mr-2'
            />
            <span className=''>Afficher le code</span>
            <span className='invisible absolute bottom-1 left-0 right-0 ml-8 h-px origin-bottom-left scale-x-100 transform bg-primary-dark transition-transform duration-300 group-hover/link:scale-x-0 md:visible md:block'></span>
          </a>
        </div>
      </div>
    </Link>
  )
}
