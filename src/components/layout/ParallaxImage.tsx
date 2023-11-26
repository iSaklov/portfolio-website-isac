'use client'

import React, { useEffect } from 'react'

interface ParallaxImageProps {
  imageUrl: string
  children: React.ReactNode
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  imageUrl,
  children
}) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY
      const parallaxContainer = document.querySelector(
        `.parallax-container-${imageUrl.replace(/\W/g, '_')}`
      ) as HTMLDivElement

      console.log('parallaxContainer', parallaxContainer)

      if (parallaxContainer) {
        // Adjust backgroundPositionY based on screen size
        const coefficient = window.innerWidth >= 1024 ? 0.3 : 0.5
        // parallaxContainer.style.backgroundPositionY = `${
        //   scrollHeight * coefficient
        // }px`
        const containerTop = parallaxContainer.getBoundingClientRect().top
        parallaxContainer.style.backgroundPositionY = `${
          containerTop * coefficient
        }px`
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [imageUrl])

  return (
    <div className='relative'>
      <div
        className={`parallax-container-${imageUrl.replace(
          /\W/g,
          '_'
        )} overflow-y-auto bg-contain bg-fixed bg-top bg-no-repeat pt-[40vh]  lg:pt-[50vh]`}
        style={{
          backgroundImage: `url(${imageUrl})`
          // backgroundPositionY: '0'
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default ParallaxImage
