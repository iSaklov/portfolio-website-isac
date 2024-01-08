'use client'

import { useEffect, useState } from 'react'
import CircularProgress, {
  CircularProgressProps
} from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import PWA from './PWA'
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

  // PWA is a special case
  if (typeof value === 'boolean') {
    return <PWA category={category} value={value} />
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
