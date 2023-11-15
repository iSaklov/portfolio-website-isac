'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/interfaces/Project'

export default function ProjectsNav({ projects }: { projects: Project[] }) {
  const pathname = usePathname()

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
                    className={`h-24 w-24 ${
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
