import Image from 'next/image'
import { getRecords } from '@/database/getRecords'
import { Tech } from '@/interfaces/Tech'
import { techRecordType } from '@/database/airtable'
import Section from '@/components/layout/Section'

export default async function TeckStackSection({ techs }: { techs: Tech[] }) {
  const idSection = 'tech-stack'
  const title = 'Teck stack'
  const subtitle = 'Les outils que je manie au fil de mes projets'

  return (
    <Section id={idSection} title={title} subtitle={subtitle}>
      <div className='flex flex-wrap items-center justify-center gap-8 pt-20 md:gap-12 lg:gap-x-12 lg:gap-y-16'>
        {techs.map((tech) => (
          <div key={tech.id} className='group relative'>
            <img
              src={tech.icon[0].url}
              alt={tech.name}
              className='h-auto max-h-[64px] w-auto max-w-[64px] md:max-h-[80px] md:max-w-[80px] lg:max-h-[96px] lg:max-w-[96px] xl:max-h-[128px] xl:max-w-[128px]'
            />
            <span className='absolute bottom-0 left-1/2 z-10 hidden -translate-x-1/2 translate-y-1/2 scale-95 transform rounded-lg bg-primary-dark px-4 py-2 font-extralight text-white opacity-0 transition before:absolute before:-top-2 before:left-1/2 before:inline-block before:h-4 before:w-4 before:-translate-x-1/2 before:rotate-45 before:bg-primary-dark group-hover:translate-y-[130%] group-hover:scale-100 group-hover:opacity-100 lg:inline-block lg:text-[1.375rem]'>
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </Section>
  )
}
