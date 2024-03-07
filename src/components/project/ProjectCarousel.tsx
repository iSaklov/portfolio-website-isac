'use client'

import Image from 'next/image'
import { Carousel } from 'flowbite-react'
import { Project } from '@/interfaces/Project'
import CustomControl from '@/components/common/CustomControl'

export default function ProjectCarousel({
  images
}: {
  images: Project['images']
}) {
  return (
    <div className='z-10 my-10 h-[384px] md:h-[448px] lg:h-[512px] xl:h-[576px] 2xl:h-[640px]'>
      <Carousel
        pauseOnHover
        // slide={false}
        leftControl={<CustomControl position='left' />}
        rightControl={<CustomControl position='right' />}
      >
        {images?.map((image) => (
          <div
            key={image.id}
            className='relative aspect-[16/9] h-full w-full overflow-hidden shadow-sm'
          >
            <Image
              src={image.url}
              // alt={image.filename}
              alt=''
              placeholder='blur'
              blurDataURL={image.blurDataUrl}
              fill
              className='h-full w-full object-scale-down object-center'
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
