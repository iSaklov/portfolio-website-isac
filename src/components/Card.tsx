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
    <div className='group mx-auto w-full max-w-sm overflow-hidden rounded-lg shadow-md hover:shadow-xl'>
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
        <div className='px-5 pt-5'>
          <h4 className='__heading-4 mb-5'>{project.name}</h4>
          <p className='__poppins_light_middle mb-5 line-clamp-5 text-justify'>
            {project.shortDescription}
          </p>
          <h6 className='mb-5 text-highlight-gray'>
            Tech stack :{' '}
            {project.techStack.map((techId, index) => {
              const matchingTech = techs.find((tech) => tech.id === techId)

              return (
                <span
                  key={techId}
                  className='__poppins_light_extralow text-subtle-blue'
                >
                  {matchingTech?.name}
                  {index < project.techStack.length - 1 && ', '}
                </span>
              )
            })}
          </h6>
        </div>
      </Link>
      <div className='flex justify-between pb-5 pl-5 pr-5'>
        <a
          href={project.links.toDeploy}
          target='_blanck'
          className='__heading-6 underline'
        >
          <Image
            src={LinkIcon}
            alt=''
            className='mr-2 inline-block h-auto w-6 align-middle md:w-8'
          />{' '}
          Apercu en direct
        </a>
        <a
          href={project.links.toGithub}
          target='_blanck'
          className='__heading-6 underline'
        >
          <Image
            src={GithubIcon}
            alt=''
            className='mr-2 inline-block h-auto w-6 align-middle md:w-8'
          />{' '}
          Afficher le code
        </a>
      </div>
    </div>
  )
}
