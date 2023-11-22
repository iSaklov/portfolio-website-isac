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
      <div className='flex flex-wrap items-center justify-center gap-8 pt-20 lg:gap-16'>
        {techs.map((tech) => (
          <img
            key={tech.id}
            src={tech.icon[0].url}
            alt={tech.name}
            className='max-w-16 md:max-w-24 lg:max-w-28 aspect-square max-h-16 md:max-h-24 lg:max-h-28'
          />
        ))}
      </div>
    </Section>
  )
}
