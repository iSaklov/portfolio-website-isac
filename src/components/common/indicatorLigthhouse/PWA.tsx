'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import CircularProgress from '@mui/material/CircularProgress'
import { classNames } from '@/utils/classNames'
import checkIcon from '@/assets/images/icons/check.svg'
import dashIcon from '@/assets/images/icons/dash.svg'

export default function PWA({
  category,
  value
}: {
  category: string | undefined
  value: number | boolean
}) {
  const [showLoader, setShowLoader] = useState<boolean>(true)
  const styles = value ? ['text-light-gray'] : ['text-service-gray']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoader(false)
    }, 5000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className='flex w-28 flex-col items-center'>
      <div
        className={[
          'flex h-16 w-16 flex-col items-center justify-center rounded-full border-2 border-service-gray bg-highlight-gray p-2',
          ...styles
        ].join(' ')}
      >
        <div
          className={classNames(
            'flex h-full flex-col items-center',
            showLoader ? 'justify-center' : ''
          )}
        >
          {showLoader ? (
            <div className='flex justify-center text-accent-orange'>
              <CircularProgress color='inherit' />
            </div>
          ) : (
            <>
              <span className='-tracking-[3px]'>
                P<span className={value ? 'text-accent-orange' : ''}>W</span>A
              </span>
              {value ? (
                <div className='rounded-full border border-light-gray bg-high-result-main p-1'>
                  <Image src={checkIcon} alt='' className='h-auto w-2' />
                </div>
              ) : (
                <Image src={dashIcon} alt='' className='h-auto w-5' />
              )}
            </>
          )}
        </div>
      </div>
      <span className='mt-2 text-center text-sm font-medium lg:text-[0.9375rem]'>
        {category}
      </span>
    </div>
  )
}
