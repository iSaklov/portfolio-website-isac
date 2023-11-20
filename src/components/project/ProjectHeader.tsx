import { Project } from '@/interfaces/Project'
import { Tech } from '@/interfaces/Tech'

export default function ProjectHeader({
  name,
  date,
  city,
  techStack
}: {
  name: Project['name']
  date: Project['date']
  city: Project['city']
  techStack: Tech[]
}) {
  return (
    <div>
      <h1 className='__heading-1 lowercase'>
        titre<span className='text-accent-orange'>.</span> {name}
      </h1>
      <div className='mt-10'>
        <h6 className='__heading-6'>
          date<span className='text-accent-orange'>.</span>{' '}
          <span className='text-base/7 font-light'>{date}</span>
        </h6>
        <h6 className='__heading-6'>
          city<span className='text-accent-orange'>.</span>{' '}
          <span className='text-base/7 font-light'>{city}</span>
        </h6>
        <h6 className='__heading-6'>
          tech stack <span className='text-accent-orange'>:</span>{' '}
          {techStack.map(({ id, name, icon }, index) => (
            // <span key={id} className='__poppins_light_low text-subtle-blue'>
            //   {name} {index < techStack.length - 1 ? ', ' : ''}
            // </span>
            <img
              key={id}
              src={icon[0].url}
              alt={name}
              className='mx-2 inline-block h-auto w-8'
            />
          ))}
        </h6>
      </div>
    </div>
  )
}
