import Image from 'next/image'
import Section from '@/components/layout/Section'
import icons from '@/datas/icons'

export default function TeckStackSection() {
  const idSection = 'tech-stack'
  const title = 'Teck stack'
  const subtitle = 'Technologies avec lesquelles je travaille régulièrement'
  return (
    <Section id={idSection} title={title} subtitle={subtitle}>
      <div className='flex flex-wrap items-center justify-center gap-8 sm:gap-16'>
        {Object.entries(icons).map(([iconName, iconSrc]) => (
          <Image
            key={iconName}
            src={iconSrc}
            alt={iconName}
            className='h-16 w-16 sm:h-28 sm:w-28'
          />
        ))}
      </div>
    </Section>
  )
}
