import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/interfaces/Project'
import LinkIcon from '@/assets/images/icons/akar-icons_link-chain.svg'
import GithubIcon from '@/assets/images/icons/akar-icons_github-fill.svg'

export default function Card({ project }: { project: Project }) {
  return (
    <div className='group w-full max-w-sm shadow-md hover:shadow-xl'>
      <Link key={project.id} href={`/projects/${project.slug}`}>
        <div className='aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 relative -z-10 w-full overflow-hidden rounded-lg'>
          <Image
            src={project.img}
            alt={`Screenshot du projet ${project.name}`}
            placeholder='blur'
            className='inline-block h-full w-full object-cover object-center group-hover:opacity-75'
          />
        </div>
        <div className='pl-5 pr-5 pt-5'>
          <h4 className='__heading-4 mb-5'>{project.name}</h4>
          <p className='__poppins_light_middle mb-5'>
            {project.shortDescription}
          </p>
          <h6 className='mb-5 text-highlight-gray'>
            Tech stack :{' '}
            {project.techStack.map((item, index) => (
              <span
                key={item}
                className='__poppins_light_extralow text-subtle-blue'
              >
                {item}
                {index < project.techStack.length - 1 && ', '}
              </span>
            ))}
          </h6>
        </div>
      </Link>
      <div className='flex justify-between pb-5 pl-5 pr-5'>
        <a
          href={project.links.toDeploy}
          target='_blanck'
          className='__heading-6 underline'
        >
          <Image src={LinkIcon} alt='' className='mr-2 inline' /> Apercu en
          direct
        </a>
        <a
          href={project.links.toGithub}
          target='_blanck'
          className='__heading-6 underline'
        >
          <Image src={GithubIcon} alt='' className='mr-2 inline' /> Afficher le
          code
        </a>
      </div>
    </div>
  )
}
