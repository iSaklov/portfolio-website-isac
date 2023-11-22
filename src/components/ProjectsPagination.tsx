'use client'

import { useState, useEffect } from 'react'
import { Pagination } from 'flowbite-react'
import { Project } from '@/interfaces/Project'
import { Tech } from '@/interfaces/Tech'
import Card from '@/components/Card'
import { getScreenSizeLabel } from '@/utils/get-screen-size-label'

export default function ProjectsPagination({
  projects: projects,
  techs: techs
}: {
  projects: Project[]
  techs: Tech[]
}) {
  const [currentPage, setCurrentPage] = useState(1)
  const [projectsPerPage, setProjectsPerPage] = useState<number | undefined>(
    undefined
  )
  const [totalPage, setTotalPage] = useState<number>(1)
  const [currentProjects, setCurrentProjects] = useState(
    projects.slice(0, projectsPerPage)
  )

  const onPageChange = (page: number) => setCurrentPage(page)

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
      default:
        return 6
    }
  }

  useEffect(() => {
    setProjectsPerPage(getProjectsPerPage(window.innerWidth))
  }, [])

  useEffect(() => {
    if (projectsPerPage) {
      const indexOfLastProject = currentPage * projectsPerPage
      const indexOfFirstProject = indexOfLastProject - projectsPerPage
      setCurrentProjects(
        projects.slice(indexOfFirstProject, indexOfLastProject)
      )
      setTotalPage(Math.ceil(projects.length / projectsPerPage))
    }
  }, [currentPage, projectsPerPage, projects])

  useEffect(() => {
    const handleResize = () => {
      setProjectsPerPage(getProjectsPerPage(window.innerWidth))
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 2xl:gap-y-8'>
        {currentProjects?.map((project) => (
          <Card key={project.id} project={project} techs={techs} />
        ))}
      </div>
      <div className='flex justify-center overflow-x-auto'>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPage}
          onPageChange={onPageChange}
          // layout='navigation'
          // previousLabel='<'
          // nextLabel='>'
          // showIcons
        />
      </div>
    </>
  )
}
