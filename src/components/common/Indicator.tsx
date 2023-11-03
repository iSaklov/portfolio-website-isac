import Image from 'next/image'
import checkIcon from '@/assets/images/icons/check.svg'
import dashIcon from '@/assets/images/icons/dash.svg'

export default function Indicator({
  keyName,
  value
}: {
  keyName: string
  value: number | boolean
}) {
  let category

  switch (keyName) {
    case 'performance':
      category = 'Performance'
      break
    case 'accessibility':
      category = 'Accessibilité'
      break
    case 'bestPractices':
      category = 'Meilleures pratiques'
      break
    case 'seo':
      category = 'SEO'
      break
    case 'pwa':
      category = 'PWA'
      break
  }

  if (typeof value === 'boolean') {
    const styles = value ? ['text-light-gray'] : ['text-service-gray']

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
        <span className='__poppins_med_low mt-2 text-center'>{category}</span>
      </div>
    )
  }

  const styles =
    value >= 90
      ? [
          'bg-high-result-bg',
          'text-high-result-main',
          'border-high-result-main'
        ]
      : value >= 50
      ? [
          'bg-medium-result-bg',
          'text-medium-result-main',
          'border-medium-result-main'
        ]
      : ['bg-low-result-bg', 'text-low-result-main', 'border-low-result-main']

  return (
    <div className='flex w-28 flex-col items-center'>
      <div
        className={[
          'flex h-16 w-16 flex-col items-center justify-center rounded-full border-2 p-2',
          ...styles
        ].join(' ')}
      >
        <span className={`__lighthouse_score`}>{value}</span>
      </div>
      <span className='__poppins_med_low mt-2 text-center'>{category}</span>
    </div>
  )
}
