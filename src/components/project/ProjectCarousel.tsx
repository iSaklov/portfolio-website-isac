'use client'

import { Carousel } from 'flowbite-react'
import Image from 'next/image'

export default function ProjectCarousel({ images }) {
  return (
    // <div className='mb-10 h-56 sm:h-64 xl:h-80 2xl:h-96'>
    <div className='z-10 mb-10 h-screen md:h-[640] xl:h-[800px]'>
      <Carousel pauseOnHover slide={false}>
        {images.map((image) => (
          <div key={image.id} className='h-full w-full'>
            <Image
              // key={image.id}
              src={image.url}
              alt='h'
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
