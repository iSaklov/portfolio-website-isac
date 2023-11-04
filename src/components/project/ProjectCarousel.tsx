'use client'

import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import { Project } from '@/interfaces/Project'

export default function ProjectCarousel({
  images
}: {
  images: Project['images']
}) {
  if (!images || images.length === 0) {
    // Handle the case when 'images' is undefined or empty
    return null // or you can return a message like <p>No images available</p>
  }

  return (
    // <div className='mb-10 h-56 sm:h-64 xl:h-80 2xl:h-96'>
    <div className='z-10 mb-10 h-screen md:h-[640] xl:h-[800px]'>
      <Carousel pauseOnHover slide={false}>
        {images.map((image) => (
          <div key={image.id} className='h-full w-full'>
            <Image
              // key={image.id}
              src={image.url}
              alt=''
              placeholder='blur'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8FqhbDwAFbgHl+9JQRQAAAABJRU5ErkJggg=='
              fill
              className='object-cover object-center'
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
