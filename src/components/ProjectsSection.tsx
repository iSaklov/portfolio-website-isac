'use client'

import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getRecords } from '@/database/getRecords'
import { projectRecordType, techRecordType } from '@/database/airtable'
import { Pagination } from 'flowbite-react'
import { Skeleton } from '@mui/material'
import { Project } from '@/interfaces/Project'
import { Tech } from '@/interfaces/Tech'
import Section from '@/components/layout/Section'
import SkeletonCard from './skeletons/SkeletonCard'
import Card from '@/components/Card'
import { getScreenSizeLabel } from '@/utils/getScreenSizeLabel'

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

  const {
    data: projectsData,
    isPending,
    isError,
    error
  } = useQuery<Project[], Error>({
    queryKey: ['projects', projectRecordType],
    queryFn: async () => await getRecords(projectRecordType),
    initialData: projects
  })

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
        projectsData.slice(indexOfFirstProject, indexOfLastProject)
      )
      setTotalPage(Math.ceil(projectsData.length / projectsPerPage))
      setIsRenderReady(true)
    }
  }, [currentPage, projectsPerPage, projectsData])

  return (
    <Section id={idSection} title={title}>
      <div className='mb-10 mt-20 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6 2xl:gap-8'>
        {!isRenderReady
          ? [
              ...Array(
                deviceType === 'mobile' ? 1 : deviceType === 'tablet' ? 2 : 3
              )
            ].map((_, i) => <SkeletonCard key={i} />)
          : currentProjects.map((project) => (
              <Card key={project.id} project={project} techs={techs} />
            ))}
      </div>
      <div className='flex justify-center overflow-x-auto'>
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
          <Pagination
            currentPage={currentPage}
            totalPages={totalPage}
            onPageChange={onPageChange}
            previousLabel='Précédent'
            nextLabel='Suivant'
            // showIcons
          />
        )}
      </div>
    </Section>
  )
}
