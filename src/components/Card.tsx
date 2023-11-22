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
    <div className='group mx-auto flex w-full max-w-sm flex-col justify-between overflow-hidden rounded-lg pb-5 shadow-md hover:shadow-xl'>
      <Link
        key={project.id}
        // href={`/projects/${encodeURIComponent(project.slug)}`}
        href={`/projects/${project.id}`}
      >
        <div className='aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 relative -z-10 aspect-[4/3]'>
          <Image
            src={project.cover[0].url}
            alt={`Screenshot du projet ${project.name}`}
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8FqhbDwAFbgHl+9JQRQAAAABJRU5ErkJggg=='
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='!static h-full w-full object-cover object-center group-hover:opacity-75'
          />
        </div>
        <div className='px-5 py-5'>
          <h4 className='text-2xl font-medium md:text-3xl lg:text-[1.75rem]'>
            {project.name}
          </h4>
          <p className='my-5 line-clamp-5 text-justify font-light leading-relaxed'>
            {project.shortDescription}
          </p>
          <h5 className='text-base text-highlight-gray'>
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
      </Link>
      <div className='flex justify-between px-5'>
        <a
          href={project.links.toDeploy}
          target='_blank'
          className='group/link relative inline-block text-sm leading-6'
        >
          <Image
            src={LinkIcon}
            alt=''
            className='mr-2 inline-block h-auto w-6 align-middle transition-transform duration-300 group-hover/link:scale-110'
          />
          <span className=''>Apercu en direct</span>
          <span className='absolute bottom-1 left-0 right-0 ml-8 h-px origin-bottom-left scale-x-100 transform bg-primary-dark transition-transform duration-300 group-hover/link:scale-x-0'></span>
        </a>
        <a
          href={project.links.toGithub}
          target='_blanck'
          className='group/link relative inline-block text-sm leading-6'
        >
          <Image
            src={GithubIcon}
            alt=''
            className='mr-2 inline-block h-auto w-6 align-middle transition-transform duration-300 group-hover/link:scale-110'
          />
          <span className=''>Afficher le code</span>
          <span className='absolute bottom-1 left-0 right-0 ml-8 h-px origin-bottom-left scale-x-100 transform bg-primary-dark transition-transform duration-300 group-hover/link:scale-x-0'></span>
        </a>
      </div>
    </div>
  )
}
