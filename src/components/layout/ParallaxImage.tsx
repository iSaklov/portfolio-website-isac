'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface ParallaxImageProps {
  image: {
    src: string
    base64: string // BlurDataURL
    height?: number
    width?: number
  }
  children: React.ReactNode
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  image: { src, base64 },
  children
}) => {
  const [offsetY, setOffsetY] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)

  const handleScroll = () => {
    if (ref.current) {
      const { top } = ref.current.getBoundingClientRect()
      setOffsetY(top)
    }
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={ref} className='relative pt-[40vh] md:pt-[60vh] xl:pt-[80vh]'>
      <div
        className='pointer-events-none absolute inset-x-0 top-0 aspect-[4/3] h-max w-full overflow-hidden'
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <Image
          src={src}
          alt=''
          fill
          sizes='100vw'
          placeholder='blur'
          blurDataURL={base64}
          loading='lazy' // 'eager' | 'lazy'
          className='h-full w-full object-cover object-center xl:object-cover'
        />
      </div>
      <div className='relative'>{children}</div>
    </div>
  )
}

export default ParallaxImage
