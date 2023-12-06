'use client'

import { useQuery } from '@tanstack/react-query'
import { Project } from '@/interfaces/Project'
import { getRecord } from '@/database/getRecord'
import { projectRecordType } from '@/database/airtable'

export default function ProjectHeader({
  id,
  project,
  children
}: {
  id: string
  project: Project
  children: React.ReactNode
}) {
  const {
    data: projectData,
    isPending,
    isError,
    error
  } = useQuery<Project, Error>({
    queryKey: ['project', id, projectRecordType],
    queryFn: async () => await getRecord(id, projectRecordType),
    initialData: project
  })

  const { name, date, city } = projectData

  return (
    <div>
      <h1 className='font-serif text-[2.125rem] lowercase tracking-tight md:text-5xl lg:text-[3.125rem]'>
        titre<span className='text-accent-orange'>.</span> {name}
      </h1>
      <div className='mt-10'>
        <h6 className='text-[0.9375rem]/7'>
          date<span className='text-accent-orange'>.</span>{' '}
          <span className='text-base font-light'>{date}</span>
        </h6>
        <h6 className='text-[0.9375rem]/7'>
          city<span className='text-accent-orange'>.</span>{' '}
          <span className='text-base font-light'>{city}</span>
        </h6>
        <h6 className='text-[0.9375rem]/7'>
          tech stack <span className='text-accent-orange'>:</span> {children}
        </h6>
      </div>
    </div>
  )
}
