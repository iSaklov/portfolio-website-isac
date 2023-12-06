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

  return techStack.map(({ id, name, icon }, index) => (
    // <span key={id} className='text-[0.9375rem]/7 font-light mx-0.5 text-subtle-blue'>
    //   {name}
    //   {index < techStack.length - 1 ? ', ' : ''}
    // </span>
    <img
      key={id}
      src={icon[0].url}
      alt={name}
      className='mx-2 inline-block h-auto max-h-[32px] w-auto max-w-[32px]'
    />
  ))
}
