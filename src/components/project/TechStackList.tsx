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
    <div className='inline flex-wrap align-middle md:inline-flex'>
      {techStack.map(({ id, name, icon }) => (
        <span
          key={id}
          className='m-1 inline-flex items-center rounded-2xl border border-subtle-blue bg-highlight-gray px-1 align-middle'
        >
          <img
            src={icon[0].url}
            alt={name}
            className='inline-block h-auto max-h-[16px] w-auto max-w-[16px] rounded-full bg-white p-px'
          />
          <span className='pl-2 pr-[7px] text-sm font-light text-white'>
            {name}
          </span>
        </span>
      ))}
    </div>
  )
}
