'use client'

import { useState, useEffect } from 'react'
import { Pagination } from 'flowbite-react'
import type { CustomFlowbiteTheme } from 'flowbite-react'
import { Skeleton } from '@mui/material'
import { Project } from '@/interfaces/Project'
import { Tech } from '@/interfaces/Tech'
import Section from '@/components/layout/Section'
import CardSkeleton from './skeletons/CardSkeleton'
import Card from '@/components/Card'
import { getScreenSizeLabel } from '@/utils/getScreenSizeLabel'

const customTheme: CustomFlowbiteTheme['pagination'] = {
  base: 'overflow-y-hidden',
  pages: {
    base: 'xs:mt-0 mt-2 inline-flex items-center lg:space-x-4',
    previous: {
      base: 'ml-0 mr-4 bg-transparent py-2 px-3 leading-tight text-primary-dark enabled:hover:text-zinc-500',
      icon: 'h-5 w-5'
    },
    next: {
      base: 'bg-transparent ml-4 py-2 px-3 leading-tight text-primary-dark enabled:hover:text-zinc-500',
      icon: 'h-5 w-5'
    },
    selector: {
      base: 'w-full py-2 px-3 leading-tight enabled:hover:text-zinc-500 text-2xl lg:text-4xl',
      active:
        'hover:text-zinc-500 pointer-events-none after:content-["•"] after:text-accent-orange after:absolute after:inset-x-0 relative after:-bottom-3 lg:after:-bottom-5 pb-4 after:text-5xl lg:after:text-6xl bg-transparent text-ineherit transition-all duration-300 ease-in-out',
      disabled: 'opacity-50 pointer-events-none'
    }
  }
}

export default function ProjectsSection({
  projects,
  techs,
  deviceType
}: {
  projects: Project[]
  techs: Tech[]
  deviceType: string | undefined
}) {
  const idSection = 'projects'
  const title = 'Projects'

  const [projectsPerPage, setProjectsPerPage] = useState<number>()
  const [totalPage, setTotalPage] = useState<number>(1)
  const [currentProjects, setCurrentProjects] = useState<Project[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isRenderReady, setIsRenderReady] = useState(false)

  const getProjectsPerPage = (width: number) => {
    const screenSize = getScreenSizeLabel(width)
    switch (screenSize) {
      case 'sm':
        return 1
      case 'md':
        return 2
      case 'lg':
      case 'xl':
        return 3
      case '2xl':
        return 6
    }
  }

  const onPageChange = (page: number) => setCurrentPage(page)

  useEffect(() => {
    const handleResize = () => {
      setProjectsPerPage(getProjectsPerPage(window.innerWidth))
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setIsRenderReady(false)
    if (projectsPerPage) {
      const indexOfLastProject = currentPage * projectsPerPage
      const indexOfFirstProject = indexOfLastProject - projectsPerPage
      setCurrentProjects(
        projects.slice(indexOfFirstProject, indexOfLastProject)
      )
      setTotalPage(Math.ceil(projects.length / projectsPerPage))
      setIsRenderReady(true)
    }
  }, [currentPage, projectsPerPage, projects])

  useEffect(() => {
    console.log('totalPage : ', totalPage)
  }, [totalPage])

  return (
    <Section id={idSection} title={title}>
      <div className='mb-10 mt-20 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6 2xl:gap-8'>
        {!isRenderReady
          ? [
              ...Array(
                deviceType === 'mobile' ? 1 : deviceType === 'tablet' ? 2 : 3
              )
            ].map((_, i) => <CardSkeleton key={i} />)
          : currentProjects.map((project) => (
              <Card key={project.id} project={project} techs={techs} />
            ))}
      </div>
      <div className='flex h-24 justify-center overflow-x-hidden font-serif text-4xl lg:text-5xl'>
        {!isRenderReady ? (
          <Skeleton
            width='100%'
            height={46}
            style={{
              borderRadius: '0.5rem',
              maxWidth: '382px'
            }}
          />
        ) : (
          totalPage > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPage}
              onPageChange={onPageChange}
              previousLabel='<'
              nextLabel='>'
              theme={customTheme}
            />
          )
        )}
      </div>
    </Section>
  )
}
