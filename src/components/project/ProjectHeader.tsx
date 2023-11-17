import { Project } from '@/interfaces/Project'

export default function ProjectHeader({
  name,
  date,
  city,
  techStack
}: {
  name: Project['name']
  date: Project['date']
  city: Project['city']
  techStack: Project['techStack']
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
          {techStack.map((item, index) => (
            <span key={item} className='__poppins_light_low text-subtle-blue'>
              {item} {index < techStack.length - 1 ? ', ' : ''}
            </span>
          ))}
        </h6>
      </div>
    </div>
  )
}
