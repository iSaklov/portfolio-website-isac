'use client'

import { useState, useEffect, useCallback } from 'react'
import { Pagination } from 'flowbite-react'
import { Project } from '@/interfaces/Project'
import Card from '@/components/Card'

export default function ProjectsPagination({
  projects: projects
}: {
  projects: Project[]
}) {
  const [currentPage, setCurrentPage] = useState(1)
  const [projectsPerPage, setProjectsPerPage] = useState(getProjectsPerPage)
  const [totalPage, setTotalPage] = useState(
    Math.floor(projects.length / projectsPerPage)
  )
  const [currentProjects, setCurrentProjects] = useState(
    projects.slice(0, projectsPerPage)
  )

  const onPageChange = (page: number) => setCurrentPage(page)

  useEffect(() => {
    const indexOfLastProject = currentPage * projectsPerPage
    const indexOfFirstProject = indexOfLastProject - projectsPerPage
    setCurrentProjects(projects.slice(indexOfFirstProject, indexOfLastProject))
    setTotalPage(Math.ceil(projects.length / projectsPerPage))
  }, [currentPage, projectsPerPage, projects])

  function getProjectsPerPage() {
    const screenWidth = window.innerWidth

    if (screenWidth <= 639.8) {
      return 1
    } else if (screenWidth <= 1023.8) {
      return 2
    } else {
      return 3
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setProjectsPerPage(getProjectsPerPage())
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
        {currentProjects?.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
      <div className='flex overflow-x-auto sm:justify-center'>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPage}
          onPageChange={onPageChange}
          // layout='navigation'
          previousLabel='< Previous'
          nextLabel='Next >'
          // showIcons
        />
      </div>
    </>
  )
}
