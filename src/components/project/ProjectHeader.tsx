'use client'

import { Project } from '@/interfaces/Project'

export default function ProjectHeader({
  name,
  date,
  city,
  children
}: {
  name: Project['name']
  date: Project['date']
  city: Project['city']
  children: React.ReactNode
}) {
  return (
    <header>
      <h1 className='font-serif text-[2.125rem] lowercase tracking-tight md:text-5xl lg:text-[3.125rem]'>
        titre<span className='text-accent-orange'>.</span> {name}
      </h1>
      <div className='mt-10'>
        <h2 className='text-[0.9375rem]/7'>
          date<span className='text-accent-orange'>.</span>{' '}
          <span className='text-base font-light'>{date}</span>
        </h2>
        <h2 className='mt-1 text-[0.9375rem]/7'>
          city<span className='text-accent-orange'>.</span>{' '}
          <span className='text-base font-light'>{city}</span>
        </h2>
        <h2 className='mt-1 text-[0.9375rem]/7'>
          tech stack <span className='text-accent-orange'>:</span> {children}
        </h2>
      </div>
    </header>
  )
}
