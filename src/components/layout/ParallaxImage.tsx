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
      const parallaxContainer = document.querySelector(
        `.parallax-container-${imageUrl.replace(/\W/g, '_')}`
      ) as HTMLDivElement

      if (parallaxContainer) {
        const containerTop = parallaxContainer.getBoundingClientRect().top + 200
        console.log('containerTop', containerTop)
        parallaxContainer.style.backgroundPositionY = `${containerTop * 0.5}px`
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [imageUrl])

  return (
    <div
      className={`parallax-container-${imageUrl.replace(
        /\W/g,
        '_'
      )} bg-contain bg-fixed bg-center bg-no-repeat pt-[40vh] md:pt-[60vh] lg:bg-cover lg:pt-[80vh]`}
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
      {children}
    </div>
  )
}

export default ParallaxImage
