'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import checkIcon from '@/assets/images/icons/check.svg'
import dashIcon from '@/assets/images/icons/dash.svg'

import CircularProgress, {
  CircularProgressProps
} from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { classNames } from '@/utils/classNames'

const getStyles = (value: number) =>
  value < 50
    ? {
        bg: 'bg-low-result-bg',
        text: 'text-low-result-main'
      }
    : value < 90
    ? {
        bg: 'bg-medium-result-bg',
        text: 'text-medium-result-main'
      }
    : {
        bg: 'bg-high-result-bg',
        text: 'text-high-result-main'
      }

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  const styles = getStyles(props.value)

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant='determinate'
        size='4rem'
        thickness={1.5}
        className={classNames(styles.text, 'z-10')} // Set border color
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        className={classNames(styles.bg, 'rounded-full')} // Set background color
      >
        <Typography
          variant='caption'
          component='span'
          color='inherit'
          className={classNames(
            styles.text, // Set text color
            'mt-0.5 text-[1.625rem] font-medium'
          )}
        >
          {props.value}
        </Typography>
      </Box>
    </Box>
  )
}

const getCategory = (key: string) => {
  switch (key) {
    case 'performance':
      return 'Performance'
    case 'accessibility':
      return 'Accessibilité'
    case 'bestPractices':
      return 'Meilleures pratiques'
    case 'seo':
      return 'SEO'
    case 'pwa':
      return 'PWA'
  }
}

export default function IndicatorLighthouse({
  keyName,
  value
}: {
  keyName: string
  value: number | boolean
}) {
  const [score, setScore] = useState<number>(0)
  const category = getCategory(keyName)

  useEffect(() => {
    const timer = setInterval(() => {
      if (typeof value === 'number') {
        setScore((prevProgress) =>
          prevProgress >= value ? value : prevProgress + 1
        )

        if (score >= value) {
          clearInterval(timer)
        }
      }
    }, 100)

    return () => {
      clearInterval(timer)
    }
  }, [value, score])

  if (typeof value === 'boolean') {
    const styles = value ? ['text-light-gray'] : ['text-service-gray']

    // PWA is a special case
    return (
      <div className='flex w-28 flex-col items-center'>
        <div
          className={[
            'flex h-16 w-16 flex-col items-center justify-center rounded-full border-2 border-service-gray bg-highlight-gray p-2',
            ...styles
          ].join(' ')}
        >
          <div className='flex h-full flex-col items-center'>
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
          </div>
        </div>
        <span className='mt-2 text-center text-sm font-medium lg:text-[0.9375rem]'>
          {category}
        </span>
      </div>
    )
  }

  return (
    <div className='flex w-28 flex-col items-center'>
      <div className='flex w-28 flex-col items-center'>
        <CircularProgressWithLabel value={score} color='inherit' />
        <span className='mt-2 text-center text-sm font-medium lg:text-[0.9375rem]'>
          {category}
        </span>
      </div>
    </div>
  )
}
