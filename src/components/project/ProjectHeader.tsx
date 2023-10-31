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
      <div>
        <p>
          date<span className='text-accent-orange'>.</span> {date}
        </p>
        <p>
          city<span className='text-accent-orange'>.</span> {city}
        </p>
        <p>
          tech stack <span className='text-accent-orange'>:</span>{' '}
          {techStack.map((item, index) => (
            <span key={item}>
              {item} {index < techStack.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}
