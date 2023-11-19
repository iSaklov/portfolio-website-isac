import Image from 'next/image'
import { getRecords } from '@/database/get-records'
import { techRecordType } from '@/database/airtable'
import Section from '@/components/layout/Section'

export default async function TeckStackSection() {
  const idSection = 'tech-stack'
  const title = 'Teck stack'
  const subtitle = 'Technologies avec lesquelles je travaille régulièrement'

  const techs = (await getRecords(techRecordType)) || []

  return (
    <Section id={idSection} title={title} subtitle={subtitle}>
      <div className='flex flex-wrap items-center justify-center gap-8 sm:gap-16'>
        {techs.map((tech) => (
          // <Image
          //   key={tech.id}
          //   src={tech.icon[0].url}
          //   alt={tech.name}
          //   width={tech.icon[0].width}
          //   height={tech.icon[0].height}
          //   className='h-auto w-16 sm:h-auto sm:w-28'
          // />
          <img
            key={tech.id}
            src={tech.icon[0].url}
            alt={tech.name}
            className='h-auto w-16 sm:h-auto sm:w-28'
          />
        ))}
      </div>
    </Section>
  )
}
