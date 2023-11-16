'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/interfaces/Project'
import { getScreenSizeLabel } from '@/utils/get-screen-size-label'
import { Carousel } from 'flowbite-react'

export default function ProjectsNav({ projects }: { projects: Project[] }) {
  const [devise, setDevise] = useState<string | undefined>(undefined)
  const pathname = usePathname()

  useEffect(() => {
    setDevise(getScreenSizeLabel(window.innerWidth))
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setDevise(getScreenSizeLabel(window.innerWidth))
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!devise) return null

  if (devise === 'sm') {
    return (
      <nav className='container mx-auto mb-10 h-56 max-w-2xl px-4 sm:h-64 lg:max-w-4xl xl:h-80 2xl:h-96'>
        <Carousel slide={false} className='shadow-lg'>
          {projects.map(({ id, name, cover }) => {
            return (
              <Link key={id} href={`/projects/${id}`} className='h-full'>
                <Image
                  src={cover[1].thumbnails.large.url}
                  alt=''
                  width={cover[1].thumbnails.large.width}
                  height={cover[1].thumbnails.large.height}
                  className={`h-full w-full object-cover ${
                    pathname === `/projects/${id}` ? '' : ''
                  }`}
                />
                <h6 className='absolute bottom-0 left-0 right-0 bg-white p-2 text-center text-xl font-light text-primary-dark'>
                  {name}
                </h6>
              </Link>
            )
          })}
        </Carousel>
      </nav>
    )
  }

  if (devise === 'md') {
    const carouselItems = projects.map(({ id, name, cover }, index) => {
      if (index % 2 === 0) {
        const nextProject = projects[index + 1]

        return (
          <div key={id} className='flex'>
            <Link href={`/projects/${id}`} className='h-full w-1/2 pr-2'>
              <Image
                src={cover[1].thumbnails.large.url}
                alt=''
                width={cover[1].thumbnails.large.width}
                height={cover[1].thumbnails.large.height}
                className={`h-full w-full object-cover ${
                  pathname === `/projects/${id}` ? '' : ''
                }`}
              />
              <h6 className='absolute bottom-0 left-0 w-1/2 bg-white p-2 text-center text-xl font-light text-primary-dark'>
                {name}
              </h6>
            </Link>
            {nextProject && (
              <Link
                key={nextProject.id}
                href={`/projects/${nextProject.id}`}
                className='h-full w-1/2 pl-2'
              >
                <Image
                  src={nextProject.cover[1].thumbnails.large.url}
                  alt=''
                  width={nextProject.cover[1].thumbnails.large.width}
                  height={nextProject.cover[1].thumbnails.large.height}
                  className={`h-full w-full object-cover ${
                    pathname === `/projects/${nextProject.id}` ? '' : ''
                  }`}
                />
                <h6 className='absolute bottom-0 right-0 w-1/2 bg-white p-2 text-center text-xl font-light text-primary-dark'>
                  {nextProject.name}
                </h6>
              </Link>
            )}
          </div>
        )
      }
      return null
    })

    return (
      <nav className='container mx-auto mb-10 h-80 max-w-2xl px-4'>
        <Carousel slide={false} className='shadow-lg'>
          {carouselItems.filter(Boolean).map((item, index) => (
            <React.Fragment key={index}>{item}</React.Fragment>
          ))}
        </Carousel>
      </nav>
    )
  }

  return (
    <aside className='absolute left-10 top-[300px] z-20'>
      <nav>
        <ol>
          {projects.map(({ id, cover }) => {
            return (
              <li key={id} className='mb-12'>
                <Link href={`/projects/${id}`}>
                  <Image
                    src={cover[0].thumbnails.large.url}
                    alt=''
                    width={cover[0].thumbnails.large.width}
                    height={cover[0].thumbnails.large.height}
                    className={`h-24 w-24 object-cover ${
                      pathname === `/projects/${id}`
                        ? 'cursor-default shadow-lg hover:shadow-lg hover:saturate-100'
                        : 'opacity-75 shadow-md saturate-50 hover:opacity-100 hover:shadow-xl hover:saturate-150'
                    }`}
                  />
                </Link>
              </li>
            )
          })}
        </ol>
      </nav>
    </aside>
  )
}
