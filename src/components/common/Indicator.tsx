// 'use client'

import Image from 'next/image'
// import { Badge } from 'flowbite-react'
import checkIcon from '@/assets/images/icons/check.svg'
import dashIcon from '@/assets/images/icons/dash.svg'

export default function Indicator({ result }: { result: number | boolean }) {
  if (typeof result === 'boolean') {
    const styles = result ? ['text-light-gray'] : ['text-service-gray']
    const accenture = result ? 'text-accent-orange' : ''

    return (
      <div
        className={[
          'flex h-16 w-16 flex-col items-center justify-center rounded-full border-2 border-service-gray bg-highlight-gray p-2',
          ...styles
        ].join(' ')}
      >
        <div className='flex h-full flex-col items-center'>
          <span className='-tracking-[3px]'>
            P<span className={accenture}>W</span>A
          </span>
          {result ? (
            <div className='rounded-full border border-light-gray bg-high-result-main p-1 '>
              <Image src={checkIcon} alt='' className='h-auto w-2' />
            </div>
          ) : (
            <Image src={dashIcon} alt='' className='h-auto w-5' />
          )}
        </div>
      </div>
    )
  }

  const styles =
    result >= 90
      ? [
          'bg-high-result-bg',
          'text-high-result-main',
          'border-high-result-main'
        ]
      : result >= 50
      ? [
          'bg-medium-result-bg',
          'text-medium-result-main',
          'border-medium-result-main'
        ]
      : ['bg-low-result-bg', 'text-low-result-main', 'border-low-result-main']

  return (
    <div
      className={[
        'flex h-16 w-16 flex-col items-center justify-center rounded-full border-2 p-2',
        ...styles
      ].join(' ')}
    >
      <span className={`__lighthouse_score`}>{result}</span>
    </div>
  )
}
