import { headers } from 'next/headers'
import UAParser from 'ua-parser-js'
import { getRecords } from '@/database/get-records'
import { projectRecordType, techRecordType } from '@/database/airtable'
import Section from '@/components/layout/Section'
import ProjectsPagination from '@/components/ProjectsPagination'

export default async function ProjectsSection() {
  const idSection = 'projects'
  const title = 'Projects'

  const projects = await getRecords(projectRecordType)
  const techs = await getRecords(techRecordType)

  const userAgent = headers().get('user-agent')
  const parser = new UAParser(userAgent || '')
  // 	# Possible 'device.type':
  // console, mobile, tablet, smarttv, wearable, embedded

  // ##########
  // # NOTE: 'desktop' is not a possible device type.
  // # UAParser only reports info directly available from the UA string, which is not the case for 'desktop' device type.
  // # If you wish to detect desktop devices, you must handle the needed logic yourself.
  // # You can read more about it in this issue: https://github.com/faisalman/ua-parser-js/issues/182
  // ##########
  const deviceType = parser.getDevice().type

  return (
    <Section id={idSection} title={title}>
      <ProjectsPagination
        projects={projects}
        techs={techs}
        deviceTypeSSR={deviceType || ''}
      />
    </Section>
  )
}
