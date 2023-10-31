'use client'

import { Carousel } from 'flowbite-react'
import Image from '@/assets/images/background/patrick-lindenberg-1iVKwElWrPA-unsplash.jpg'

export default function ProjectCarousel({ }) {
  return (
    <Carousel className='h-96 z-0'>
      <img
        alt='...'
				src='https://flowbite.com/docs/images/carousel/carousel-1.svg'
      />
      <img
        alt='...'
        src='https://flowbite.com/docs/images/carousel/carousel-2.svg'
      />
      <img
        alt='...'
        src='https://flowbite.com/docs/images/carousel/carousel-3.svg'
      />
      <img
        alt='...'
        src='https://flowbite.com/docs/images/carousel/carousel-4.svg'
      />
      <img
        alt='...'
        src='https://flowbite.com/docs/images/carousel/carousel-5.svg'
      />
    </Carousel>
  )
}
