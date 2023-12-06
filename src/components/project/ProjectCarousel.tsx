'use client'

import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { Carousel } from 'flowbite-react'
import { Project } from '@/interfaces/Project'
import { getRecord } from '@/database/getRecord'
import { projectRecordType } from '@/database/airtable'

export default function ProjectCarousel({
  // images
  projectId,
  project
}: {
  // images: Project['images']
  projectId: string
  project: Project
}) {
  const {
    data: projectData,
    isPending,
    isError,
    error
  } = useQuery<Project, Error>({
    queryKey: ['project', projectId, projectRecordType],
    queryFn: async () => await getRecord(projectId, projectRecordType),
    initialData: project
  })

  const { images } = projectData

  return (
    <div className='z-10 my-10 h-[384px] md:h-[448px] lg:h-[512px] xl:h-[576px] 2xl:h-[640px]'>
      <Carousel pauseOnHover slide={false}>
        {images?.map((image) => (
          <div
            key={image.id}
            className='relative aspect-[16/9] h-full w-full overflow-hidden shadow-sm'
          >
            <Image
              src={image.url}
              alt=''
              // placeholder='blur'
              // blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8FqhbDwAFbgHl+9JQRQAAAABJRU5ErkJggg=='
              fill
              className='h-full w-full object-scale-down  object-center'
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
