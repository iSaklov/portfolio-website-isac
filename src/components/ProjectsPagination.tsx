'use client'

import { useState, useEffect } from 'react'
import { Pagination } from 'flowbite-react'
import { Project } from '@/interfaces/Project'
import Card from '@/components/Card'
import { getProjectsPerPage } from '@/utils/get-projects-per-page'

export default function ProjectsPagination({
  projects: projects
}: {
  projects: Project[]
}) {
  const [currentPage, setCurrentPage] = useState(1)
  const [projectsPerPage, setProjectsPerPage] = useState<number | undefined>(
    undefined
  )
  const [totalPage, setTotalPage] = useState<number>(0)
  const [currentProjects, setCurrentProjects] = useState(
    projects.slice(0, projectsPerPage)
  )

  const onPageChange = (page: number) => setCurrentPage(page)

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