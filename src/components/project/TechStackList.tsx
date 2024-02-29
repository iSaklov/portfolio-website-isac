import { Tech } from '@/interfaces/Tech'
import { getRecord } from '@/database/getRecord'
import { techRecordType } from '@/database/airtable'

export default async function TechStackList({
  projectTechStack
}: {
  projectTechStack: string[]
}) {
  const techStack: Tech[] = await Promise.all(
    projectTechStack.map(async (techId) => {
      const tech = await getRecord(techId, techRecordType)
      return tech
    })
  )

  return (
    <div className='inline-flex flex-wrap items-center justify-center'>
      {techStack.map(({ id, name, icon }) => (
        <div key={id} className='group relative mx-2'>
          <picture>
            {/* https://nextjs.org/docs/messages/no-img-element */}
            <img
              src={icon[0].url}
              alt={name}
              className='inline-block h-auto max-h-[32px] w-auto max-w-[32px] rounded-full bg-white p-px'
            />
          </picture>
          <span className='absolute bottom-0 left-1/2 z-10 hidden -translate-x-1/2 translate-y-1/2 scale-95 transform rounded-lg bg-primary-dark px-2 py-1 font-extralight text-white opacity-0 transition before:absolute before:-top-1 before:left-1/2 before:inline-block before:h-3 before:w-3 before:-translate-x-1/2 before:rotate-45 before:bg-primary-dark group-hover:translate-y-[130%] group-hover:scale-100 group-hover:opacity-100 lg:inline-block lg:text-sm'>
            {name}
          </span>
        </div>
      ))}
    </div>
  )
}
